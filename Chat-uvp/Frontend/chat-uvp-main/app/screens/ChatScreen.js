import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const config = {
    headers: {
      accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  };

  const send_data = async (message, messages) => {
    const id = 2;
    setIsTyping(true);
    axios
      .post("http://216.250.118.104/uvp/chat", { message }, config)
      .then((res) => {
        setIsTyping(false);

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, {
            _id: Math.random(),
            text: res.data,
            createdAt: new Date(Date.UTC(2020, 4, 30, 17, 20, 0)),

            user: {
              _id: 2,
              name: "sablecito",
              avatar: "http://deportes.uvp.mx/assets/img/Imagenes/SABLE-2.png",
            },
          })
        );
      })
      .catch((e) => console.log(e));
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    send_data(messages[0].text, messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      messagesContainerStyle={{
        backgroundColor: "#fff",
        top: -20,
      }}
      isTyping={isTyping}
    />
  );
}
