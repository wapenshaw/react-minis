import {
	AppBar,
	IconButton,
	InputBase,
	Switch,
	Toolbar,
	Typography,
	withStyles,
	WithStyles,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from '../styles/NavBarStyles';
interface Props extends WithStyles<typeof styles> {}
interface State {}

class NavBar extends Component<Props, State> {
	state = {};
	static contextType = ThemeContext;

	render(): React.ReactNode {
		const { isDarkMode, toggleTheme } = this.context;
		const { classes } = this.props;
		return (
			<LanguageContext.Consumer>
				{(value) => (
					<div className={classes.root}>
						<AppBar
							position="static"
							color={isDarkMode ? 'default' : 'primary'}
						>
							<Toolbar>
								<IconButton className={classes.menuButton} color="inherit">
									<span>🛠</span>
								</IconButton>
								<Typography
									className={classes.title}
									variant="h6"
									color="inherit"
								>
									{value.language}
								</Typography>
								<Switch onChange={toggleTheme} />
								<div className={classes.grow}></div>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<Search />
									</div>
									<InputBase
										placeholder="Search.."
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
									/>
								</div>
							</Toolbar>
						</AppBar>
					</div>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default withStyles(styles)(NavBar);
