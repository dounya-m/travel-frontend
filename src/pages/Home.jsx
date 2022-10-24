import React, {useState, useEffect} from 'react'

function Home() {

    const [counter, setCounter] = useState(0);
    const  counterChanger = (type)  => {
        if(type === "increment"){
            setCounter(counter + 1);
        }else{
            setCounter(counter - 1);
        }
    }
    const [name, setName] = useState("you");

    useEffect(() => {
      console.log("listen to name " + name);
    }, [name]);

    // useEffect(() => {
    //     console.log("listen to counter: " + name);
    //   }, [counter]);

    //   useEffect(() => {
    //     console.log("excute one time: " + name);
    //   }, []);

    const handleInput = (e) => setName(e.target.value);


  return (
    <div>
        <h1 className=' text-red-500'>Home</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => counterChanger("increment")} >Increment</button>
        <button onClick={() => counterChanger("likan")}>Decrement</button>

        <input type="text" onChange={handleInput} value={name} />
    </div>
  )
}

export default Home