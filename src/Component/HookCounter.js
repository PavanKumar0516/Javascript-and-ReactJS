import React,{useState} from "react";
function HookCounter() {
   /* let initialCount=1
    const [count,setCount]=useState(initialCount);
    const [name,setName]=useState("capgemini");
    const incrementByFive=()=>{
        
            setCount(prevCount=>prevCount+5)
        
    }
    return (<div>
        Count : {count}<br/>
        <button onclick={()=>{setCount(initialCount)}}>Reset</button><br/>
        <button onclick={()=>{
            setCount((prevCount)=>{ return prevCount+1})
        }

        }>Increment</button><br/>
        <button onclick={()=>{
            setCount((prevCount)=>{return prevCount-1})
        }

        }>Decrement</button><br></br>
        <button onclick={incrementByFive}>IncrementByFive</button>
    </div>)*/
    
    const [name,setName]=useState({firstName:"",lastName:""})
    const [items,setItems]=useState([]);
//----------------------------------
    const addItem=()=>{
    console.log(".....");
    setItems([...items,{
    id:items.length,
    value:Math.floor(Math.random()*10)+1
    }])
    }
    return(<div>
        <form>
            FirstName : <input type="text" value={name.firstName} onChange={
                (event)=>{setName({...name,firstName:event.target.value})}
            }/><br/>
           LastName : <input type="text" value={name.lastName} onChange={
               (event)=>{setName({...name,lastName: event.target.value})}}/><br></br>
        </form>
        <h2>Full Name:{name.firstName}-{name.lastName}</h2>
    <hr/>
    <button onClick={addItem}> Add A Number </button>
    <ul>
    {
        items.map(item=>{return (
        <li key={item.id}> {item.value}</li>
            )}) 
            }
    </ul>
    </div>)
    
}
export default HookCounter