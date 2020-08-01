import React, { Component } from 'react';
import Coin from './Coin';
import flip from './flip.png';
import './CoinFlip.css';

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
		if (Math.random() > 0.5) {
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
			<div className="Coinflip">
				<div className="CoinSide">
					<h3>Flip a Coin!</h3>
					<img
						onClick={this.flipCoin}
						style={{ width: '60px', height: '60px' }}
						src={flip}
						alt="flip"
					/>
					<h4>
						<i className="fas fa-head-side-virus"></i>
						{this.state.heads}
						<i className="fas fa-grip-lines-vertical"></i>
						{this.state.tails}
						<i className="fas fa-dragon"></i>
					</h4>
				</div>
				<Coin heads={this.state.side} />
			</div>
		);
	}
}

export default CoinFlip;
