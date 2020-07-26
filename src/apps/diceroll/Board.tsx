import React, { Component } from 'react';
import Die from './Die';

interface Props {}
interface State {}

class Board extends Component<Props, State> {
	state = {};

	render(): React.ReactNode {
		return (
			<div>
				<Die value={9} />
				<Die value={2} />
			</div>
		);
	}
}

export default Board;
