import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

//   const id = setInterval(() => {
//     setDate(new Date());
//   }, 1000);

//   console.log(id);

useEffect(()=>{
    const id = setInterval(() => {
        setDate(new Date());
      }, 1000);
    
    console.log(id);
},[])

  return (
    <h1>
      {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
    </h1>
  );
};

export default Clock;
