import React, { useContext, useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import { userContext } from "../context/userContext";

const url = "http://206.189.91.54//api/v1/messages";

function ChatInput(props) {
  const loggedInUser = useContext(userContext)[0];
  const [message, setMessage] = useState("");
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  const config = {
    method: "post",
    url,
    headers: {
      "content-type": "application/json",
      ...loggedInUser,
    },

    data: {
      receiver_id: props.receiver_id,
      receiver_class: props.receiver_class,
      body: message,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleMessageChange}
        id="body"
        value={message}
        autoComplete="off"
        placeholder={`Send message`}
      />
      <StyledSubmit type="submit">
        <SendIcon />
      </StyledSubmit>
    </StyledForm>
  );
}
// }

export default ChatInput;

const StyledForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  margin: 5px 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
`;

const StyledSubmit = styled.button`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-inline: 2rem;

  > .MuiSvgIcon-root {
    font-size: 36px;
  }
  :hover {
    color: gray;
  }
`;
