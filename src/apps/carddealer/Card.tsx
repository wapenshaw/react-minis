import React from 'react';
import './Card.css';
interface Props {
	imgURL: string;
	alt: string;
	transfromStr?: string;
}

const Card: React.FunctionComponent<Props> = ({
	imgURL,
	alt,
	transfromStr,
}) => {
	return (
		<img
			style={{ transform: transfromStr }}
			className="Card"
			src={imgURL}
			alt={alt}
		/>
	);
};

export default Card;
