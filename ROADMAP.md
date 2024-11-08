### Kazakh Typing Race Application

This Kazakh typing race application is a web-based platform aimed at helping users improve their typing skills in the Kazakh language, initially using the Cyrillic alphabet. Inspired by traditional typing test applications, this project focuses on competitive typing experiences with an emphasis on tracking personal performance over time. The app’s purpose is to offer both individual practice and multiplayer racing options, fostering a supportive typing community with features for both anonymous guest usage and registered accounts.

As an open-source project, the application will start with a single-player mode and essential typing functionalities. Future phases will expand the user experience by adding session management to prevent data loss on refresh, user account registration, performance tracking, and a multiplayer mode. Developed using Node.js and Express for backend processing and React with Tailwind CSS for the frontend, the application’s architecture will be modular and high-performing to support future scalability.

---

### **Phase 1: MVP (Minimum Viable Product)**

**High-Level Objectives**
1. **Single-Player Typing Test**: Implement a basic typing test mode where users type a predefined passage in Cyrillic to measure WPM and accuracy.
2. **Backend Processing**: Calculate WPM and accuracy on the backend using Node.js and Express.
3. **Frontend Interface**: Build a single-page interface using React and Tailwind CSS for a responsive and user-friendly experience.

**Mid-Level Functionality**
1. **Test Flow**:
   - **Timer**: A 1-minute countdown starts when the user begins typing.
   - **Session-Safe Test**: User’s typing progress and the current passage are saved in the session, so the typing session is preserved even if the page refreshes or there’s an internet disruption. The session allows continuity and prevents data loss.
   - **Restarting with Hotkey**: Users can press `Enter` to restart the test after completing a session without refreshing the page.

2. **User Interface Elements**:
   - **Dark Mode Toggle**: A dark mode switch applies site-wide and saves preferences in local storage.
   - **Real-Time Feedback**: WPM updates live as the user types; incorrectly typed characters are highlighted immediately.
   - **Accuracy Display**: Final accuracy is calculated and displayed at the end of the test, showing a precise score based on all errors made, including self-corrections.

3. **Passage Storage**:
   - **Static Passage Storage**: Store 20-30 passages locally in JSON for MVP, providing a consistent set of passages. Future phases will consider community-driven passage contributions.

**Low-Level Plan for MVP (Phase 1)**

1. **Component Structure and Architecture**:
   - **Atomic Components**: Character, Timer Display, Button.
   - **Higher-Order Components**: Typing Area, Results Display.
   - **Layout Components**: Main Container, Settings Panel.
   - **State Management**: Local State for timer, input, and session status with React’s `useState` and `useEffect`; sessionStorage for progress persistence.

2. **Libraries and Utility Functions**:
   - Real-Time Feedback Utility, Accuracy and WPM Calculations, Dark Mode Toggle with Tailwind CSS.

3. **Backend Structure and API Endpoints**:
   - **/api/calculate**: Endpoint for WPM and accuracy.
   - **Data Processing and Validation**: Ensure consistent WPM/accuracy results and smooth session flow.

4. **User Interface and Experience**:
   - Live Typing Feedback, Responsive Design, Accessible Font Choices.

5. **Data Persistence for Guest Sessions**:
   - **Session-Based Storage**: sessionStorage for guest progress, cleared on session end.
   - **Static Passage Storage**: JSON file for passage retrieval.

6. **Testing Plan**:
   - Jest for frontend, Mocha/Chai for backend, snapshot and unit testing for dashboard and authentication flows.

---

### **Phase 2: User Management and Tracking**

**High-Level Objectives**
1. **Session Continuity**: Ensure user or guest progress is saved, preventing data loss from refreshes or connection issues.
2. **User Registration and Authentication**: Enable users to create accounts and log in to track their typing history over time.
3. **Performance Tracking**: Track user-specific statistics, such as average WPM and accuracy, for personal performance monitoring.

