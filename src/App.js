import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const App = () => {
  const [cursors, setCursors] = useState({});
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const name = prompt("Enter your name:");
    setGuestName(name);

    const handleMouseMove = (event) => {
      socket.emit("cursor-move", { name, x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    socket.on("update-cursors", (data) => {
      setCursors(data);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {Object.entries(cursors)
        .filter(([id]) => id !== socket.id)
        .map(([id, { name, x, y, cursorImage }]) => (
          <div
            key={id}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <img
              src={cursorImage} 
              alt="cursor"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <div
              style={{
                fontSize: "12px",
                textAlign: "center",
                color: "black",
              }}
            >
              {name}
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;