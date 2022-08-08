import React,{useState,useEffect} from "react";
import Data from "../service";
import Add from "./add";
import Todo from "./todo";



export default function TodoList(){
    const [isChanged,change] = useState(false);
    function doTheChange(bool){
        change(bool);
    }
    let todos = Data();
   
    useEffect(() => {
        todos=[JSON.parse(localStorage.getItem('todos'))] ;
    }, [isChanged])
    
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