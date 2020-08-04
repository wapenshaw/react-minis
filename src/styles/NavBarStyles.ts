/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Theme, createStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			marginBottom: 0,
		},
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20,
		},
		title: {
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '80%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
		},
		searchIcon: {
			widht: theme.spacing(9),
			height: '100%',
			marginLeft: theme.spacing(2),
			position: 'absolute',
			display: 'flex',
			alignItems: 'center',
			justifyItems: 'center',
		},
		inputRoot: {
			color: 'inherit',
			widht: '100%',
		},
		inputInput: {
			paddingTop: theme.spacing(1),
			paddingRight: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			paddingLeft: theme.spacing(10),
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: 120,
				'&:focus': {
					width: 200,
				},
			},
		},
	});

export default styles;
