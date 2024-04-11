import React, { Component } from 'react';
import './TicTacToe.css';

import o from '../Assets/o.webp';
import x from '../Assets/x.png';

let data = ['','','','','','','','',''];

const TicTacToe = () => {

  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);
  let titleRef = React.useRef(null);

  const won = (winner) => {
    setLock(true);
    if(winner === 'X') {
      titleRef.current.innerHTML = 'X wins';
    }
    else {
      titleRef.current.innerHTML = 'O wins';
    }
  }

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = '<img src="https://static.vecteezy.com/system/resources/previews/031/130/178/original/neon-letter-x-on-transparent-background-png.png"></img>';
      data[num] = 'X';
      setCount(count + 1)
    }

    else {
      e.target.innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/019/044/760/small/glowing-circle-frame-free-png.png"/>';
      data[num] = 'O';
      setCount(count + 1)
    }

    checkWin();
    
  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[2]);
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
      won(data[5]);
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
      won(data[8]);
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
  }
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
      won(data[7]);
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
      won(data[8]);
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
      won(data[7]);
    }
    else if(data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[8]);
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
      won(data[6]);
    }


}






  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe</h1>
      
      <div className='board'>

        <div className='row1'>
             <div className='box' onClick={(e)=>{toggle(e,0)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,1)}}></div>
             <div className='box' onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div className='row2'>
            <div className='box' onClick={(e)=>{toggle(e,3)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,4)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div className='row3'>
            <div className='box' onClick={(e)=>{toggle(e,6)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,7)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,8)}}></div>
        </div> 

      </div>
      
      <button className='reset' onClick={() => {window.location.reload()}}>Reset</button>
    </div>
  );
}


export default TicTacToe;