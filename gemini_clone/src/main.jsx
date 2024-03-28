import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './Context/Context.jsx'
import './index.css'
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)

reportWebVitals();
