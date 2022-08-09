/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Data from "../service";
 
export default function Todo(props){
    const todos = Data();
    // console.log(props.changing);
    const[complete,completIt]=useState(props.todo.completed);

    let pClass = `capitalize ${complete?"line-through text-fire":"text-echo"}`;
    let svgBoxClass = `flex justify-center items-center rounded-full shadow-xl w-8 h-8 cursor-pointer  border-bravo border border-solid ${complete?"bg-bravo":""}`;

    function updateTodo(){
        completIt(!complete);
        const todo = {id:props.todo.id,body:props.todo.body,completed:!complete};
        todos[props.todo.id]=todo;
        console.log('todos: ', todos);
        localStorage.setItem('todos',JSON.stringify(todos));
        props.changing(todo);
    }

    function deleteTodo(){
        let newTodo = [];
        let idx=0;
        todos.forEach((todo)=>{
            if(todo.body!=props.todo.body){
                todo.id=idx;
                newTodo.push(todo);  
                idx++;
            }          
        })  
        console.log('todos: ', newTodo);
        localStorage.setItem('todos',JSON.stringify(newTodo));
        props.changing(newTodo);

    }
    return (
        
            <div className="Todo  bg-white group relative hover:shadow-2xl transition-all duration-500 flex justify-between items-center w-4/5 max-w-lg mx-auto rounded-full shadow-lg my-5 px-5 py-2 ">
                <p className={pClass}>{props.todo.body}</p>
                <div className={svgBoxClass} onClick={updateTodo}>
                    <svg  className="w-full fill-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                        <path fill="" fill-rule="evenodd" d="M34.6709 16.2585C35.0805 16.629 35.1121 17.2614 34.7415 17.6709L21.3858 32.4325L13.3095 24.7234C12.91 24.342 12.8953 23.709 13.2766 23.3095C13.658 22.91 14.291 22.8953 14.6905 23.2767L21.2809 29.5675L33.2585 16.3291C33.629 15.9196 34.2614 15.8879 34.6709 16.2585Z" clip-rule="evenodd"/>
                    </svg>
                    
                </div> 
                <div className="flex group-hover:opacity-100 opacity-0 justify-center items-center w-5 h-5 rounded-full absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:brightness-150" onClick={deleteTodo}>
                    <svg className="w-full fill-alpha" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 60 60" viewBox="0 0 60 60">
                        <path  d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1
                        h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2
                        c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6
                        h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"/><path d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"/>
                    </svg>
                </div>
            </div> 
    );
}