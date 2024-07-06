import React from "react";
import { ChatComponent } from "./ChatComponent";
import { WebsocketContextProvider } from "../../../context/WebsocketContext";

export const ChatDm: React.FunctionComponent = (): React.JSX.Element => {
    return (
      <WebsocketContextProvider>
          <ChatComponent />
      </WebsocketContextProvider>
    )
}
