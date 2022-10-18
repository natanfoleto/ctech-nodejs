interface User {
	id: number;
	username: string;
	name: string;
	birth_date: Date;
	phone: string;
	password_hash?: string;
	password_salt?: string;
	created_at: Date;
}

interface CreateUser {
	username: string;
	name: string;
	birth_date: Date;
	password_hash: string;
	password_salt: string;
}

interface UpdateUser {
	id: number;
	phone: string;
}

export { User, CreateUser, UpdateUser };
