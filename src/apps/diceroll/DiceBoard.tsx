import React, { Component } from 'react';
import Die from './Die';
import './DiceBoard.css';

interface Props {}
interface State {
	diceOne: number;
	diceTwo: number;
	isRolling: boolean;
}

class Board extends Component<Props, State> {
	state = {
		diceOne: 1,
		diceTwo: 1,
		isRolling: false,
	};

	rollDice = (): void => {
		this.setState({
			diceOne: Math.floor(Math.random() * 6 + 1),
			diceTwo: Math.floor(Math.random() * 6 + 1),
			isRolling: true,
		});

		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 1000);
	};

	render(): React.ReactNode {
		return (
			<div className="DiceBoard">
				<div className="dice-container">
					<Die value={this.state.diceOne} rolling={this.state.isRolling} />
					<Die value={this.state.diceTwo} rolling={this.state.isRolling} />
				</div>
				<button disabled={this.state.isRolling} onClick={this.rollDice}>
					{this.state.isRolling ? 'Rolling!!' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default Board;
