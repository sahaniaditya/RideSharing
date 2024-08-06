import React, { useState } from "react";
import profileContext from "./profileContext";

const profileState = (props) => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <profileContext.Provider value={{name,setName, email, setEmail}}>
            {props.children}
        </profileContext.Provider>
        
      )


}

export default profileState