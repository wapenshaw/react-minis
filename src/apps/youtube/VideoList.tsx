import React from 'react';
import { Item } from './api/youtubeV3Types';
import VideoItem from './VideoItem';

interface Props {
	videos: Item[];
	onVideoSelect?: (i: Item) => void;
}

const VideoList: React.FunctionComponent<Props> = ({
	videos,
	onVideoSelect,
}) => {
	const itemList = videos.map((vid) => {
		return (
			<VideoItem
				key={vid.id.videoId}
				video={vid}
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return (
		<div>
			<div className="ui relaxed divided list">{itemList}</div>
		</div>
	);
};

export default VideoList;
