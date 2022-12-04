interface Game {
	id: number;
	name: string;
	device: string;
	free: number;
	schedules: string;
	banner_url: string;
}

interface CreateGame {
	name: string;
	device: string;
	free: number;
	schedules: string;
	banner_url: string;
}

interface UpdateGame {
	id: number;
	name: string;
	device: string;
	free: number;
	schedules: string;
	banner_url: string;
}

export { Game, CreateGame, UpdateGame };
