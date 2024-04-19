import React from 'react';  // Import the React library
import ReactDOM from 'react-dom';  // Import the ReactDOM library
import './index.css';  // Import the main CSS file
import App from './App';  // Import the root component of the application

ReactDOM.render(  // Render the root component of the application
  <React.StrictMode>  
    {/* Use React StrictMode to highlight potential problems in the application */}
    <App />  
    {/* Render the root component (App) inside the StrictMode */}
  </React.StrictMode>,
  document.getElementById('root')  // Mount the rendered component to the root DOM element with id 'root'
);
