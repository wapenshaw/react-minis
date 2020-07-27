import React from 'react';
import './Die.css';
interface Props {
	value: number;
	rolling: boolean;
}

const Die: React.FunctionComponent<Props> = ({ value, rolling }) => {
	let dClass: string;
	switch (value) {
		case 1:
			dClass = 'fas fa-dice-one';
			break;
		case 2:
			dClass = 'fas fa-dice-two';
			break;
		case 3:
			dClass = 'fas fa-dice-three';
			break;
		case 4:
			dClass = 'fas fa-dice-four';
			break;
		case 5:
			dClass = 'fas fa-dice-five';
			break;
		case 6:
			dClass = 'fas fa-dice-six';
			break;
		case 7:
			dClass = 'fas fa-dice-seven';
			break;
		case 8:
			dClass = 'fas fa-dice-eight';
			break;
		case 9:
			dClass = 'fas fa-dice-nice';
			break;
		default:
			dClass = 'fas fa-dice-zero';
			break;
	}

	return <i className={`${dClass} Die ${rolling ? 'Rolling' : ''}`}></i>;
};

export default Die;
