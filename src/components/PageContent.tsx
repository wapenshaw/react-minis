import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
interface Props {}

const PageContent: React.FunctionComponent<Props> = ({ children }) => {
	const context = useContext(ThemeContext);
	const styles = {
		backgroundColor: context.isDarkMode ? 'black' : 'white',
		height: '100vh',
		width: '100vw',
	};

	return <div style={styles}>{children}</div>;
};

export default PageContent;
