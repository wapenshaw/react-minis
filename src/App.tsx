import React from 'react';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import PageContent from './components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FunctionComponent = () => {
	return (
		<ThemeProvider>
			<PageContent>
				<LanguageProvider>
					<NavBar />
					<LoginForm />
				</LanguageProvider>
			</PageContent>
		</ThemeProvider>
	);
};

export default App;
