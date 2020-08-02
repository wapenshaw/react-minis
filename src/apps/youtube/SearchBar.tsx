import React, { Component } from 'react';

interface Props {
	onSearchSubmit: (term: string) => void;
}
interface State {
	searchString: string;
}

class SearchBar extends Component<Props, State> {
	state = {
		searchString: '',
	};

	onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ searchString: event.target.value });
	};

	onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.searchString);
	};

	onButtonClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.searchString);
	};

	render(): React.ReactNode {
		return (
			<div className="ui segment search-bar">
				<form onSubmit={this.onFormSubmit} action="" className="ui form">
					<h2 className="ui center aligned icon header">
						<i className="play circle outline icon"></i>
						Search Youtube
					</h2>
					<div className="ui fluid icon input">
						<input
							placeholder="Search youtube..."
							type="text"
							id="searchString"
							value={this.state.searchString}
							onChange={this.onSearchChange}
						/>
						<div className="ui button" onClick={this.onButtonClick}>
							Search
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
