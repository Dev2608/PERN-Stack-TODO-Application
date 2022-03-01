import React, {Fragment,useState} from "react";

const InputTodo = () => {
    const [description,setDescription]=useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();   // the use of this is that after we press the button the page won't reloade.

        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);      //to get he response on the server
        } catch (err) {
            console.error(err.message);
        }
    };

    return(
        <Fragment>
            <h1 className="text-center my-5">Input Todo</h1>
            <form className="d-flex"onSubmit={onSubmitForm}>
                <input 
                type="text"
                placeholder="add todo"
                className="form-control"
                value={description}
                onChange={e=>setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button> 
            </form>
        </Fragment>
    );
};

export default InputTodo;