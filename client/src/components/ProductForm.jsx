// import axios from 'axios';
import { useState, useEffect } from 'react';
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
    size: '',
    diameter: '',
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
        <span className='productFormHeader'>Product Form</span>

        <label>Name</label>
        <input type='text' name='name' placeholder='Name...' value={input.name} onChange={handleChange} />

        <label>description</label>
        <input type='text' name='description' placeholder='Description...' value={input.description} onChange={handleChange} />

        <label>Image Home</label>
        <input type='text' name='img_home' placeholder='Image...' value={input.img_home} onChange={handleChange} />

        <label>Image Detail</label>
        <input type='text' name='img_detail' placeholder='Image...' value={input.img_detail} onChange={handleChange} />

        <label>Collection</label>
        <input type='text' name='collection' placeholder='Collection...' value={input.collection} onChange={handleChange} />

        <label>Type</label>
        <input type='text' name='type' placeholder='Type...' value={input.type} onChange={handleChange} />

        <label>Size</label>
        <input type='text' name='size' placeholder='Size...' value={input.size} onChange={handleChange} />

        <label>Diameter</label>
        <input type='text' name='diameter' placeholder='Diameter...' value={input.diameter} onChange={handleChange} />

        <label>Stock</label>
        <input type='text' name='stock' placeholder='Stock...' value={input.stock} onChange={handleChange} />

        <label>Price</label>
        <input type='text' name='price' placeholder='Price...' value={input.price} onChange={handleChange} />

        <label>Artist</label>
        <input type='text' name='artist' placeholder='Artist...' value={input.artist} onChange={handleChange} />

        <label>Colors</label>
        <input type='text' name='colors' placeholder='Colors...' value={input.colors} onChange={handleChange} />

        <input type={'submit'} value='Add product' />
      </form>
    </div>
  )
};

export default ProductForm;