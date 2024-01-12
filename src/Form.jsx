import './Form.css';

export function Form(props) {
	let forms = [];
	for (let i = 0; i <= props.count; i++) {
		forms.push(
			<form key={'form' + i}>
				<Inputs inputs={props.inputs} index={i}></Inputs>
			</form>
		);
	}
	return forms;
}

function Inputs(props) {
	let inputs = [];
	for (let j = 0; j < props.inputs.length; j++) {
		let target = props.inputs[j] + props.index;
		inputs.push(
			<div className='input'>
				<label>{props.inputs[j]}</label>
				<input data-target={target} onChange={updateTaget}></input>
			</div>
		);
	}
	return inputs;
}

function updateTaget(e) {
	let target = document.getElementById(e.target.dataset.target);
	target.textContent = e.target.value;
}
