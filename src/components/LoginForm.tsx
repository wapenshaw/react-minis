import {
	Avatar,
	Paper,
	WithStyles,
	withStyles,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Input,
	FormControlLabel,
	Checkbox,
	Button,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import styles from '../styles/LoginFormStyles';
import { LanguageContext } from '../contexts/LanguageContext';

interface Props extends WithStyles<typeof styles> {}

interface State {}

const words = {
	english: {
		signIn: 'Sign In',
		email: 'Email Address',
		password: 'Password',
		remember: 'Remember Me',
	},
	french: {
		signIn: 'Se Connecter',
		email: 'Adresse Électronique',
		password: 'Mot de Passe',
		remember: 'Souviens-toi De Moi',
	},
	spanish: {
		signIn: 'Registrarse',
		email: 'Correo Electrónico',
		password: 'Contraseña',
		remember: 'Recuérdame',
	},
};

class LoginForm extends Component<Props, State> {
	state = {};
	static contextType = LanguageContext;
	context!: React.ContextType<typeof LanguageContext>;
	render(): React.ReactNode {
		const { classes } = this.props;
		const { language, changeLanguage } = this.context;
		const { email, signIn, password, remember } = words[
			language as keyof typeof words
		];

		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlined />
					</Avatar>
					<Typography variant="h5">{signIn}</Typography>
					<Select onChange={changeLanguage} value={language}>
						<MenuItem value="english">English</MenuItem>
						<MenuItem value="french">French</MenuItem>
						<MenuItem value="spanish">Spanish</MenuItem>
					</Select>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">{email}</InputLabel>
							<Input id="email" name="email" autoFocus></Input>
						</FormControl>{' '}
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">{password}</InputLabel>
							<Input id="password" name="password" autoFocus></Input>
						</FormControl>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label={remember}
						/>
						<Button
							variant="contained"
							type="submit"
							fullWidth
							color="primary"
							className={classes.submit}
						>
							Submit
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(LoginForm);
