import { CreateQuest, Quest, UpdateQuest } from '@modules/quests/dto/quest';

export interface IQuestRepositories {
	findAll(): Promise<Quest[]>;
	countByName(name: string): Promise<number>;
	create(data: CreateQuest): Promise<Quest>;
	update(data: UpdateQuest): Promise<void>;
	delete(id: number): Promise<void>;
}
