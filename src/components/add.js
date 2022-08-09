import React ,{useEffect}from "react";
import useToggleState from "../hooks/useToggleState";
import Data from "../service";
export default function Add({changing}){
    const [clicked,toggleClick] = useToggleState(false);

    useEffect(()=>{
        document.querySelector('.form').classList.toggle('scale-0');
        document.querySelector('.add-todo').classList.toggle('scale-0');
    },[clicked]);

    let inputVal = ''
    function addTodo(e){
        toggleClick(!clicked);
        changing(inputVal);
        document.querySelector('input').value='';
        const todos = Data();
        todos.push({id:todos.length,body:inputVal,completed:false});
        localStorage.setItem('todos',JSON.stringify(todos));
        
    }
    return(
    <>
        <div className="Add fixed bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:brightness-150 "    onClick={()=>{toggleClick()}}>
                <div className="flex justify-center items-center w-16 h-16 shadow-md bg-bravo rounded-full ">
                    <svg className="w-1/2 " xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64">
                        <line x1="32" x2="32" y2="64" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/><line x2="64" y1="32" y2="32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
                    </svg>
                </div>
        </div>
            {/* **************************** */}
        <div className="form fixed origin-center scale-0 transition-all duration-500 flex justify-center items-center h-[100vh] w-[100vw]  inset-0 z-10  ">
            <div className="add-todo scale-0 duration-300  relative p-5 rounded-xl bg-charlie flex flex-col justify-center items-center gap-8 max-w-[80%]">
                <label className="text-3xl capitalize font-bold ">add todo</label>
                <input className="max-w-[95%] px-4 py-2 rounded-xl text-2xl outline-none"  type="text" placeholder="ex:learn nextjs" onChange={(e)=>{inputVal=e.target.value}}/>
                <button className="shadow-xl rounded-xl px-8 py-2 bg-bravo capitalize cursor-pointer hover:brightness-150 text-white" type="submit" onClick={addTodo}>add</button>
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-alpha absolute -top-3 -left-3 cursor-pointer hover:brightness-150" onClick={toggleClick}>
                    <svg className="w-3/4" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                        <path fill="#fff" d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"/>
                    </svg>
                </div>
            </div>
        </div>
    </>
        
    );
}