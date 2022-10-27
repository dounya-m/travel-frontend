// import React, {useState, useEffect} from 'react'

import Header from '../componenets/home/Header'
function Home() {

    // const [counter, setCounter] = useState(0);
    // const  counterChanger = (type)  => {
    //     if(type === "increment"){
    //         setCounter(counter + 1);
    //     }else{
    //         setCounter(counter - 1);
    //     }
    // }
    // const [name, setName] = useState("you");

    // useEffect(() => {
    //   console.log("listen to name " + name);
    // }, [name]);

    // useEffect(() => {
    //     console.log("listen to counter: " + name);
    //   }, [counter]);

    //   useEffect(() => {
    //     console.log("excute one time: " + name);
    //   }, []);

    // const handleInput = (e) => setName(e.target.value);


  return (
    <section className="relative ">
      < Header />
    </section>
    
  )
}

export default Home