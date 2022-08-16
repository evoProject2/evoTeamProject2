import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {useState} from "react";
import {setUsername} from '../../userSlice'


export const IntroPage = () => {
    let navigate = useNavigate()

    const user = useSelector(state => state.user)
    const input = useSelector(state => state.input)
    const dispatch = useDispatch()

    const handleFindButtonClicked = () => {
        dispatch(setUsername("bociasan"))
        // console.log(input.value)
        navigate(`/${input.value}`)
        // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back hystory
    }

    return <div className={"intro-page-container"}>
        <div> Find user repositories </div>
        <div>
            <input onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}}
                   onChange={(e) => null /*dispatch(setInputValue(e.target.value))*/} placeholder={"Username"}/>
            <button onClick={() => handleFindButtonClicked()}> Find </button>
        </div>


    </div>
}

export default IntroPage