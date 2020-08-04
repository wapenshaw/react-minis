import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {
	MUITodo,
	DadJokes,
	CardDeck,
	CoinFlip,
	PokeGame,
	TodoList,
	YoutubeSearch,
} from '../apps';

interface Props {}

const NavBar: React.FunctionComponent<Props> = () => {
	return (
		<div>
			<div className="App-Nav">
				<div className="App-NavElement">
					<NavLink to="/" exact activeClassName="App-NavActive">
						Home (Dice)
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/todo" exact activeClassName="App-NavActive">
						Todo
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/dadjokes" exact activeClassName="App-NavActive">
						Dad Jokes
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/youtube" exact activeClassName="App-NavActive">
						Youtube
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/pokegame" exact activeClassName="App-NavActive">
						PokeDex
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/carddealer" exact activeClassName="App-NavActive">
						Card Dealer
					</NavLink>
				</div>
				<div className="App-NavElement">
					<NavLink to="/coinflip" exact activeClassName="App-NavActive">
						Coin Flip
					</NavLink>
				</div>
			</div>
			<Switch>
				<Route exact path="/" component={MUITodo} />
				<Route exact path="/dadjokes" render={() => <DadJokes />} />
				<Route exact path="/carddealer" component={CardDeck} />
				<Route exact path="/coinflip" component={CoinFlip} />
				<Route exact path="/pokegame" component={PokeGame} />
				<Route exact path="/todo" component={TodoList} />
				<Route exact path="/youtube" component={YoutubeSearch} />
			</Switch>
		</div>
	);
};

export default NavBar;
