import React, { Component } from 'react';
import './ColorBox.css';

interface Props {}
interface State {
	color: string;
}

export default class ColorBox extends Component<Props, State> {
	allColors = ['purple', 'red', 'magenta', 'aqua', 'lilac', 'orange'];

	state = {
		color: this.allColors[Math.floor(Math.random() * 6)],
	};

	pickColor = (): void => {
		let newColor;
		do {
			newColor = this.allColors[Math.floor(Math.random() * 6)];
		} while (newColor === this.state.color);
		this.setState({ color: newColor });
	};
	handleClick = (): void => {
		this.pickColor();
	};

	render(): React.ReactNode {
		return <div className="Box" onClick={this.handleClick} style={{ backgroundColor: this.state.color }}></div>;
	}
}
