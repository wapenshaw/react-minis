import React from 'react';

interface Props {
	value: number;
}

const Die: React.FunctionComponent<Props> = ({ value }) => {
	return (
		<div>
			<h1>Die : {value}</h1>
		</div>
	);
};

export default Die;
