import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { signUpDto } from './dto/signUp.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService) { }

        @Post('signup')
        signUp(@Body() signUpDto:signUpDto):Promise<{token:string}>{
            return this.authService.signUp(signUpDto);
        }

}
