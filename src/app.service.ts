import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  a:number[] = [1,2,3,4,5,6,7,8,9,10];
  users:any[] =[
    {
      id:1,
      name:"ram"
    },
    {
      id:2,
      name:"shyam"
    }
    
  ]
  getHello(): string {
    return 'Hello World!';
  }

  getArray():any[]{

    return this.users
  }
}
