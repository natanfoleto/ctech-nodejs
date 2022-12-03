export interface Attraction {
	id: number;
	name: string;
	description: string;
}

export interface CreateAttraction {
	name: string;
	description: string;
}

export interface UpdateAttraction {
	id: number;
	name: string;
	description: string;
}
