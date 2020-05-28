import React,{useState, useEffect} from 'react'
import './game.css'



function Game() {
  
  const [box, setbox] = useState([0,0,0,0,0,0,0,0,0]);
  const [turn, setturn] = useState(0);
  const [endgame, setendgame] = useState(0);
const check2=()=>{
  if(box[0]===box[1] && box[2]===box[1] && (box[0]!==0)){
    return true;
  }
  else if(box[3]===box[4] && box[4]===box[5] && (box[3]!==0)){
    return true;
  }
  else if(box[6]===box[7] && box[7]===box[8] && (box[6]!==0)){
    return true;
  }
  else if(box[0]===box[4] && box[4]===box[8] && (box[0]!==0)){
    return true;
  }
  else if(box[2]===box[4] && box[4]===box[6] && (box[2]!==0)){
    return true;
  }
  else if(box[0]===box[3] && box[3]===box[6] && (box[0]!==0)){
    return true;
  }
  else if(box[1]===box[4] && box[4]===box[7] && (box[7]!==0)){
    return true;
  }
  else if(box[2]===box[5] && box[5]===box[8] && (box[8]!==0)){
    return true;
  }
  return false;
}  


const check=(val)=>{
  if(endgame===1)return;
  console.log(val);
  if(box[val]===0){
    const box2=[...box];
    if(turn===1){
      box2[val]=1;
      setbox(box2);
    }
    else{
      box2[val]=2;
      setbox(box2);
    }
    setturn(turn=>(turn+1)%2);
  }
}
useEffect(()=>{
  if(endgame===0){
  if(check2()){
    let x=turn;
    if(x===1)x=2;
    else x=1;
    window.alert(`player ${x} has won`);
    setendgame(endgame=>endgame+1);
  }
}
},[turn])
  return (
        <div className='main1'>
          <div className='row'>
            <div className='flexitem' onClick={()=>check(0)}>{box[0]}</div>
            <div className='flexitem' onClick={()=>check(1)}>{box[1]}</div>
            <div className='flexitem' onClick={()=>check(2)}>{box[2]}</div>
          </div>
          <div className='row'>
            <div className='flexitem' onClick={()=>check(3)}>{box[3]}</div>
            <div className='flexitem' onClick={()=>check(4)}>{box[4]}</div>
            <div className='flexitem' onClick={()=>check(5)}>{box[5]}</div>
          </div>
          <div className='row'>
            <div className='flexitem' onClick={()=>check(6)}>{box[6]}</div>
            <div className='flexitem' onClick={()=>check(7)}>{box[7]}</div>
            <div className='flexitem' onClick={()=>check(8)}>{box[8]}</div>
          </div>  
        </div>
    )
}
export default Game;