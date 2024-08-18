import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';

const Game = () => {
    const [socket,setSocket] = useState(null);
    const location = useLocation();
    const { playerName } = location.state || {};
    useEffect(()=>{
        const newSocket = io("http://localhost:6001");
        console.log("New socket connected-- ", newSocket);
        setSocket(newSocket);

    },[]);

    

  return (
    <div>
        Game !!
      
    </div>
  )
}

export default Game
