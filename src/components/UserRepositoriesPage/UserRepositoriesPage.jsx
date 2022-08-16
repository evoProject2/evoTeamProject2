import {useState, useEffect} from "react";
import {createUserDataObject} from '../../utils/functions'
import { useSelector, useDispatch } from 'react-redux'
import RepoCard from '../RepoCard/RepoCard'

export const UserRepositoriesPage = () => {
    const user = useSelector(state => state.user)
    // const [userData, setUserData] = useState({})

    // useEffect(() => {
    //     // createUserDataObject(user.username).then(result => setUserData(result))
    //
    //     // getRepositories()
    // }, [])


    useEffect(()=> {
        console.log(user)
    }, [])
    return <div>
        {
            // userData.repositories && userData.repositories.map(repo => <RepoCard key={repo.name} repositoryName={repo.name}/>)
        }
    </div>
}
export default UserRepositoriesPage