// import axios from 'axios';
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { validateProduct } from '../validations/productValidation';
import '../components/ProductForm.css';

const ProductForm = () => {
  const [input, setInput] = useState({
		name: '',
		description: '',
		img_home: '',
		img_detail: [],
    collection: '',
    type: '',
    stock: '',
    price: '',
    artist: '',
    colors: [],
	});

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

  return (
    <div className='productFormContainer'>
      <form onSubmit={handleSubmit}>
        <span className="uppercase tracking-wide text-black text-center text-xs font-bold mb-2">Product Form</span>

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Name</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='name' placeholder='Name...' value={input.name} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Description</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='description' placeholder='Description...' value={input.description} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Image Home</label>
        <input type='file' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='images' placeholder='Images...' value={input.images} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Images Details</label>
        <input type='file' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='images' placeholder='Images...' value={input.images} onChange={handleChange} />

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

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Stock</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='stock' placeholder='Stock...' value={input.stock} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Price</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='price' placeholder='Price...' value={input.price} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Artist</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='artist' placeholder='Artist...' value={input.artist} onChange={handleChange} />

        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">Colors</label>
        <input type='text' className="w-full bg-gray-300 text-black border border-gray-200 rounded py-1 px-4 mb-3" name='colors' placeholder='Colors...' value={input.colors} onChange={handleChange} />

        <input type={'submit'} value='Add product' />
      </form>
    </div>
  )
};

export default ProductForm;