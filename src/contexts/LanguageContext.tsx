import React, { Component, createContext } from 'react';

interface Props {}
interface State {
	language: string;
}

interface ContextProps extends State {
	changeLanguage: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

export const LanguageContext = createContext({
	language: 'french',
} as ContextProps);

export class LanguageProvider extends Component<Props, State> {
	state: State = {
		language: 'french',
	};

	changeLanguage = (e: React.ChangeEvent<{ value: unknown }>): void => {
		this.setState({ language: e.target.value as string });
	};

	render(): React.ReactNode {
		return (
			<LanguageContext.Provider
				value={{ ...this.state, changeLanguage: this.changeLanguage }}
			>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}
