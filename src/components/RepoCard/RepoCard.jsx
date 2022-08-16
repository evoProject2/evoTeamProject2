import './RepoCard.css'
export const RepoCard = ({repositoryName}) => {
    // console.log(repositoryName)
    return <div className={"repo-card-container"}>
            {repositoryName}
    </div>
}

export default RepoCard