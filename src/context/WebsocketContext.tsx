import { Client, IMessage } from "@stomp/stompjs";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { initWebSocket } from "../config/websocketConfig";
import {useAuth} from "./AuthContext"
import { TUserLogin, eRegion } from "../constants/types";

type WebSocketContextType = {
    ws: Client | undefined
    isWsConnected: boolean
    setWsClient: (ws: Client) => void
    setWsConnected: (isConnected: boolean) => void
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined)

const WebsocketContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [ws, setWsClient] = useState<Client | undefined>(undefined)
    const [isWsConnected, setWsConnected] = useState<boolean>(false)
    const authContext = useAuth();
    // TODO: Implement userInfo when login
    // const userInfo = authContext?.userInfo;
    const userInfo : TUserLogin = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJuZ21hbmgiLCJpYXQiOjE3MjAyMzc0MDksImV4cCI6MTcyMDI0MTAwOX0.b1Bxls9NR0iFhJZVABRdGSI1NHf4jHxDk4a_ED_Tz5Y",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0ODI4MmQ4MS1mNTk4LTQwY2YtYjRiMy1iZDQwMDkyNjZjNTgiLCJpYXQiOjE3MjAyMzc0MDksImV4cCI6MTcyMDMyMzgwOX0.FCytJTmc0h2qsHs5cI-x5SsTueKv357AT9rhpRHMUcM",
        user: {
            userId: "48282d81-f598-40cf-b4b3-bd4009266c58",
            username: "user1",
            email: "ngmanh@gmail.com",
            nickname: "string",
            regionCountry: eRegion.VN
        }
    }

    useEffect(() => {
        if (userInfo && userInfo.accessToken !== null) {
            initWs(userInfo)
        }
    }, [])

    async function initWs(user: TUserLogin) {
        const wsObj = await initWebSocket(user.accessToken);
        setWsClient(wsObj);
        wsObj.onConnect = () => {
            console.log("WS connected");
            // wsObj.subscribe(`/topic/user/${userInfo?.user.userId}`, (res: IMessage) => {
            //     console.log("res", res)
            // });
        }

        wsObj.onStompError = (error) => {
            console.error("Cannot connect to STOMP server", error);
        }

        wsObj.onWebSocketError = (evt) => {
            console.log("Cannot connect to server", evt);
        }
        wsObj.activate();
    }

    return (
        <WebSocketContext.Provider value={{
            ws,
            isWsConnected,
            setWsClient,
            setWsConnected
        }}>
            {children}
        </WebSocketContext.Provider>
    )
}

export {WebSocketContext, WebsocketContextProvider}
