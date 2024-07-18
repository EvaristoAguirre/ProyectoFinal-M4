import { IsEmail, IsNotEmpty, IsStrongPassword, Length} from 'class-validator';

export class LoginUserDto {
    /**
     * Debe ser un string en formato email
     * @example 'example@example.com'
     */
    @IsNotEmpty()
    @IsEmail()
    email: string;

    /**
     * Debe ser una cadena de entre 4 y 10 caracteres que contenga al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*)
     * @example 'aAa1234@'
     */
    @IsNotEmpty()
    @IsStrongPassword()
    @Length(4,10)
    password: string;
}