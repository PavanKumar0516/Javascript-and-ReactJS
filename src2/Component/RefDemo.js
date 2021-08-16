import React,{Component} from "react";

class RefDemo extends Component
{
    constructor(props)
    {
        super(props);
        this.inputRef=React.createRef();
    }
//-------------------------------------
    clickHandler=()=>{
           console.log(" Yupu Typed "+this.inputRef.current.value);
    }
    //--------------------------------------
    render()
    {
        return(<div>
            <input type="text" ref={this.inputRef}></input><br/>
            <button onClick={this.clickHandler}>Click Me</button>

        </div>);
    }
}

export default RefDemo;