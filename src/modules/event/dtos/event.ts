interface Event {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	insignia: number;
	competition: number;
}

interface CreateEvent {
	name: string;
	notes: string;
	banner_url: string;
	insignia: number;
	competition: number;
}

interface UpdateEvent {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	insignia: number;
	competition: number;
}

export { Event, CreateEvent, UpdateEvent };
