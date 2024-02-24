import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/users")
  getAllUsers():any[]{
    return this.appService.getArray();
  }
  
  @Get("/users1")
  getAllUsers1(@Req() req,@Res() res):any[]{
    return res.status(200).json({
      messgae:"user fetch successfully",
      data:this.appService.getArray()
    })
  }

  @Post("/users")
  addUser(@Req() req,@Res() res):any[]{

    let user = req.body;
    console.log(user)
    this.appService.users.push(user);

    return res.status(200).json({
      messgae:"user added successfully",
      data:this.appService.getArray()
    })
  }

  @Get("/users/:id")
  getUserById(@Req() req,@Res() res):any[]{

    const id = req.params.id;
    console.log(id)
   return res.status(200).json({
      messgae:"user fetch successfully",
      data:this.appService.users.find(user=>user.id == id)
    })
  }

  
}
