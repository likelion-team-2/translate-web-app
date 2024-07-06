import React, { useContext, useState } from "react";
import { WebSocketContext } from "../../../context/WebsocketContext";
import TextInput from "../../../components/Input/TextInput";
import { Button } from "antd";
import { useAuth } from "../../../context/AuthContext";
import { TUserLogin, TransportModel, eRegion } from "../../../constants/types";
import { IMessage } from "@stomp/stompjs/esm6/i-message";

export const ChatComponent: React.FunctionComponent = () => {
    const { ws } = useContext(WebSocketContext)!;
    const authContext = useAuth();
    // TODO: Implement userInfo when login
    // const userInfo = authContext?.userInfo;
    const userInfo : TUserLogin = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJuZ21hbmgiLCJpYXQiOjE3MjAyMzc0MDksImV4cCI6MTcyMDI0MTAwOX0.b1Bxls9NR0iFhJZVABRdGSI1NHf4jHxDk4a_ED_Tz5Y",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0ODI4MmQ4MS1mNTk4LTQwY2YtYjRiMy1iZDQwMDkyNjZjNTgiLCJpYXQiOjE3MjAyMzc0MDksImV4cCI6MTcyMDMyMzgwOX0.FCytJTmc0h2qsHs5cI-x5SsTueKv357AT9rhpRHMUcM",
        user: {
            userId: "48282d81-f598-40cf-b4b3-bd4009266c58",
            username: "user2",
            email: "ngmanh@gmail.com",
            nickname: "string",
            regionCountry: eRegion.VN
        }
    }
    const [message, setMessage] = useState("");
    const [hasMessageValue, setHasMessageValue] = React.useState<boolean>(false);

    const onChangeMessage= (v: string) => {
        setMessage(v);
    }

    React.useMemo(() => {
        setHasMessageValue(message.length > 0)
    }, [message]);

    React.useEffect(() => {
        if (ws?.connected) {
            ws.subscribe(`/topic/user/${userInfo?.user.username}`, (res: IMessage) => {
                const responseData = JSON.parse(res.body);
                console.log("responseData", responseData)
            });
        }
    }, [ws, userInfo]);

    function sendMessage(message: string) {
        if (message !== "" && ws?.connected) {
            console.log("SENDING MESSAGE", message);
            ws.publish({
                destination: "/message",
                body: JSON.stringify({
                    sender: userInfo?.user.username,
                    recipient: userInfo?.user.username,
                    sessionId: "1",
                    content: message,
                    token: authContext?.token,
                } as TransportModel)
            });
        }
    }
    
    function submitMessage(event: any) {
        
        if (message !== "") {
            event.preventDefault();
            sendMessage(message);
            setMessage("");
        }
    }
    
    return (
    <>
        <TextInput hasValue={hasMessageValue} onValueChange={onChangeMessage}
        />
        <Button onClick={submitMessage}>Send</Button>
    </>
    );
}
