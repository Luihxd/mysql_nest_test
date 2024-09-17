import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
	@Column( { primary: true, generated: 'increment' } )
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	isActive: boolean;

	@Column()
	password: string;

	//@DeleteDateColumn()
	//deletedAt: Date;
}
