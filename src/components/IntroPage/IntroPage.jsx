import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const IntroPage = ({setUsername}) => {
    const [inputValue, setInputValue] = useState('')
    let navigate = useNavigate()

    const handleFindButtonClicked = () => {
        setUsername(inputValue)
        navigate(`/${inputValue}`)
        // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back hystory
    }

    return <div className={"intro-page-container"}>
        <div> Find user repositories </div>
        <div>
            <input onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}} onChange={(e) => setInputValue(e.target.value)} placeholder={"Username"}/>
            <button onClick={() => handleFindButtonClicked()}> Find </button>
        </div>


    </div>
}

export default IntroPage