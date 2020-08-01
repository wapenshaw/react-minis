import React from 'react';
import head from './heads.png';
import tail from './tails.png';

interface Props {
	heads: boolean | null;
}

const Coin: React.FunctionComponent<Props> = ({ heads }) => {
	let coinImg: string;
	if (heads === null) {
		return <div className="CoinRight">Click To Flip</div>;
	}
	if (heads) {
		coinImg = head;
	} else {
		coinImg = tail;
	}
	return (
		<div className="CoinRight">
			<img
				style={{ height: '100px', width: '100px' }}
				src={coinImg}
				alt={heads ? 'heads' : 'tails'}
			/>
		</div>
	);
};

export default Coin;
