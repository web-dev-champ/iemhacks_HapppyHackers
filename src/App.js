import { useRef } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { Chat } from "./components/chat";
import { useState } from "react";
import Cookies from "universal-cookie";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut= async ()=>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);

  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter Room Name : </label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Room
          </button>
        </div>
      )}
      <div className="sign-out">
        <button className="Sbut" onClick={signUserOut}>Sign Out</button>
      </div>

    </div>
  );
}

export default App;
