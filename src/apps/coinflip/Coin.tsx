import React from 'react';

interface Props {
	heads?: boolean;
}

const Coin: React.FunctionComponent<Props> = ({ heads }) => {
	let coinImg: string;
	if (heads) {
		coinImg = 'https://upload.wikimedia.org/wikipedia/commons/3/35/1_Indian_rupee_%281954%29_-_Obverse.jpg';
	} else {
		coinImg = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/1_Indian_rupee_%281954%29_-_Reverse.jpg';
	}

	return (
		<div>
			<img src={coinImg} alt={heads ? 'heads' : 'tails'} />
		</div>
	);
};

export default Coin;
