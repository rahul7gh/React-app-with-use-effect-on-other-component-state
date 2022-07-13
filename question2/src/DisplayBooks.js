import {useState,useEffect} from "react";
function DisplayBooks(props)
{
    useEffect(()=>{
        fetch("/books")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setArr(data);
        })
        .catch(err=>console.log(err));
    },
    [props.toggle])

    var [arr,setArr]=useState([{}])

    return (
        <div>
            <table className="table table-dark bg-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((e,i)=> <tr>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.author}</td>
                                            <td>{e.price}</td>
                                        </tr> 
                            )
                    }
                </tbody>
            </table>
        </div>
    );

}
export default DisplayBooks;