import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './createUser.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Auth/Guards/auth.guard';
import { AuthService } from 'src/Auth/auth.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiBearerAuth() 
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id', ParseUUIDPipe) id:string){
    return this.usersService.getUsersById(id);
  }

  @ApiBearerAuth()
  @Post()
  signup(@Body() user:CreateUserDto){
    return this.authService.signup(user);
  }

  @ApiBearerAuth()
  @Put(':id')
  @UseGuards(AuthGuard)
  updateUser(@Body()user: UpdateUserDto, @Param('id', ParseUUIDPipe) id:string){
    return this.usersService.updateUser(user, id);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id', ParseUUIDPipe) id:string){
    return this.usersService.deleteUser(id)
  }
  
}