**Mid-Level Functionality**
1. **Session Persistence**:
   - **Guest Session Storage**: Implement session storage for guests, preserving typing progress in the event of a refresh or internet issue. Data is retained until the user closes the browser or explicitly clears the session.
   - **Account-Based Persistence**: For registered users, typing progress and session data are preserved across sessions and logins.

2. **User Account System**:
   - **Account Creation and Login**: Set up registration, login, and logout functionality with secure password handling (e.g., hashing).
   - **Authentication**: Use token-based authentication (e.g., JWT) to protect user data and allow for secure session continuity.

3. **Performance Dashboard**:
   - **Personal Statistics**: Track and display user metrics such as average WPM, accuracy, and progression over time.
   - **Data Visualization**: Integrate simple visualizations to show trends in typing performance, helping users track improvements.

**Low-Level Plan for Phase 2**

1. **User Authentication and Account System**:
   - Account Creation and Login with registration form, JWT authentication, and secure password handling with bcrypt.

2. **Session Persistence and Guest Session Management**:
   - Guest Session Continuity using sessionStorage; Account-Based Persistence with MongoDB or PostgreSQL.

3. **Performance Tracking and Personal Statistics**:
   - UserStats collection for typing history, endpoints for saving/retrieving stats.

4. **Performance Dashboard and Data Visualization**:
   - Data visualization with Chart.js or Recharts; use React Context for managing user data.

5. **UI/UX Enhancements for User Accounts**:
   - User-Friendly Registration and Login Forms, Enhanced Dark Mode and Preferences.

6. **Testing Plan**:
   - Authentication Tests, Session Persistence Testing, Performance Dashboard Testing.

---

### **Phase 3: Multiplayer Mode**

**High-Level Objectives**
1. **Real-Time Multiplayer Typing Race**: Allow users to participate in live typing races with others, displaying synchronized progress for competitive typing sessions.
2. **Latency and Synchronization**: Ensure real-time interaction with minimal delay to create a smooth multiplayer experience.
3. **Lobby and Room Management**: Enable users to join or create typing race rooms, managing race parameters in a central lobby.

**Mid-Level Functionality**
1. **Multiplayer Race Setup**:
   - **Lobby System**: Create a central lobby where players can see available race rooms and join an existing game or create a new room.
   - **Room Settings and Start**: Each room will have a host-configured countdown timer and limited capacity. Players join before the race starts, with no mid-race entries allowed.

2. **Real-Time Synchronization**:
   - **Passage Syncing**: Synchronize passages and countdown timers so all players start simultaneously with the same content.
   - **Live Progress Tracking**: Show each player’s progress in real-time on a visual race track or progress bar, allowing users to see who is leading.
   - **Latency Management**: Use WebSockets or similar protocols to handle real-time communication, providing a brief reconnect window for players who experience minor connectivity issues.

3. **Multiplayer UI Enhancements**:
   - **Race Progress Display**: Show the relative progress of each participant, fostering competition with clear leader indicators.
   - **Post-Race Summary and Leaderboard**: Display each player’s final WPM, accuracy, and rank at the end of each race. Include a session leaderboard showing top performers to encourage friendly competition.

**Low-Level Plan for Phase 3**

1. **Real-Time Communication and Synchronization**:
   - Socket.IO for Real-Time Updates, Server-Side Synchronization, latency compensation logic.

2. **Lobby System and Room Management**:
   - Lobby Interface, Room Creation and Settings, Room State Management with Socket.IO rooms.

3. **Multiplayer Race Logic and In-Race Experience**:
   - Race Progress Synchronization, In-Race UI Elements (Progress Bar, Leaderboard Updates, Latency Indicators), End of Race Summary.

4. **Backend Logic for Multiplayer Session Management**:
   - Multiplayer Game Controller, Latency Compensation and Error Handling.

5. **Database and Storage**:
   - Race History and Leaderboard, Room Data Persistence.

6. **Testing Plan**:
   - Real-Time Synchronization Tests, Race Management and Room Logic Tests, Backend Load Testing.