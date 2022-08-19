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

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [available, setAvaible] = React.useState(false);
	const [collection, setCollection] = React.useState({
		chk1: false,
		chk2: false,
		chk3: false,
		chk4: false,
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
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<Box
			style={{ padding: '30px' }}
			sx={{ width: 250 }}
			// role='presentation'
			// onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<h5 style={{ padding: '30px', fontFamily: 'roboto' }}>
				Filtering <FilterAltIcon />
			</h5>
			<div className='filter-1'>
				<h6 style={{ fontFamily: 'roboto' }}>Avaibility</h6>
				<FormControlLabel
					control={<Switch onChange={handleChangeSwitch} />}
					label='On Stock'
				/>
			</div>
			<hr />
			<div className='filter-2'>
				<h6 style={{ fontFamily: 'roboto' }}>Collection</h6>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox id='chk1' onChange={handleChangeChk} />}
						label='Abstract'
					/>
					<FormControlLabel
						control={<Checkbox id='chk2' onChange={handleChangeChk} />}
						label='Flowers'
					/>
					<FormControlLabel
						control={<Checkbox id='chk3' onChange={handleChangeChk} />}
						label='Butterflies'
					/>
					<FormControlLabel
						control={<Checkbox id='chk4' onChange={handleChangeChk} />}
						label='Other'
					/>
				</FormGroup>
			</div>
			<hr />
			<div className='filter-3'></div>
			<h6 style={{ fontFamily: 'roboto' }}>Colors</h6>
			<MultOpts />
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
