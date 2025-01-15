import React, { useState } from "react";

function Addtask( props) {

    const [textenterbyuser, textthatisgoingtoaddasnewlist] = useState('');

    return (
        <div className="addtask">
            <input type="text"
            placeholder="What to add today ?"
            value={textenterbyuser}
            onChange={event=>{
                textthatisgoingtoaddasnewlist(event.target.value)
            }}            
            ></input>
            <button type="submit"
            onClick={()=>{
                props.Addtask(textenterbyuser);
                textthatisgoingtoaddasnewlist("");
            }}>save</button>
            {/* <div>{textenterbyuser} </div> for testing purpose  */}
        </div>
    )

}

export default Addtask;