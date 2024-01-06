export function Card(props) {
	console.log(props, props.label);
	return (
		<div className='card'>
			<h2>{props.label}</h2>
			<form>
				{props.inputs.map((item) => {
					return <h3>{item}</h3>;
				})}
			</form>
		</div>
	);
}
