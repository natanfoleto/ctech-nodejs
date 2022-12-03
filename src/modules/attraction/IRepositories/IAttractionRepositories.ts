import {
	Attraction,
	CreateAttraction,
	UpdateAttraction,
} from '../dto/attraction';

export interface IAttractionRepositories {
	findAll(): Promise<Attraction[]>;
	countByName(name: string): Promise<number>;
	create(data: CreateAttraction): Promise<Attraction>;
	update(data: UpdateAttraction): Promise<void>;
	delete(id: number): Promise<void>;
}
