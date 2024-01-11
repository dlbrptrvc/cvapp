import './App.css';
import { Card } from './Card';
import { Form } from './Form';
import { Buttons } from './Buttons';
import { Info } from './Info';
import { Education } from './Education';
import { useState } from 'react';

export function App() {
	const [EDUcount, setEDUcount] = useState(0);

	function handleAddEDU() {
		setEDUcount(EDUcount + 1);
	}

	function handleRemoveEDU() {
		if (EDUcount > 0) {
			setEDUcount(EDUcount - 1);
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
						<button onClick={handleRemoveEDU}>Remove</button>
					</div>
				</Card>
			</div>
			<div className='page'>
				<Info></Info>
				<Education props={EDUcount}></Education>
			</div>
		</>
	);
}
