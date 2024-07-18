import { All, Injectable, NotFoundException, Post } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './createUser.dto';

@Injectable ()
export class UsersRepository {
    constructor (
      @InjectRepository(User) private readonly userRepository: Repository <User>){}
     
  async getAllUsers(){
    const allUsers = await this.userRepository.find({
      relations:{orders:true}
    })
    function omitPassword(user:User){
      const {password, ...rest} = user;
      return rest;
    } 
    const allUserNoPass = allUsers.map(omitPassword)
    return allUserNoPass
  }

  async getUserById(id:string){
    const userFinded= await this.userRepository.find({
      where: {id},
      relations:{orders:true}
    })

    if(userFinded.length===0) return new NotFoundException('Usuarix no encontradx');

    function omitPassword(user:User){
      const {password, ...rest} = user;
      return rest;
    }
    return omitPassword(userFinded[0])
  }

  async createUser(user: CreateUserDto){
    const createdUser = await this.userRepository.save(user);
    return createdUser.id;
  }

  async updateUser(user: UpdateUserDto, id:string){
    await this.userRepository.update(id, user);
    const updatedUser = await this.userRepository.findOneBy({id})

    function omitPassword(user:User){
      const {password, ...rest} = user;
      return rest;
    }
    return omitPassword(updatedUser)
  }

  async deleteUser(id:string){
    const deletedUser = await this.userRepository.findOneBy({id});
    this.userRepository.remove(deletedUser)
    return id; 
  }

  async getUserByEmail(email:string){
    return await this.userRepository.findOneBy({email}) 
  }

  }

