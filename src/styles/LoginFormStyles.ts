/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
	createStyles({
		main: {
			width: 'auto',
			display: 'block',
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3),
			[theme.breakpoints.up('sm')]: {
				width: 400,
				marginLeft: 'auto',
				marginRight: 'auto',
			},
		},
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
				3
			)}px`,
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%',
			marginTop: theme.spacing(4),
		},
		submit: {
			marginTop: theme.spacing(3),
		},
	});

export default styles;
