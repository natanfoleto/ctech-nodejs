interface Attraction {
	id: number;
	name: string;
	description: string;
}

interface CreateAttraction {
	name: string;
	description: string;
}

interface UpdateAttraction {
	id: number;
	name: string;
	description: string;
}

export { Attraction, CreateAttraction, UpdateAttraction };
