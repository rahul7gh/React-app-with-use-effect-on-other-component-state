function AddBook(props)
{
    return (
        <form className="row" onSubmit={(e)=>{
            e.preventDefault();
            
            var bookData={
                name:e.target.bname.value,
                author:e.target.author.value,
                price:e.target.price.value
            }

            fetch("/addBook",{
                method:"POST",
                headers:{"Content-type":"application/json" },
                body:JSON.stringify(bookData)
            })
            .then(res=>res.json())
            
            .then(data=>{
                console.log(data);
                props.change();
            })
            
            .catch(err=>console.log(err));
           }}>
            
            <div className="col">
                 <input className="form-control"  type="text" name="bname" id="name" placeholder="Name"/>
            </div>

            <div className="col">
                 <input className="form-control" type="text" name="author" id="name" placeholder="author"/>
            </div>

            <div  className="col">
                 <input className="form-control" type="number" name="price" id="price" placeholder="price" />
            </div>

            <div  className="col">
                <button style={{margin:"auto",width:"40%"}} className="btn btn-primary">Add</button>
            </div>
           
        </form>
    );
}
export default AddBook;