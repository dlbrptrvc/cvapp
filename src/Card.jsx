import './Card.css';

export function Card({ props }) {
	return (
		<div className='card'>
			<div className='title'>
				<h3>{props.label}</h3>
				<button
					className='arrowBtn'
					data-open='opened'
					onClick={toggleView}
				></button>
			</div>

			<form>
				{props.inputs.map((item) => {
					return (
						<div key={item[0]} className='input'>
							<label>{item[0]}</label>
							{item[1] == 'input' ? (
								<input data-target={item[0]} onInput={updateText}></input>
							) : (
								<textarea data-target={item[0]} onInput={updateText}></textarea>
							)}
						</div>
					);
				})}
			</form>
		</div>
	);
}

function updateText(e) {
	let target = document.querySelector('[id="' + e.target.dataset.target + '"]');
	target.textContent = e.target.value;
}

function toggleView(e) {
	let btn = e.target;
	let form = btn.parentElement.parentElement.children[1];
	if (e.target.dataset.open == 'opened') {
		e.target.style.transform = 'none';
		e.target.dataset.open = 'closed';
		form.style.display = 'none';
	} else {
		e.target.style.transform = 'rotate(180deg)';
		e.target.dataset.open = 'opened';
		form.style.display = 'block';
	}
}
