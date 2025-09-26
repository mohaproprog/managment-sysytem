import { createRoot } from "react-dom/client";
import App from "./App.jsx"
import "./index.css"



const cointainer = document.getElementById("root");
const root = createRoot(cointainer)

root.render(
  
      <App/>

)