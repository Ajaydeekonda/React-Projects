import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


export default function App() {
    const [darkMode,setDarkMode] = React.useState(true)
    function toggeleDarkMode()
    {
        setDarkMode(pvs=>!pvs)
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggeleDarkMode={toggeleDarkMode}/>
            <Main darkMode={darkMode} />
        </div>
    )
}