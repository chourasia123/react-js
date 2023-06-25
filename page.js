
//rafce

// import React from 'react'


// const page = () => {


//   // const deletehandler =(idx) => {

//   //   console.log("deleted ");
//   //   }

//   // let userlist =<h1>no users preesend</h1>;
//   // if(users.length>0){
//   //   userlist = users.map((ele,idx)=>(
//   //     <li key={idx}>
//   //       {ele.username} |{ele.email} <span onClick={()=>deletehandler}></span>
//   //     </li>
//   //   ))

//   // }




"use client"
import React, { useState } from 'react'
import {FaMixer} from 'react-icons/fa'

const deletehandler =(i)=>{
  const filteruser = user.filter((elem,idx)=> i !==idx)
  setuser(filteruser)
}

const submithandler =(e) =>{
  e.preventDefault()

  setusername("");
  setemail("");
  setuser([...user,newuser])

  // console.log(e.target[0].value)//get the value
  // console.log(e.target.elements.email.value)//get  value
}
const Homepage = () => {

  const submithandler =(e) =>{
    e.preventDefault()
  // if(username.trim === 0 || email.trim === 0){



  // }
  
    setusername("");
    setemail("");
    setuser([...user,newuser])
  
    // console.log(e.target[0].value)//get the value
    // console.log(e.target.elements.email.value)//get  value
  }
 
const [username , setusername] = useState('');
const [email,setemail] = useState('');
// const [active,setactive] = useState(null);
const [user,setuser] = useState([]);
const newuser ={username,email}

let userlist ="no user found";
if (user.length !=0){
userlist =user.map((elem,index) => <li key={index}>
  {elem.username}  {elem.email} {""} 
  {/* <span onClick={() =>deletehandler{i}}> X</span> */}
</li>)
}


// const activeuser = (i)=>{
//   setactive(i);
//   setusername(user.[i].username);
//   setemail(user.[i].email);
//   console.log(i);
// };
// const updatehandler =() =>{
//   const oluser = {...user[active]};
//   const copyuser = [...user];
//   const updateduser = {username,email};
//   copyuser[active] = updateduser;//({...olduser ,...updateuser}
//   setuser(copyuser);
//   setactive(null);
//   setusername("");
//   setemail("");

// }
  useState
  return (

    <form >

      <input type="text" placeholder='username'  value={username}  name='username'
      onChange={(elem)=>{
            setusername(elem.target.value)
      }} 
       />
      <input type="text"  placeholder='email' value={email}  name='email'  
       onChange={(elem)=>{
        setemail(elem.target.value)
       }}
      />
         {/* {active !==null ? ( */}
      <button type='button' onClick={submithandler}>submit</button>

      {/* <button type='button' onClick={submithandler}>update</button>  */}

      <h3>{userlist}  </h3> 
      {/* <span>{ <FaMixer size='1rem' /> }</span> */}
    </form>

    
  )
}

export default Homepage







// export default page
// import {useState} from "react";
// const Home  = () =>{
//   const [time,settime]=useState(new Date().toLocaleTimeString());
//   setInterval(()=>{
//     settime(new Date().toLocaleTimeString());
//   },1000);
//   return{
//     <div><h1>{time</h1></div>
//   };

// }
// 'use client';

// import { useState } from "react";

// // import { useState } from "react";

// const Home  = () =>{

//     const [text,settext]=useState("lorem");
//   useState
//  return(
//   <div>
    
//     <h1>{text}</h1>
//     <button onClick={() =>settext("hello")}>change text </button></div>
    
//  );

//   }
// 'use client';

// import { list } from "postcss";
// import { useState } from "react";

// // import { useState } from "react";

// const Homepage = () =>{

//     const [list,setlist]=useState([
//   { id:"23", name:" hello"},
// { id:"34", name:" i "},
// { id :"78", name:"am"},
// {id:"678" ,name:"coader"},

//     ]);
  
//   let listrender = list.map((ele,index)=>{
//     return <li key={index}>{ele.name}</li>;

//   })

//     console.log(listrender);
//     return(
//       <div>
//         <h1>list render</h1>
//         <ul>{listrender}</ul>
//       </div>
//     )
//     //
//     <form onsubmit={submitHandler}>

// <input  />
//     </form>//
