import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodosProvider } from "./store/todos.tsx"
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
 
    <StrictMode>
      <BrowserRouter>
    <TodosProvider>
      <App />
    </TodosProvider> 
    </BrowserRouter>  
    </StrictMode>
 
)
