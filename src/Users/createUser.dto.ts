import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength, Validate} from 'class-validator';
import { MatchPassword } from 'src/Decorators/matchPass.decorator';


export class CreateUserDto {


    /**
     * Debe ser un string de entre 3 y 80 caracteres
     * @example 'Example User'
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    /**
     * Debe ser un string en formato email
     * @example 'example@example.com'
     */
    @IsNotEmpty()
    @IsEmail()
    email: string;

    /**
     * Debe ser una cadena de entre 8 y 15 caracteres que contenga al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*)
     * @example 'aAa1234@'
     */
    @IsStrongPassword()
    @MinLength(8)
    @MaxLength(15)
    password: string;

    @IsNotEmpty()
    @Validate(MatchPassword, ['password'])
    confirmPassword:string;

     /**
     * Debe ser un string de entre 3 y 80 caracteres
     * @example 'Calle falsa 1234'
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

     /**
     * Debe ser un número
     * @example '112345678'
     */
    @IsNotEmpty()
    @IsNumber()
    phone: number;

     /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'País de ejemplo'
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    country: string;

    /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'Ciudad de ejemplo'
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    city: string;
}

export class UpdateUserDto {

    /**
     * Debe ser un string de entre 3 y 80 caracteres
     * @example 'Example User'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    /**
     * Debe ser un string en formato email
     * @example 'example@example.com'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    /**
     * Debe ser una cadena de entre 4 y 10 caracteres que contenga al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*)
     * @example 'aAa1234@'
     */
    @IsStrongPassword()
    @MinLength(8)
    @MaxLength(15)
    password: string;

    /**
     * Debe ser un string de entre 3 y 80 caracteres
     * @example 'Calle falsa 1234'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

     /**
     * Debe ser un número
     * @example '112345678'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    phone: number;

    /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'País de ejemplo'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    country: string;

    /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'Ciudad de ejemplo'
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    city: string;
}