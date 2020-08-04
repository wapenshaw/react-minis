import React, { Component, createContext } from 'react';

interface Props {}
interface State {
	isDarkMode: boolean;
}

interface ContextProps extends State {
	toggleTheme: () => void;
}

export const ThemeContext = createContext({
	isDarkMode: false,
} as ContextProps);

export class ThemeProvider extends Component<Props, State> {
	state: State = {
		isDarkMode: false,
	};

	toggleTheme = (): void => {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	};

	render(): React.ReactNode {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, toggleTheme: this.toggleTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
