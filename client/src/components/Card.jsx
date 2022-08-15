import './Card.css'

export default function Card(props) {
	const { id, img_home } = props;

	return (
		 <div
      style={{
        backgroundImage: `url(${img_home})`,
      }}
      className="card"
    >
      <div className="border">
          <h2>{id}</h2>
       
      </div>
    </div>
	);
}
