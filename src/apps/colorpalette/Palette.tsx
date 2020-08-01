import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

interface Props {
	boxNum: number;
}

const Palette: React.FunctionComponent<Props> = ({ boxNum }) => {
	const boxes = Array.from({ length: boxNum }).map((_b, i) => {
		return <ColorBox key={i} />;
	});

	return <div className="Palette">{boxes}</div>;
};

export default Palette;
