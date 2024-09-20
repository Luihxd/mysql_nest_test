import { IsString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateCatDto {

	@IsString()
	name: string;

	@IsInt()
	@IsPositive()
	age: number;

	@IsString()
	@IsOptional()
	breed: string;

}
