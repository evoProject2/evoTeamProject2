import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const IntroPage = () => {
    const [username, setUsername] = useState('')
    let navigate = useNavigate()

    const handleFindButtonClicked = () => {
        navigate(`/${username}`)
        // navigate(`/${username}`, { replace: true })    // if u want to restrict back hystory
    }

    return <div className={"intro-page-container"}>
        <div> Find user repositories </div>
        <div>
            <input onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}} onChange={(e) => setUsername(e.target.value)} placeholder={"Username"}/>
            <button onClick={() => handleFindButtonClicked()}> Find </button>
        </div>


    </div>
}

export default IntroPage