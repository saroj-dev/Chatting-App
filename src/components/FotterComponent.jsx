import React, { useContext, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { Messages } from "../Context";
import { db } from "../firebase/Firebase";

const FotterComponent = () => { 
  
  const { USERNAME, USERLOGO } = useContext(Messages);
  const [ user ]  = USERNAME;
  const [ userLogo ]  = USERLOGO;
  const [typeMessage, setTypeMessage] = useState();
  const generateId = () => {
    var n = new Date().getTime();
    return n;
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeMessage === "" && typeMessage.split(" ").join("") === "") {
      return;
    } else {
      const dataToSend = {
        user,
        id: generateId(),
        data: typeMessage,
        userLogo,
      };
      db.push(dataToSend);
      setTypeMessage("");
    }
  };

  const handleType = (e) => {
    setTypeMessage(e.target.value);
  };
  return (
    <div className="fotter">
      <form className="typingContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          className="typingContainer__box"
          value={typeMessage}
          onChange={handleType}
        />
        <SendIcon className="send__icon" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default FotterComponent;
