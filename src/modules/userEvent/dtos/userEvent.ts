interface Associate {
	id_event: number;
	id_user: number;
	nickname: string;
}

interface CreateUserEvent {
	id_event: number;
	id_user: number;
	nickname: string;
}

export { CreateUserEvent, Associate };
