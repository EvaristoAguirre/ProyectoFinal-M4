import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginUserDto } from './loginUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Users/user.entity';
import { UsersRepository } from 'src/Users/users.repository';
import { CreateUserDto } from 'src/Users/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UsersRepository
  ){}

  async getAuth(){}

  async signin(loginUserDto: LoginUserDto){
    const {email, password} = loginUserDto;
    if(!email || !password) return new NotFoundException('Credenciales requeridas') ;
    const loginUser = await this.userRepository.getUserByEmail(email);
    if(!loginUser) return new NotFoundException('Credenciales incorrectas') ;
    if(loginUser.password !== password){
      return new NotFoundException('Credenciales incorrectas')
    }
    function omitPassword(user:User){
      const {password, ...rest} = user;
      return rest;
    }
    return ({login: true, user: omitPassword(loginUser)}) 
  }

  async signup(user: CreateUserDto){
    const {email, password} = user
    const foundUser = await this.userRepository.getUserByEmail(email);
    if(foundUser) {
      throw new BadRequestException('El email ya se encuentra registrado')
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await this.userRepository.createUser({
      ...user, 
      password: hashedPass
    })

    return newUser;

  } 
}
