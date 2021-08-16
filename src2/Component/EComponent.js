import { useContext } from "react";
import { UserChannel, UserContext } from "../App";

function EComponent() {
    
    const un=useContext(UserContext);
    const cn =useContext(UserChannel);
    return(
        <div>Name : {un} Comp/name: {cn}</div>
    )
}
export default EComponent;