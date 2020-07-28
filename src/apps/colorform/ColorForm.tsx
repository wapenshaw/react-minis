import React, { Component } from 'react';

interface Props {
	onAdd: (box: State) => void;
}
interface State {
	height: string;
	width: string;
	color: string;
}

class ColorForm extends Component<Props, State> {
	state = {
		height: '',
		width: '',
		color: '',
	};

	handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value,
		} as { [K in keyof State]: State[K] });
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		this.props.onAdd(this.state);
		this.setState({ height: '', width: '', color: '' });
	};

	render(): React.ReactNode {
		return (
			<div>
				<h1>Enter the sie of the bozed</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="height">Height</label>
					<input
						type="text"
						onChange={this.handleOnChange}
						name="height"
						id="height"
						value={this.state.height}
					/>
					<label htmlFor="width">Width</label>
					<input
						type="text"
						onChange={this.handleOnChange}
						name="width"
						id="width"
						value={this.state.width}
					/>
					<label htmlFor="color">Color:</label>
					<input
						type="text"
						onChange={this.handleOnChange}
						name="color"
						id="color"
						value={this.state.color}
					/>
					<button type="submit">Add the Box!</button>
				</form>
			</div>
		);
	}
}

export default ColorForm;
