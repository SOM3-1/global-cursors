import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001" 
    : "https://cursors-backend.onrender.com",
  {
    transports: ["websocket", "polling"], 
  }
);

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
        .map(([id, { name, x, y, cursorImage, country, flag }]) => (
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
             src={`${process.env.PUBLIC_URL}/1.svg`}
             alt="cursor"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <div style={{ fontSize: "12px", textAlign: "center", color: "black" }}>
              {name}
            </div>
            {flag && (
              <img
                src={flag}
                alt={`${country} flag`}
                style={{
                  display: "block",
                  margin: "auto",
                  width: "20px",
                  height: "15px",
                }}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default App;
