import React from 'react';
import { Item } from './api/youtubeV3Types';

interface Props {
	video: Item | null;
}

const VideoPlayer: React.FunctionComponent<Props> = ({ video }) => {
	const url = 'https://www.youtube-nocookie.com/embed/';

	if (!video) {
		return (
			<div className="ui placeholder">
				<div className="image header">
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<div className="paragraph">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</div>
		);
	} else
		return (
			<div>
				<div className="ui embed">
					<iframe
						title="youtube player"
						src={`${url}/${video.id.videoId}`}
					></iframe>
				</div>
				<div className="ui segment">
					<h4 className="ui header">{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
};

export default VideoPlayer;
