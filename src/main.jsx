import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { RouterProvider } from "react-router-dom";
import router from './Router.jsx';
import "katex/dist/katex.min.css";
import "../styles.css"






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
