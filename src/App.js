// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Laptop from './components/Laptop';
// import Mobiles from './components/Mobiles';
// import UseStateArrays from './components/UseStateArrays';
// import { UseState } from 'react';
// import Projects from './components/Projects';
/*function App() {
  return(
    <header className="App-header">
    <div>
    <Mobiles brandname="Lenova" con="It is very cheap" discount="45%" link="Go To Lenova details!" brandprice="35000"/>
    <Mobiles brandname="Hp" con="It is Good" discount="35%" link="Go To Hp details!" brandprice="45000"/>
    <Mobiles brandname="Dell" con="It is very high price" discount="25%" link="Go To Dell details!" brandprice="55000"/>
    <Mobiles brandname="Apple" con="It is okay" discount="15%" link="Go To Apple details!" brandprice="145000"/>
    <Mobiles brandname="Redmi" con="It is very Good" discount="49%" link="Go To Redmi details!" brandprice="50000"/>
    <Mobiles con="It is very Worst" discount="12%" link="Go To Realmi details!" brandprice="35000"/>
    </div>
    </header>
  );
}*/
// import './App.css';
// import logo from './logo.svg';*/
// import python_image from './python_image.png';
/*function Mybutton()
{
  function fun()
  {
    alert("Good Day!")
  }
  return(
    <button onClick={fun}>My Button</button>
    );
}
export default function App()
{
  const user={
    name:"Idiot",
    imageurl:"D:\REACT\myapp\src\python_image.png",
    imagesize:"30%",
  }
  return(
  <>
  <h4>Wellcome to my App!</h4><br/>
  <Mybutton/><br/>
  <h3>Your name is {user.name}</h3>
  <img src={user.imageurl} alt={"Image Not Found!"}/>

  </>
  );
}*/
// import React, {useState} from 'react';
/*function App()
{
  const [count,setCount]=useState();
function add()
{
  setCount(count+1)
}
function minus()
{
  setCount(count-1)
}
  return(
    <div>
    <h2>{count}</h2><br/>
    <button onClick={add}>Add Button</button><br/>
    <button onClick={minus}>Minus Button</button>
    </div>
    );
} 
export default App;
import UseStateArrays from './components/UseStateArrays';
// import {UseStateArrays} from 'react';
import './App.css';
// import {useState} from 'react';
function App()
{
  return(
    <div className="App">
    <UseStateArrays/>
    </div>
    );
}
export default App;
// import './App.css';
// import Projects from './components/Projects';*/
import Quiz from './components/Quiz';
import './App.css';
function App()
{
  return(
    <Quiz/>
    );
}
export default App;