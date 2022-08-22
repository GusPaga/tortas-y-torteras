import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { MultOpts } from './MultOpts';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { getFilteredData } from '../redux/actions';

export default function TemporaryDrawer() {
	const [queryColors, setQueryColors] = React.useState([]);
	const dispatch = useDispatch();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [available, setAvaible] = React.useState(true);
	const [collection, setCollection] = React.useState({
		chk1: true,
		chk2: true,
		chk3: true,
		chk4: true,
	});

	const handleChangeSwitch = event => {
		setAvaible(event.target.checked);
	};

	const handleChangeChk = event => {
		switch (event.target.id) {
			case 'chk1':
				setCollection({ ...collection, chk1: event.target.checked });
				break;
			case 'chk2':
				setCollection({ ...collection, chk2: event.target.checked });
				break;
			case 'chk3':
				setCollection({ ...collection, chk3: event.target.checked });
				break;
			case 'chk4':
				setCollection({ ...collection, chk4: event.target.checked });
				break;
		}
	};

	const toggleDrawer = (anchor, open) => event => {
		setQueryColors([]);
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const countSelected = () => {
		// Count selected
		const checked = document.querySelectorAll('.checked');
		const btnText = document.querySelector('.btn-text');
		checked.length
			? (btnText.innerText = `${checked.length} Selected`)
			: (btnText.innerText = 'Select Color');
	};

	const OnClickItem = e => {
		const li = // si el click es en algun span, el elemento es li
			e.target.classList[0] === 'item' ? e.target : e.target.parentElement;
		if (li.className === 'item' && queryColors.length === 3)
			return console.log();
		li.classList.toggle('checked');
		try {
			li.classList[1]
				? queryColors.length <= 2 && // maximo 3 colores
				  setQueryColors([...queryColors, li.childNodes[1].innerText])
				: setQueryColors(
						queryColors.filter(e => e !== li.childNodes[1].innerText)
				  );
		} catch (error) {
			console.log(error);
		}
		countSelected();
	};

	let queryString = '';
	const makeQuery = async () => {
		queryString = `?
		${queryColors[0] ? `color1=${queryColors[0]}&` : ''}
		${queryColors[1] ? `color2=${queryColors[1]}&` : ''}
		${queryColors[2] ? `color3=${queryColors[2]}&` : ''}
		${collection.chk1 ? `collection1=Abstract&` : ''}
		${collection.chk2 ? `collection2=Flowers&` : ''}
		${collection.chk3 ? `collection3=Butterflies&` : ''}
		${collection.chk4 ? `collection4=Other&` : ''}
		stock=${available}
		`.replace(/\s/g, '');
		console.log(queryString);
		dispatch(getFilteredData(queryString));
		setQueryColors([]);
		setCollection({
			chk1: true,
			chk2: true,
			chk3: true,
			chk4: true,
		});
		setAvaible(true);
		document.querySelectorAll('.checked').forEach(e => (e.className = 'item'));
		countSelected();
	};

	const list = anchor => (
		<Box
			style={{ padding: '30px' }}
			sx={{ width: 250 }}
			// role='presentation'
			// onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<button
				onClick={makeQuery}
				className='filter-text'
				style={{ marginBottom: '40px', padding: '10px', fontFamily: 'roboto' }}
			>
				Apply Filter <FilterAltIcon />
			</button>
			<div className='filter-1'>
				<h6 style={{ fontFamily: 'roboto', margin: '20px' }}>Avaibility</h6>
				<FormControlLabel
					control={<Switch onChange={handleChangeSwitch} defaultChecked />}
					label='On Stock'
				/>
			</div>
			<hr />
			<div className='filter-2'>
				<h6 style={{ fontFamily: 'roboto', margin: '20px' }}>Collection</h6>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox id='chk1' onChange={handleChangeChk} defaultChecked />
						}
						label='Abstract'
					/>
					<FormControlLabel
						control={
							<Checkbox id='chk2' onChange={handleChangeChk} defaultChecked />
						}
						label='Flowers'
					/>
					<FormControlLabel
						control={
							<Checkbox id='chk3' onChange={handleChangeChk} defaultChecked />
						}
						label='Butterflies'
					/>
					<FormControlLabel
						control={
							<Checkbox id='chk4' onChange={handleChangeChk} defaultChecked />
						}
						label='Other'
					/>
				</FormGroup>
			</div>
			<hr />
			<div className='filter-3'></div>
			<h6 style={{ fontFamily: 'roboto', margin: '20px' }}>Colors</h6>
			<MultOpts OnClickItem={OnClickItem} queryColors={queryColors} />
			<Divider />
		</Box>
	);

	return (
		<div>
			<React.Fragment key={'left'}>
				<button className='filter-text' onClick={toggleDrawer('left', true)}>
					Filter <FilterAltIcon fontSize='large' />
				</button>
				<Drawer
					anchor={'left'}
					open={state.left}
					onClose={toggleDrawer('left', false)}
				>
					{list('left')}
				</Drawer>
			</React.Fragment>
		</div>
	);
}
