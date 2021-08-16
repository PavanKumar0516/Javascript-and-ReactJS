import  {React,Component} from "react";
import LifeCycleA  from "./LifeCycleA";

class LifeCycleB extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {count:3}
        console.log(" LiftCycleB   Constructor Invoked")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(" LiftCycleB   getDerivedStateFromProps  Invoked");
        return null;
    }
    componentDidMount()
    {
        console.log(" LiftCycleB     componentDidMount invoked ");
    }
    shouldComponentUpdate()
    {
        console.log(" LiftCycleB   shouldComponentUpdate  invoked");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log(" LiftCycleB   getSnapshotBeforeUpdate  invoked");
        return null;
    }

    componentDidUpdate()
    {
        console.log(" LiftCycleB   componentDidUpdate  invoked");
    }
    render()
    {
        console.log(" LiftCycleB   render  invoked");
        return(<div>   Hello Said   LiftCycleB    component   Count :
            {this.state.count} 
            <LifeCycleA/>
            </div>);
    }
}
export default LifeCycleB