import { Body, Controller, Post } from '@nestjs/common';
import { SocketService } from './socket.service';

@Controller('socket')
export class SocketController {

    constructor(private socketService:SocketService){}

    @Post("send")
    sendNotification(@Body() body: { clientId: string, message: string }) {
        const { clientId, message } = body;
        //console.log(clientId, message);
        this.socketService.sendNotification(clientId, message);
    }


}
