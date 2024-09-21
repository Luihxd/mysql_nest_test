
import { IsString, IsInt, IsPositive, IsOptional, MinLength } from 'class-validator';


export class UpdateCatDto {
	
	@IsString()
	@MinLength(2)
	@IsOptional()
	name?: string;

	@IsInt()
	@IsPositive()
	@IsOptional()
	age?: number;

	@IsString()
	@IsOptional()
	breed?: string;

}
