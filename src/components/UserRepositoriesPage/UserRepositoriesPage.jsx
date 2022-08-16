import {useState, useEffect} from "react";
import {createUserDataObject} from '../../utils/functions'
import RepoCard from '../RepoCard/RepoCard'

export const UserRepositoriesPage = ({username}) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        createUserDataObject(username).then(result => setUserData(result))
        // setUserData(createUserDataObject(username))
    }, [])

    useEffect(()=>{
        console.log(userData)
    }, [userData])


    return <div>
        {
            userData.repositories && userData.repositories.map(repo => <RepoCard key={repo.name} repositoryName={repo.name}/>
            )
        }
    </div>
}
export default UserRepositoriesPage