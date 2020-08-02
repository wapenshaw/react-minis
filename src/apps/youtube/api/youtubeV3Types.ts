export default interface Results {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: PageInfo;
	items?: Item[];
}

export interface Item {
	kind: string;
	etag: string;
	id: ID;
	snippet: Snippet;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ID {
	kind: string;
	videoId: string;
}

export interface Snippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: Thumbnails;
	channelTitle: string;
	liveBroadcastContent: string;
	publishTime: string;
}

export interface Thumbnails {
	default: Thumbnail;
	medium: Thumbnail;
	high: Thumbnail;
}

export interface Thumbnail {
	url: string;
	width: number;
	height: number;
}

export interface PageInfo {
	totalResults: number;
	resultsPerPage: number;
}
