interface Event {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
}

interface CreateEvent {
	name: string;
	notes: string;
	banner_url: string;
}

interface UpdateEvent {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
}

export { Event, CreateEvent, UpdateEvent };
