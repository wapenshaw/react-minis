import React from 'react';
import { Item } from './api/youtubeV3Types';

interface Props {
	video: Item;
	onVideoSelect?: (i: Item) => void;
}

const VideoItem: React.FunctionComponent<Props> = ({
	video,
	onVideoSelect,
}) => {
	return (
		<div
			className="video-item item"
			onClick={() => {
				if (video && onVideoSelect) {
					onVideoSelect(video);
				} else {
				}
			}}
		>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<label className="header">{video.snippet.title}</label>
			</div>
		</div>
	);
};

export default VideoItem;
