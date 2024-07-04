import React,{useState} from 'react'
import Square from './Square';
import './BoardGame.css';

function BoardGame() {
    const[state,setState]=useState(Array(9).fill(null));
    const[isXturn,setisXturn]=useState(true);

    const checkWinner=()=>{
        const winnerlogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8], 
        [0,4,8],
        [2,4,6],
     ];
  
      
        
     for(let logic of winnerlogic ){
      const[a,b,c]=logic;
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a];
  
      }
      
     }
     return false;
    
    };
    
  
      const isWinner=checkWinner();
       console.log("winner",isWinner)

    const handleclicked=(index)=>{
        const copyState=[...state]
        copyState[index]= isXturn? "X" : "0";
        setState(copyState);
        setisXturn(!isXturn);
   }
  
  return (
    <div className='board-container'>
        <h1>TIC TAC TOE GAME</h1>    
        {isWinner ? (<>{isWinner} won the Game. <button onClick={()=>{
        setState(Array(9).fill(null))
       }}>Play Again</button></>) : (
        <>
        <div className='board-row'>
             <Square onClick={()=>{handleclicked(0)}} value={state[0]} />
             <Square onClick={()=>{handleclicked(1)}} value={state[1]} />
             <Square onClick={()=>{handleclicked(2)}} value={state[2]} />
         </div>
         <div className='board-row'>
         <Square onClick={()=>{handleclicked(3)}} value={state[3]} />
         <Square onClick={()=>{handleclicked(4)}} value={state[4]} />
         <Square onClick={()=>{handleclicked(5)}} value={state[5]} />
         </div>
         <div className='board-row'>
         <Square onClick={()=>{handleclicked(6)}} value={state[6]} />
         <Square onClick={()=>{handleclicked(7)}} value={state[7]} />
         <Square onClick={()=>{handleclicked(8)}} value={state[8]} />
         </div>
         </>
      )} 
      
        

    </div>
  )
}

export default BoardGame
