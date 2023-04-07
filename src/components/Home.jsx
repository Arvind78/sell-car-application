import React, { useState } from 'react'
import "../css/home.css"
import {Input,Button ,Card} from 'antd'
const Home = () => {
  const [searchValue,setSearchValue]=useState("");
  const [model,setModel]=useState("");
  const [mileage,setMileage]=useState("");
  const [price,setPrice]=useState("");

  const searchHandel =()=>{
     alert(model)
  }
  return (
    <div className='contenar'>
      <div className="sidebar">
        <Card style={{width:320,height:400,border:"1px solid lightgray",
             margin:"60px 10px"}}>
         <div className="filter">
          <h3>Filter</h3>
         </div>
         <div className="serch">
          <Input type='search' placeholder='Search...' 
          onChange={(e)=>setSearchValue(e.target.value)}/>
          <Button onClick={searchHandel}>Serach</Button>
         </div>
         
         <div className="filter-on-price">
          <span>Price: </span>
           <select  onChange={(e)=>setPrice(e.target.value)} >
           <option >-- --- -- --- select --- -- --- ---</option> 
            <option value="desc">Highest to Lowest</option>
            <option value="asc">Lowest  to Highest </option>
           </select>
         </div>

         <div className="filter-car-color">
          <span>Color:</span>
          <select  onChange={(e)=>setModel(e.target.value)} >
           <option >-- -- --- --- select --- --- -- --</option> 
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
    
          </select>
         </div>

         <div className="filter-color">
          <span>Mileage:</span>
          <select  onChange={(e)=>setMileage(e.target.value)}>
           <option  >-- --- --- select --- --- --</option> 
           <option value="asc">Lowest  to Highest </option>
           <option value="desc">Highes to Lowest</option>
             </select>
         </div>
        </Card>
      </div>
      <div className="main-conternar">
   
      </div>
    </div>
  )
}

export default Home