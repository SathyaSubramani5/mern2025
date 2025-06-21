import { createContext } from "react";

const context = createContext();

const UserContext = ({children})=>{
    const user = {name:"viky",phn:"9999999999"}
    return ( 
        <Context.provider value={user}>
        {children}
        </Context.provider>
    )
}
export default Context