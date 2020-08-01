import React, { Component } from 'react';
import Coin from './Coin';

interface Props {}
interface State {
	heads: number;
	tails: number;
	side: boolean | null;
}

class CoinFlip extends Component<Props, State> {
	state = {
		heads: 0,
		tails: 0,
		side: null,
	};

	flipCoin = (): void => {
		if (Math.random() > 0.4) {
			this.setState((st) => ({
				heads: st.heads + 1,
				tails: st.tails,
				side: true,
			}));
		} else
			this.setState((st) => ({
				heads: st.heads,
				tails: st.tails + 1,
				side: false,
			}));
	};

	render(): React.ReactNode {
		return (
			<div className="coinflip">
				<h3>Flip a Coin!</h3>
				<Coin heads={!!this.state.side} />
				<button onClick={this.flipCoin}>Flip!</button>
				<h4>
					Heads: {this.state.heads} -- Tails : {this.state.tails}
				</h4>
			</div>
		);
	}
}

export default CoinFlip;
