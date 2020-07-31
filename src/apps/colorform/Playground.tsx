/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Component, ReactFragment } from 'react';
import ColorForm from './ColorForm';
import { v4 as uuid } from 'uuid';

interface Props {}

interface ColorBox {
	height: string;
	width: string;
	color: string;
	id?: string;
}

interface State {
	boxes: ColorBox[];
}

class Playground extends Component<Props, State> {
	state: State = {
		boxes: [],
	};

	handleOnBoxAdd = (box: ColorBox): void => {
		box.id = uuid();
		this.setState((st) => ({
			boxes: [...st.boxes, box],
		}));
	};

	removeBox = (boxId: string): void => {
		this.setState((st) => ({
			boxes: st.boxes.filter((box) => box.id !== boxId),
		}));
	};

	renderBoxes = (): ReactFragment => {
		if (this.state.boxes.length > 0) {
			return this.state.boxes.map((box) => {
				return (
					<div id={box.id} key={box.id}>
						<div
							style={{
								height: box.height + 'em',
								width: box.width + 'em',
								backgroundColor: box.color,
							}}
						></div>
						<button onClick={() => this.removeBox(box.id!)}>
							{' '}
							Remove {box.color} box{' '}
						</button>
					</div>
				);
			});
		} else return <div>No Boxes!</div>;
	};

	render(): React.ReactNode {
		return (
			<div>
				<h1>Color Playground</h1>
				<ColorForm onAdd={this.handleOnBoxAdd} />
				{this.renderBoxes()}
			</div>
		);
	}
}

export default Playground;
