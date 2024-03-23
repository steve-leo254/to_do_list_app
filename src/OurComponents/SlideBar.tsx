import { useState } from "react";
import logo from "./logo.svg";
import "./Styles.css"

const navItems = ["home"];

export const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <aside className={'sidebar ${isOpen ? "open" : ""}'}>
        <div className="inner">
        <header>
        <button
           type="button"
           className="sidebar-burger"
           onClick={()=>setIsOpen(!isOpen)}
        >
          <span className="icon">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
        <img src={logo}/>
        </header>
        </div>
        </aside>
    )
}