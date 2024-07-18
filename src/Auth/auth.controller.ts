import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './loginUser.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/Users/createUser.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  getAuth(){
    return this.authService.getAuth();
  }

  @Post('signin')
    signin(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signin(loginUserDto);
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto){
    return this.authService.signup(createUserDto)
  }
}
