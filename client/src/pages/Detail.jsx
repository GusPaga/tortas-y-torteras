// import Dog from "../components/Dogs";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { setLoading } from '../redux/actions';
// import './DogDetail.css';

function Detail() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	// const history = useHistory();
	const dispatch = useDispatch();
	// const { redLoading } = useSelector(state => state);

	useEffect(() => {
		async function fetchData() {
			try {
				dispatch(setLoading(true));
				const response = await axios.get('http://localhost:3000/Products');
				setProduct(response.data); // ➡ Guardar datos
				dispatch(setLoading(false));
			} catch (error) {
				alert(error);
			}
		}
		fetchData();
	}, [dispatch, id]);

	let myproduct = {};
	if (product.length) myproduct = product?.find(e => e.id === Number(id));
	else return <h1>Cargando...</h1>;

	return (
		<div>
			<h1>{myproduct.id}</h1>
			<h1>{myproduct.name}</h1>
			<h1>{myproduct.description}</h1>
			<h1>{myproduct.colors}</h1>
			<h1>{myproduct.size}</h1>
		</div>
	);
}

export default Detail;
