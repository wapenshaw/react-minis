/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, ReactFragment } from 'react';
import { DECK, CARDS, CARD } from './types';
import Axios from 'axios';
import { API_BASE } from './helpers';
import Card from './Card';
import './Deck.css';

interface Props {}
interface State {
	deck: DECK;
	drawn: CARD[];
}

class Deck extends Component<Props, State> {
	state: State = {
		deck: {
			deck_Id: '',
			remaining: 0,
			shuffled: false,
			success: false,
		},
		drawn: [],
	};

	componentDidMount = async (): Promise<void> => {
		const response = await Axios.get(`${API_BASE}/new/shuffle/`);
		this.setState({ deck: response.data as DECK });
	};

	getCard = async (): Promise<void> => {
		try {
			const cardURL = `${API_BASE}/${this.state.deck.deck_Id}/draw/`;
			const response = await Axios.get(cardURL);
			const drawnCard = response.data as CARDS;
			const angle = Math.random() * 90 - 45;
			const xPos = Math.random() * 40 - 20;
			const yPos = Math.random() * 40 - 20;
			const translate = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
			if (!drawnCard.success) {
				throw new Error('No card Remanining');
			}
			drawnCard.cards[0].transformStr = translate;
			this.setState((st) => ({
				drawn: [...st.drawn, drawnCard.cards[0]],
			}));
		} catch (error) {
			console.log(error);
		}
	};

	renderCards = (): ReactFragment => {
		return this.state.drawn.map((c) => (
			<Card
				transfromStr={c.transformStr}
				alt={c.code}
				key={c.code}
				imgURL={c.images.png}
			/>
		));
	};

	render(): React.ReactNode {
		return (
			<div className="Deck">
				<div className="Deck-Header">
					<h1>
						<i className="fas fa-crown"></i> Card Dealer{' '}
						<i className="fas fa-crown"></i>
					</h1>
					<button className="Deck-Button" onClick={this.getCard}>
						<i className="fas fa-club">DRAW</i>
					</button>
				</div>
				<div className="CardArea">{this.renderCards()}</div>
			</div>
		);
	}
}

export default Deck;
