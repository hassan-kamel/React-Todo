import React,{useState} from "react";

export default function useToggleState(val){
    const [value,setValue]=useState(val);
    function toggleVal(){
        setValue(!value);
    }
    return [value,toggleVal]
}