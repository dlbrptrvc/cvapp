import './App.css';
import { Card } from './Card';
import { Form } from './Form';
import { Buttons } from './Buttons';
import { Info } from './Info';
import { Education } from './Education';
import { useState } from 'react';

const [EDUcount, setEDUcount] = useState(0);

export function App() {
	return (
		<>
			<div className='editor'>
				<Card props={'Personal Information'}>
					<Form props={['Name', 'Adress', 'Phone', 'Email']}></Form>
				</Card>
				<Card props={'Education'}>
					<Form
						props={['School', 'Date', 'Location', 'Degree']}
						count={EDUcount}
					></Form>
					<Buttons props={EDUcount}></Buttons>
				</Card>
			</div>
			<div className='page'>
				<Info></Info>
				<Education props={EDUcount}></Education>
			</div>
		</>
	);
}
