import React from 'react';
import yt from './api/youtube';
import Results, { Item } from './api/youtubeV3Types';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

interface Props {}
interface State {
	videoList: Item[];
	selectedVideo: Item | null;
}

class App extends React.Component<Props, State> {
	state: State = {
		videoList: [],
		selectedVideo: null,
	};

	onSearchSubmit = async (term: string): Promise<void> => {
		const response = await yt.get('/search', {
			params: {
				q: term,
			},
		});

		const results = response.data as Results;
		this.setState({
			videoList: results.items || [],
			selectedVideo: response.data.items[0],
		});
	};

	onSelectedVideo = (item: Item): void => {
		this.setState({ selectedVideo: item });
	};

	render(): React.ReactNode {
		return (
			<div className="ui container" style={{ marginTop: '20px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="nine wide column">
							<VideoPlayer video={this.state.selectedVideo} />
						</div>
						<div className="seven wide column">
							<VideoList
								videos={this.state.videoList}
								onVideoSelect={this.onSelectedVideo}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
