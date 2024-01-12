export function Einfo(props) {
	let output = [];
	for (let i = 0; i <= props.count; i++) {
		output.push(<Outputs outputs={props.inputs} index={i}></Outputs>);
	}
	return (
		<>
			<h4>{props.label}</h4>
			{output}
			<div className='line'></div>
		</>
	);
}

function Outputs(props) {
	let outputs = [];
	for (let j = 0; j < props.outputs.length; j++) {
		let id = props.outputs[j] + props.index;
		switch (j) {
			case 0:
				outputs.push(<h5 id={id}></h5>);
				break;
			case 1:
				outputs.push(<h5 id={id}></h5>);
				break;
			default:
				outputs.push(<p className='info' id={id}></p>);
		}
	}
	return <div className='grid'>{outputs}</div>;
}
