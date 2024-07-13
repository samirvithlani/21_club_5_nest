import { OnGatewayConnection, WebSocketGateway } from "@nestjs/websockets";
import { SocketService } from "./socket/socket.service";
import { Socket } from "socket.io";

@WebSocketGateway(
    {
        cors: {
            origin: 'http://localhost:3001', // Change to the URL of your React app
            credentials: true,
        }
    }
)
export class SocketGateway implements OnGatewayConnection{

    constructor(private socketSerive:SocketService){}
    handleConnection(client:Socket) {
        this.socketSerive.handleConnection(client);
    }

}