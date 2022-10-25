// import React, {useState, useEffect} from 'react'

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
    <section>
      <div className="cercle"></div>
      <div className="home_main_contant">
      <h1 className="title">L'ets travel together</h1>
      </div>
    </section>
  )
}

export default Home