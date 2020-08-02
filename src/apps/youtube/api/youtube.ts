import axios from 'axios';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_URL = process.env.REACT_APP_GYT_URL;

export default axios.create({
	baseURL: API_URL,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: API_KEY,
	},
});
