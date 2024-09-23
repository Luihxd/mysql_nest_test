import { Cat } from "src/cats/entities/cat.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";
import { isString } from "util";

@Entity()

export class Breed {

	@Column( { primary: true, generated: 'increment' })
	id: number;

	@Column()
	name: string;

	//Parece que si, pero este arreglo no saldrá en la base de datos
	@OneToMany(() => Cat, (cat) => cat.breed)
	cats: Cat[];

}
