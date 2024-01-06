import './App.css';
import { Display } from './Display';
import { Card } from './Card';

export function App() {
	const PIinput = {
		label: 'Personal Information',
		inputs: ['Name', 'Adress', 'Email', 'Phone'],
	};
	return (
		<>
			<div>
				<Card props={PIinput}></Card>
			</div>
			<Display />
		</>
	);
}
