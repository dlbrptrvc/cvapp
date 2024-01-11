import './Card.css';

export function Card({ props }) {
	console.log(props);
	return (
		<div className='card'>
			<div className='title'>
				<h3>{props}</h3>
				<button
					className='arrowBtn'
					data-open='opened'
					onClick={toggleView}
				></button>
			</div>
		</div>
	);
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
