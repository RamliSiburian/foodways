import React, { useContext } from 'react'
import { LoginContext } from '../context/DataContext';

function Home() {

    const [dataLogin, dispatch] = useContext(LoginContext)


    const handleClick = () => {
        dispatch({
            type: "SUCCESS",
            dataName: "Ramli"

        })
        console.log(dataLogin);
    }

    return (
        <>
            <div>Home</div>
            <button onClick={handleClick}>Test</button>
        </>
    )
}

export default Home;