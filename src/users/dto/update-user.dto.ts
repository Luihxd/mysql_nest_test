import { IsString, IsEmail, IsBoolean, MinLength, IsOptional } from 'class-validator';
export class UpdateUserDto {
	
	@IsString()
	@MinLength(2)
	@IsOptional()
	name: string;

	@IsString()
	@IsEmail()
	@IsOptional()
	email: string;

	@IsBoolean()
	@IsOptional()
	isActive: boolean;

	@IsString()
	@IsOptional()
	password: string;
}
