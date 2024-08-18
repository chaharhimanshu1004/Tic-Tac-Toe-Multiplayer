import React , {useState} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";


const Home = () => {
    const [name,setName] = useState('');
    const navigate =  useNavigate();
    const handlePlay = (e) => {
        e.preventDefault();
        if(!name){
            alert('Enter a name first');
            return;
        }
        navigate('/game', { state: { playerName: name } }); 
        
    };
  return (
    <div className="h-[100vh] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Tic-Tac-Toe
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Enjoy the thrill of our Multiplayer game, where you can team up with
          friends or compete with players worldwide. Dive into the action,
          strategize, and have fun as you explore new levels and unlock
          achievements. Have a great time with the multiplayer experience!
        </p>
        <div className=" flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Your Name..."
            className="rounded-lg border p-4 text-slate-400   h-10 text-lg  border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          />
          <div className="flex items-center justify-center relative z-10">
            <button
              onClick={handlePlay}
              className="inline-flex cursor-pointer h-12 animate-shimmer  items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Play
            </button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Home;
