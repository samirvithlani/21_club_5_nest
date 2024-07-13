import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketService {
    private readonly connectionClients: Map<string, Socket> = new Map();

    handleConnection(client: Socket) {
        const clientId = client.id;
        console.log(clientId)
        //console.log(client)
        
        this.connectionClients.set(clientId, client);
        client.emit('connection', 'Successfully connected to the server');
    }

    sendNotification(clientId: string, message: string) {
        const client = this.connectionClients.get(clientId);
        console.log('Client:', client);
        if (client) {
            //client.emit('notification', message);
            client.broadcast.emit('notification', message);
            console.log('Notification sent to client');
        } else {
            console.log('Client not found');
        }
    }
}
