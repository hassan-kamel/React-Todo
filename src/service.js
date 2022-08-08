function Data(){
    const toos = [
        {id:0,body:"milk the cat",completed:false},
        {id:1,body:"do some sports",completed:true},
        {id:2,body:"learn Nextjs",completed:false},
      ];
    if(!localStorage.getItem("todos")){
        console.log("!todooos");
        localStorage.setItem("todos", JSON.stringify(toos))
    }
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    
    return todos;
}
export default Data;