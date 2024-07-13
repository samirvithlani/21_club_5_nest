import { Module } from '@nestjs/common';
import { SocketService } from './socket/socket.service';
import { SocketGateway } from './socket.gateway';
import { SocketController } from './socket/socket.controller';


@Module({
  providers: [SocketGateway,SocketService],
  controllers: [SocketController]
})
export class SocketModule {}
