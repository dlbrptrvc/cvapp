import './App.css';
import { Card } from './Card';
import { Form } from './Form';
import { Info } from './Info';
import { Einfo } from './Einfo';
import { useState } from 'react';

export function App() {
	const [EDUcount, setEDUcount] = useState(0);
	const [EXPcount, setEXPcount] = useState(0);

	function handleAddEDU() {
		setEDUcount(EDUcount + 1);
	}

	function handleRemoveEDU() {
		setEDUcount(EDUcount - 1);
	}

	function removeEDUButton(count) {
		if (count > 0) {
			return <button onClick={handleRemoveEDU}>Remove</button>;
		} else {
			return;
		}
	}

	function handleAddEXP() {
		setEXPcount(EXPcount + 1);
	}

	function handleRemoveEXP() {
		setEXPcount(EXPcount - 1);
	}

	function removeEXPButton(count) {
		if (count > 0) {
			return <button onClick={handleRemoveEXP}>Remove</button>;
		} else {
			return;
		}
	}

	return (
		<>
			<div className='editor'>
				<Card label={'Personal Information'}>
					<Form inputs={['Name', 'Address', 'Phone', 'Email']} count={0}></Form>
				</Card>
				<Card label={'Education'}>
					<Form
						inputs={['School', 'City', 'Attended', 'Degree']}
						count={EDUcount}
					></Form>
					<div className='buttons'>
						<button onClick={handleAddEDU}>Add</button>
						{removeEDUButton(EDUcount)}
					</div>
				</Card>
				<Card label={'Experience'}>
					<Form
						inputs={['Work', 'Location', 'Years', 'Description']}
						count={EXPcount}
					></Form>
					<div className='buttons'>
						<button onClick={handleAddEXP}>Add</button>
						{removeEXPButton(EXPcount)}
					</div>
				</Card>
			</div>
			<div className='page'>
				<Info></Info>
				<Einfo
					label='Education'
					inputs={['Attended', 'School', 'City', 'Degree']}
					count={EDUcount}
				></Einfo>
				<Einfo
					label='Experience'
					inputs={['Years', 'Work', 'Location', 'Description']}
					count={EXPcount}
				></Einfo>
			</div>
		</>
	);
}
