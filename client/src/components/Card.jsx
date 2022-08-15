export default function Card(props) {
	const { id, img_home } = props;

	return (
		<div>
			<h5>Soy la Card</h5>
      <h1>{id}</h1>
      <img style={{width:"100px"}}  src={img_home} alt=""/>
		</div>
	);
}
