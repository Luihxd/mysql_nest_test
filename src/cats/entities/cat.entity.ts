import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Cat {
	@Column( { primary: true, generated: 'increment' } )
	id: number;

	@Column()
	name: string;

	@Column()
	age: number;
	
	// @Column()
	// @ManyToOne(() => Breed, (breed) => breed.id)
	// breed_id: number;

	//El eager: true trae la raza al hacer un findone
	@ManyToOne(() => Breed, (breed) => breed.id, { eager: true })
	breed: Breed;

	
	@Column()
	@DeleteDateColumn()
	deletedAt: Date;
}
