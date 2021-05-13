import React from 'react';
import messageReducer, { addMessageAC } from "./messageReducer";

let state = {
  usersMessages: [
    { message: "Hi, How are you?", id: "1" },
    { message: "Hi, Where you been? What happened?", id: "2" },
    {
      message:
        "At me All right. I'm worked more time, because don;t called you",
      id: "3",
    },
  ],
};

it("apend new post shoul be 'Hello...'", () => {
  let action = addMessageAC("Hello, is it test, dont afraid");

  let newState = messageReducer(state, action);

  expect(newState.usersMessages[3].message).toBe("Hello, is it test, dont afraid");
});

it("length of post should be equal 4", () => {
  let action = addMessageAC("Hello, is it test, dont afraid");

  let newState = messageReducer(state, action);

  expect(newState.usersMessages.length).toBe(4);
});
