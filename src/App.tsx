import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import {
	CardDeck,
	CoinFlip,
	ColorPlayground,
	DadJokes,
	DiceBoard,
} from './apps';

const App: React.FunctionComponent = () => {
	return (
		<div className="App">
			<div className="App-Nav">
				<ul>
					<li>
						<NavLink to="/" exact activeClassName="App-NavActive">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/dadjokes" exact activeClassName="App-NavActive">
							Dad Jokes
						</NavLink>
					</li>
					<li>
						<NavLink to="/carddealer" exact activeClassName="App-NavActive">
							Card Dealer
						</NavLink>
					</li>
					<li>
						<NavLink to="/coinflip" exact activeClassName="App-NavActive">
							Coin Flip
						</NavLink>
					</li>
					<li>
						<NavLink to="/colorform" exact activeClassName="App-NavActive">
							Color Form
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="App-Comp">
				<Switch>
					<Route exact path="/" component={DiceBoard} />
					<Route exact path="/dadjokes" component={DadJokes} />
					<Route exact path="/carddealer" component={CardDeck} />
					<Route exact path="/coinflip" component={CoinFlip} />
					<Route exact path="/colorform" component={ColorPlayground} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
