
import React,{useState} from "react";
import Data from "../service";
import Add from "./add";
import Todo from "./todo";



export default function TodoList(){
    const [,change] = useState(false);

    function doTheChange(bool){
        change(bool);
    }
    let todos = Data();
   
    
    return(
        <div className="todo-list">
            {
                todos.map((todo)=>{
                    return <Todo todo={todo}  changing={doTheChange}/>
                }) 
            }
            <Add  changing={doTheChange}/>
        </div>
    );

    
}