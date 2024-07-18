import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto, UpdateUserDto } from './createUser.dto';

@Injectable()
export class UsersService {
  
  constructor (
    private readonly usersRepository : UsersRepository){}

  getUsers(){
    return this.usersRepository.getAllUsers();
  }

  getUsersById(id:string){
    return this.usersRepository.getUserById(id);
  }

  createUser(user: CreateUserDto){
    return this.usersRepository.createUser(user);
  }

  updateUser(user: UpdateUserDto, id:string){
    return this.usersRepository.updateUser(user, id);
  }

  deleteUser(id:string){
    return this.usersRepository.deleteUser(id);
  }
}
