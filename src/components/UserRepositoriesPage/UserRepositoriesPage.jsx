import {useState, useEffect} from "react";
import {createUserDataObject} from '../../utils/functions'

export const UserRepositoriesPage = ({username}) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        // createUserDataObject(username).then(result => setUserData(result))
        setUserData(createUserDataObject(username))
    }, [])

    useEffect(()=>{
        // console.log(userData)
    }, [userData])

    return <div>
        UserRepositoriesPage
    </div>
}
export default UserRepositoriesPage