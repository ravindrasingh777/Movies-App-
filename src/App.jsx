import React, { useEffect } from 'react';
import SearchBox from './SearchBox';
import Display from './Display';
import { useState } from 'react';
const App = () => {

   const[Name,setName]=useState("");
   const[Movies,setMovie]=useState([]);
  
      const puttingvalue=(val)=>{
          setName(val);
      }

      const fetchdata=async()=>{
         let API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
         if(Name != ""){
          API=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${Name}`;
        }

        const response=await fetch(API);
        const data=await response.json();
        console.clear()
        console.log(data.results)
        setMovie(data.results);
      }

      useEffect(
        ()=>{
          fetchdata()
        },
        [Name]
      )
  return (
    <>
     <SearchBox puttingvalue={puttingvalue}/>
     <Display Movies={Movies}/>
    </>
  );
}

export default App;
