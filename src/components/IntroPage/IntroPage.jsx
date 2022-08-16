import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import {setUsername} from '../../userSlice'
import {getRepositoriesByUsername, isAnUsername} from "../../utils/functions";
import {setRepositories} from "../../userSlice";


export const IntroPage = () => {
    let navigate = useNavigate()

    const user = useSelector(state => state.user)
    const input = useSelector(state => state.input)
    const dispatch = useDispatch()

    const handleFindButtonClicked = async () => {
        if (user.username.trim()!='' && await isAnUsername(user.username)){
            dispatch(setRepositories(await getRepositoriesByUsername(user.username)))
            navigate(`/${user.username}`)
            // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back hystory
        } else {
            alert(`'${user.username}' is not a valid username.`)
        }
    }

    return <div className={"intro-page-container"}>
        <div> Find user repositories </div>
        <div>
            <input onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}}
                   onChange={(e) => dispatch(setUsername(e.target.value))} placeholder={"Username"}/>
            <button onClick={() => handleFindButtonClicked()}> Find </button>
        </div>
    </div>
}

export default IntroPage