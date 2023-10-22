import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(getAuth(),user => {
            setUser(user)
            setLoading(false)
        })

        return unSubscribe
    },[])

    return {user, loading}
}

export default useUser