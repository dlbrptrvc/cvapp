import './App.css';
import { Display } from './Display';
import { Card } from './Card';

export function App() {
	const PIinput = {
		label: 'Personal Information',
		inputs: [
			['Name', 'input'],
			['Address', 'input'],
			['Email', 'input'],
			['Phone', 'input'],
		],
		count: 0,
	};
	const EDUinput = {
		label: 'Education',
		inputs: [
			['School', 'input'],
			['Location', 'input'],
			['Date', 'input'],
			['Degree', 'input'],
		],
		count: 1,
	};
	return (
		<>
			<div className='editor'>
				<Card props={PIinput}></Card>
				<Card props={EDUinput}></Card>
			</div>
			<Display />
		</>
	);
}
