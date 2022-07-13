import AddBook from "./AddBook";
import DisplayBooks from "./DisplayBooks";
import { useState } from "react";

function BookApp(props)
{
    function change()
    {
        setToggle(state=>!state)
    }

    var [toggle,setToggle]=useState(false);
    
    return (
        <div className="container-fluid">
            <div style={{margin:"30px 0"}} className="row">
                <div className="col">
                    <AddBook change={change}/>
                </div>
            </div>

            <div className="row">
                <div style={{
                            height:"80vh",
                            overflowX:"hidden",
                            overflowY:"auto"
                        }} 
                        className="col">
                    <DisplayBooks toggle={toggle}/>
                </div>
            </div>
            
        </div>
    );
}
export default BookApp;