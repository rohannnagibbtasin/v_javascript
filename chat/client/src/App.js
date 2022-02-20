import {useState} from 'react';
import Chat from './Chat';
import './App.css';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3300');

export default function App(){
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room",room);
      setShowChat(true);
    }
  }
  return (
    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input type="text" placeholder="John..." value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder="Room ID..." value={room} onChange={(e)=>setRoom(e.target.value)} />
        <button type="button" onClick={joinRoom}>Join A Room</button>
      </div>
    ) :  (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
