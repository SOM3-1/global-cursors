# Global Cursors

## Description

**Global Cursors** is an interactive web application that allows users to see each other's cursors in real-time on a blank webpage. With WebSockets powering real-time communication, users can observe the movement of cursors from others, along with their name and country flag, displayed below their cursor. The cursor is assigned randomly upon joining, and the country is detected based on the user's network connection.

This project demonstrates a collaborative experience where users can share their cursor movements globally, providing an exciting and engaging way to interact with others online.

## Features

- **Real-time Cursor Display**: View other users' cursors in real-time as they move them around the page.
- **User Identification**: Each user’s cursor is labeled with their name and country flag, automatically detected based on their network location.
- **Random Cursor Assignment**: Each user is assigned a random cursor upon joining.
- **No Login Required**: Simply visit the page and start interacting — no authentication required.
- **Instant Updates**: Users see real-time updates as others move their cursors.
  
## How It Works

1. **Visit the Page**: Open the webpage in your browser at [Global Cursors](https://som3-1.github.io/global-cursors/).
2. **See Other Users' Cursors**: Once there are other users on the page, you’ll be able to see their cursors in real-time.
3. **Automatic Cursor Assignment**: Upon joining, the extension assigns you a random cursor that appears on the page.
4. **Location Detection**: The application automatically detects your country using your network connection and displays the appropriate flag next to your name under the cursor.
5. **Real-Time Interaction**: As you move your cursor, all other users on the page will see your cursor move instantly.

## Future Scope

- **Collaborative Drawing**: In future versions, users will be able to collaborate on drawing and creating content together in real-time, directly on the webpage.
- **Multi-User Drawing Space**: Create a shared canvas where users can draw freely, interact, and collaborate on creative tasks.
- **Enhanced User Features**: Add more customization options for users, such as changing the appearance of their cursor, adding avatars, or changing their name.

## Technologies Used

- **WebSockets** for real-time communication between users.
- **Node.js** backend to manage WebSocket connections and user interactions.
- **Geolocation via IP Address** to detect users' country based on their network connection.
- **HTML/CSS/JavaScript** for frontend display and interactions.

## Setup Instructions

To set up **Global Cursors** on your own:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/global-cursors.git
   cd global-cursors
   ```

2. **Install Dependencies**:
   If you have Node.js installed, run the following:
   ```bash
   npm install
   ```

3. **Start the Server**:
   To run the server locally, use:
   ```bash
   npm start
   ```

4. **Open the Web Page**:
   Open a browser and go to `http://localhost:3000`. You can now interact with the real-time cursors of any other users on the same page.

## Disclaimer

- **Real-Time Mouse Tracking**: Users should be aware that this application tracks their mouse movements in real-time. Use responsibly.
- **No User Authentication**: There is no login system, and users are identified based on their network location and randomly assigned cursors.
