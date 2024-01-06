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
				<Card label={PIinput.label} inputs={PIinput.inputs}></Card>
			</div>
			<Display />
		</>
	);
}
