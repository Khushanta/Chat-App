# Chat App

A real-time chat application built with React and Firebase, enabling seamless one-on-one messaging with image sharing, user presence status, and profile management.

## Features

- User authentication: Sign up, login, logout, and password reset using Firebase Authentication  
- Real-time chat: Send text messages and images with live updates using Firestore real-time listeners  
- User search & chat initiation: Search users by username and start new chat conversations  
- Chat interface: Responsive left sidebar (chat list and search), main chat box, and right sidebar with user profile and media gallery  
- Profile update: Upload profile picture, update name and bio with image upload to Cloudinary  
- Message seen status and typing indicators  
- Last seen status indicator for users  
- Toast notifications for errors and success feedback

## Technologies Used

- React.js (Functional Components, Hooks, Context API)  
- Firebase (Authentication, Firestore, Cloud Storage)  
- Cloudinary (Image uploads)  
- React Router for navigation  
- React Toastify for notifications  
- CSS Modules for component styling

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Firebase project setup with Authentication and Firestore enabled  
- Cloudinary account for image uploads  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app

2. Install dependencies
  ```bash
  npm install
```

3. Configure Firebase and Cloudinary
Replace the Firebase config in src/config/firebase.js with your project credentials

  Update Cloudinary upload preset and cloud name in src/lib/upload.js

4. Run the app

```bash

npm start
```
Usage:

1. Sign up or login to start chatting

2. Search users by username and add them to your chat list

3. Send text and image messages in real-time

4. Update your profile picture, name, and bio
```bash
Folder Structure

src/
├── assets/                # Static assets like images and icons
├── components/            # Reusable React components (ChatBox, LeftSidebar, RightSidebar)
├── context/               # React Context API provider and state management
├── config/                # Firebase config and auth functions
├── lib/                   # Utility for image upload to Cloudinary
├── pages/                 # Route components (Chat, Login, ProfileUpdate)
├── App.js         
