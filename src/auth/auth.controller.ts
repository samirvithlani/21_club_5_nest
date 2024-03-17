import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { signUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags("Authentication")
@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService) { }

        @Post('signup')
        signUp(@Body() signUpDto:signUpDto):Promise<{token:string}>{
            return this.authService.signUp(signUpDto);
        }

        @Post('login')
        async login(@Body() loginDto:LoginDto,@Req() req,@Res() res):Promise<{token:string}>{
            //return this.authService.login(loginDto);
            const data = await this.authService.login(loginDto);
           return  res.status(200).json({
                message: 'Login successful',
                data: data
            });
        }

}
