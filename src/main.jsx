import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AdCard from "./adCards/AdCard.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <AdCard />
    </BrowserRouter>
)