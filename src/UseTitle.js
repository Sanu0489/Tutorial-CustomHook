import React, { useEffect, useState } from "react";
import './App.css';

export default function UseTitle(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Inside use Effect");
        if(count >= 1){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats `
        }
    },[count])

    return (
        <div>
            <h1 className="counter">{count}</h1>
            <button className="btn" onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
    
}