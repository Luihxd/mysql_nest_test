import { IsString, IsEmail, IsBoolean, MinLength } from 'class-validator';

export class CreateUserDto {

	@IsString()
	@MinLength(2)
	name: string;

	@IsString()
	@IsEmail()
	email: string;

	@IsBoolean()
	isActive: boolean;

	@IsString()
	password: string;
}
