import React, { useState } from "react";

const InputSearch = () => {

    const [name, setName] = useState('');
    
    const submitName = (e) => {
        e.preventDefault();
        console.log(name);
        setName('');
    }
   
    return(
        <div>
            <form onSubmit={(e) => {submitName(e)}}>
                <input value={name} onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="Enter Name..." required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default InputSearch;