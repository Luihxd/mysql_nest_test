import { IsString, IsInt, IsPositive, IsOptional, MinLength } from 'class-validator';
import { Breed } from 'src/breeds/entities/breed.entity';

export class CreateCatDto {

	@IsString()
	@MinLength(2)
	name: string;

	@IsInt()
	@IsPositive()
	age: number;

	//@IsString()
	@IsOptional()
	breed?: Breed;

}
