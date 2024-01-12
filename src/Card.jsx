import './Card.css';

export function Card(props) {
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
			{props.children}
		</div>
	);
}

function toggleView(e) {
	let btn = e.target;
	if (btn.dataset.open == 'opened') {
		btn.style.transform = 'none';
		btn.dataset.open = 'closed';
	} else {
		btn.style.transform = 'rotate(180deg)';
		btn.dataset.open = 'opened';
	}
	let forms = Array.from(
		btn.parentElement.parentElement.querySelectorAll('form')
	);
	let btns = Array.from(
		btn.parentElement.parentElement.querySelectorAll('.buttons')
	);
	let elems = forms.concat(btns);
	elems.forEach((elem) => {
		if (e.target.dataset.open == 'closed') {
			elem.style.display = 'none';
		} else {
			elem.style.display = 'flex';
		}
	});
}
