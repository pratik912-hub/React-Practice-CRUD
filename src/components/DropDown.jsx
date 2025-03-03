import { useState } from "react";

const DropDown = () =>{

    const [options, setOptions] = useState([])
    const [nation, setNation ] = useState({name: "", value: ""})

    function handleInput(e){
        setNation({
            ...nation, [e.target.name] : e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(nation.name && nation.value){
            setOptions([...options,nation])
            setNation({name: "", value: ""})
        }
        else{
            console.log("enter valid value")
        }
    }

    function handleChange(e){
        console.log(e.target.value);
    }

    return(
    <>
    <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
            <option value="Select">--Select</option>
            {options.map(op=><option value={op.value}>{op.name}</option>)}
        </select>

        <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInput}
        value={nation.name}
      />
      <input
        type="text"
        name="value"
        placeholder="Values"
        onChange={handleInput}
        value={nation.value}
      />
      <button>Submit</button>
    </form>
        </>
    )

}
export default DropDown;