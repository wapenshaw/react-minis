import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { getHighResImage } from './api/helpers';

const useStyles = makeStyles({
	root: {
		maxWidth: 200,
	},
	media: {
		height: 200,
	},
});

interface Props {
	name: string;
	baseExp: number;
	type: string;
	id: number;
}

const PokeCard: React.FunctionComponent<Props> = ({ name, baseExp, type, id }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={getHighResImage(id)} title={name} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Base Experience: {baseExp}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Type: {type}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PokeCard;
