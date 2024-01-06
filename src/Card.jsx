export function Card(props) {
	return (
		<div className='card'>
			<h3>{props.label}</h3>
			<form>
				{props.inputs.map((item) => {
					return (
						<div key={item}>
							<label>{item}</label>
							<input id={item}></input>
						</div>
					);
				})}
			</form>
		</div>
	);
}
