import { IsString, MinLength } from 'class-validator';
export class UpdateBreedDto {
		
	@IsString()
	@MinLength(2)
	name: string
	

}
