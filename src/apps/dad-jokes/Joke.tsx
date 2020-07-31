import React, { Component } from 'react';
import './Joke.css';

interface Props {
	yoke: string;
	id: string;
	votes: number;
	upvote: () => void;
	downvote: () => void;
}
interface State {}

export default class Joke extends Component<Props, State> {
	state = {};
	getColor = (): string => {
		if (this.props.votes >= 15) return '#4CAF50';
		else if (this.props.votes >= 12) return '#8BC34A';
		else if (this.props.votes >= 9) return '#CDDC39';
		else if (this.props.votes >= 6) return '#FFEB3B';
		else if (this.props.votes >= 3) return '#FFC107';
		else if (this.props.votes >= 0) return '#FF9800';
		else return '#F44336';
	};

	getEmoji = (): string => {
		if (this.props.votes >= 15) return 'em em-rolling_on_the_floor_laughing';
		else if (this.props.votes >= 12) return 'em em-laughing';
		else if (this.props.votes >= 9) return 'em em-smiley';
		else if (this.props.votes >= 6) return 'em em-slightly_smiling_face';
		else if (this.props.votes >= 3) return 'em em-neutral_face';
		else if (this.props.votes >= 0) return 'em em-confused';
		else return 'em em-angry';
	};

	render(): React.ReactNode {
		return (
			<div className="Joke">
				<div className="Joke-Buttons">
					<i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
					<span style={{ borderColor: this.getColor() }} className="Joke-Votes">
						{this.props.votes}
					</span>

					<i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
				</div>
				<div className="Joke-Text">{this.props.yoke}</div>
				<div className="Joke-Smiley">
					<i className={this.getEmoji()}></i>
				</div>
			</div>
		);
	}
}
