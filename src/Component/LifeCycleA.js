import  {React,Component} from "react";

class LifeCycleA extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {count:10}
        console.log(" LiftCycleA   Constructor Invoked")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(" LiftCycleA   getDerivedStateFromProps  Invoked");
        return null;
    }
    componentDidMount()
    {
        console.log(" LiftCycleA     componentDidMount invoked ");
    }
    shouldComponentUpdate()
    {
        console.log(" LiftCycleA   shouldComponentUpdate  invoked");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log(" LiftCycleA   getSnapshotBeforeUpdate  invoked");
        return null;
    }

    componentDidUpdate()
    {
        console.log(" LiftCycleA   componentDidUpdate  invoked");
    }
    render()
    {
        console.log(" LiftCycleA   render  invoked");
        return(<div>   Hello Said   LiftCycleA    component   Count :
            {this.state.count} </div>);
    }
}
export default LifeCycleA