import React, { Component, ReactFragment } from 'react';
import Joke from './Joke';
import Axios from 'axios';
import { JOKE } from './types';
import './JokeList.css';

interface Props {}
interface State {
	jokes: JOKE[];
	loading: boolean;
}

export default class JokeList extends Component<Props, State> {
	state: State = {
		jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
		loading: false,
	};

	standardProps = {
		numJokesToGet: 10,
	};

	seenJokes = new Set<string>();

	componentDidMount = (): void => {
		if (this.state.jokes.length === 0) this.getJokes();
		this.seenJokes = new Set(this.state.jokes.map((j) => j.id));
	};

	getJokes = async (): Promise<void> => {
		try {
			const jokes: JOKE[] = [];
			while (jokes.length < this.standardProps.numJokesToGet) {
				const response = await Axios.get('https://icanh2azdadjoke.com/', {
					headers: {
						Accept: 'application/json',
					},
				});
				if (!this.seenJokes.has(response.data.id)) {
					jokes.push(response.data as JOKE);
					jokes[jokes.length - 1].votes = 0;
				}
			}
			this.setState(
				(st) => ({
					jokes: [...st.jokes, ...jokes],
					loading: false,
				}),
				() =>
					window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
			);
			window.localStorage.setItem('jokes', JSON.stringify(jokes));
		} catch (error) {
			alert(error);
			this.setState({ loading: false });
		}
	};

	handleVote(id: string, delta: number): void {
		this.setState(
			(st) => ({
				jokes: st.jokes.map((j) =>
					j.id === id ? { ...j, votes: j.votes + delta } : j
				),
			}),
			() =>
				window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
		);
	}

	handleNewJokes = (): void => {
		this.setState({ loading: true }, this.getJokes);
	};

	renderJokes = (): ReactFragment => {
		const jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
		return jokes.map((jk) => {
			return (
				<Joke
					upvote={() => this.handleVote(jk.id, 1)}
					downvote={() => this.handleVote(jk.id, -1)}
					key={jk.id}
					id={jk.id}
					votes={jk.votes}
					yoke={jk.joke}
				/>
			);
		});
	};

	render(): React.ReactNode {
		if (this.state.loading) {
			return (
				<div className="JokeList-Spinner">
					<i className="far fa-8x fa-laugh fa-spin"></i>
					<h2 className="JokeList-Title">Loading...</h2>
				</div>
			);
		}
		return (
			<div className="JokeList">
				<div className="JokeList-Sidebar">
					<h1 className="JokeList-Title">
						<span>Dad</span> Jokes!
					</h1>
					<img src="./assets/lmao.svg" alt="DadJokes!" />
					<button onClick={this.handleNewJokes} className="JokeList-getMore">
						New Jokes!
					</button>
				</div>
				<div className="JokeList-Jokes">{this.renderJokes()}</div>
			</div>
		);
	}
}
