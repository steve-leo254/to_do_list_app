import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Checkstatus() {
    const navigate = useNavigate()
    //hook to perform side effects when the component mounts
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn')
        // Authentication Check
        if (!loginStatus || loginStatus !== "true") {
            navigate('/login') //redirecting to login
        }
    }, [navigate])
    return null
}