
import { IsString, IsInt, IsPositive, IsOptional, MinLength } from 'class-validator';
import { Breed } from 'src/breeds/entities/breed.entity';


export class UpdateCatDto {
	
	@IsString()
	@MinLength(2)
	@IsOptional()
	name?: string;

	@IsInt()
	@IsPositive()
	@IsOptional()
	age?: number;

	// @IsString()
	@IsOptional()
	breed?: Breed;

}
