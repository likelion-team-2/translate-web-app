import { Client } from "@stomp/stompjs";
import http from "../http-common";

const WS_URL = process.env.NODE_ENV === "development" ? "localhost:8080/" : "localhost:8080/"

const WS_BROKER = process.env.NODE_ENV === "development" ? "ws" : "wss"

export async function initWebSocket(userToken: string): Promise<Client> {
    console.log("Initiating WS connection...");
    return new Client({
        brokerURL: `${WS_BROKER}://${WS_URL}ws`,
        // connectHeaders: { clientSessionId: crypto.randomUUID(), Authorization: `Bearer ${userToken}` },
        // connectHeaders: {
        //     login: 'guest',
        //     passcode: 'guest',
        //   },
        reconnectDelay: 500000,
        heartbeatIncoming: 0,
        heartbeatOutgoing: 20000,
        // onConnect: () => {
        //     console.log('Connected');
        //     client.subscribe('/topic/messages', (message) => {
        //         console.log('Received: ' + message.body);
        //     });
        //     client.publish({ destination: '/app/chat', body: 'Hello, STOMP!' });
        // },
        // onStompError: (frame) => {
        //     console.error('Broker reported error: ' + frame.headers['message']);
        //     console.error('Additional details: ' + frame.body);
        // },
        // debug: (str) => {
        //     console.log('STOMP: ' + str);
        // },
    });
}
