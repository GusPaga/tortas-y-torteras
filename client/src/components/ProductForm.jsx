// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../redux/actions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { validateProduct } from '../validations/productValidation';
import '../components/ProductForm.css';

const ProductForm = () => {
  const { redColors } = useSelector(state => state);
	const [queryColors, setQueryColors] = useState([]);
	const dispatch = useDispatch();
  const [input, setInput] = useState({
		name: '',
		description: '',
		imageMain: '',
		imagesDetail: [],
    collection: '',
    type: '',
    stock: '',
    artist: '',
    colors: [],
	});

  const countSelected = () => {
		const checked = document.querySelectorAll('.checked');
		const btnText = document.querySelector('.btn-text');
		checked.length
			? (btnText.innerText = `${checked.length} Selected`)
			: (btnText.innerText = 'Select Color');
	};

  const handleOnClickDiv = () => {
		dispatch(getColors());
		document.querySelector('.select-btn').classList.toggle('open');
	};

  const handleOnClickRender = () => {
		// 	document.querySelector('.select-btn').classList.toggle('open');
		// 	dispatch(clearDogs());
		// 	dispatch(setPage(1));
		// 	dispatch(getTempDogs({ temp: queryColors }));
		// 	handleOnClickDiv();
	};

  const OnClickItem = e => {
		const li = // si el click es en algun span, el elemento es li
			e.target.classList[0] === 'item' ? e.target : e.target.parentElement;
		li.classList.toggle('checked');
		try {
			li.classList[1]
				? setQueryColors([...queryColors, li.childNodes[1].innerText])
				: setQueryColors(
						queryColors.filter(e => e !== li.childNodes[1].innerText)
				  );
		} catch (error) {
			console.log(error);
		}
		countSelected();
	};

	const [error, setError] = useState({});

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validateProduct({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
		if (!input.name || !!Object.keys(error).length)
			alert('Some fields are missing');
		else alert('Product created!')
  };

  useEffect(() => {}, []);

  // console.log(error.stock)
  return (
    <div className='productFormContainer'>
      <form onSubmit={handleSubmit}>
        <span className="uppercase tracking-wide text-black text-center text-lg font-bold mb-2">Product Form</span>

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Name</label>
        <input type='text' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='name' placeholder='Name...' value={input.name} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Description</label>
        <input type='text' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='description' placeholder='Description...' value={input.description} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Image Main</label>
        <input type='file' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='imageMain' placeholder='Image main...' accept="image/" value={input.imageMain} required />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Images Details</label>
        <input type='file' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='imagesDetail' placeholder='Images...' accept="image/" value={input.imagesDetail} multiple required />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Collection</label>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue="abstract"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="abstract" control={<Radio />} label="Abstract" />
            <FormControlLabel value="flowers" control={<Radio />} label="Flowers" />
            <FormControlLabel value="butterflies" control={<Radio />} label="Butterflies" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Type</label>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue="cake tray"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="cake tray" control={<Radio />} label="Cake Tray" />
            <FormControlLabel value="turntable" control={<Radio />} label="Turntable" />
          </RadioGroup>
        </FormControl>

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Turntable</label>
        <input type='text' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='turntable' placeholder='1 or 2...' value={input.stock} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Artist</label>
        <input type='text' className="w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3" name='artist' placeholder='Artist...' value={input.artist} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Colors</label>
        <div onClick={handleOnClickDiv} className='select-btn'>
          <span className='btn-text'>Select Color </span>
          <span onClick={handleOnClickRender} className='filter'>
            <i className='fa-solid fa-paintbrush'></i>
          </span>
			  </div>
        <ul className='list-items'>
				{redColors.map(c => (
					<li key={c.id} className='item' onClick={OnClickItem}>
						<span
							className='checkbox'
							style={{
								backgroundColor: `${c.hex}`,
								borderColor: `${c.hex}`,
							}}
						>
							<i className='fa-solid fa-check check-icon'></i>
						</span>
						<span id={`item${c.id}`} className='item-text'>
							{c.name}
						</span>
					</li>
				))}
			</ul>

        <input type={'submit'} value='Add product' className="uppercase tracking-wide text-black text-sm font-bold mb-2 border-solid border-1 border-indigo-600/60 rounded-md" />
      </form>
    </div>
  )
};

export default ProductForm;