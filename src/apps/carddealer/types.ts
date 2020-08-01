export interface DECK {
	success: boolean;
	deck_id: string;
	remaining: number;
	shuffled: boolean;
}

export interface CARDS {
	success: boolean;
	deck_id: string;
	cards: CARD[];
	remaining: number;
}

export interface CARD {
	code: string;
	image: string;
	images: IMAGES;
	value: string;
	suit: string;
	transformStr?: string;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IMAGES {
	svg: string;
	png: string;
}
