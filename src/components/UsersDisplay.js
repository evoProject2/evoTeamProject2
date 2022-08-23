import UserCard from "./UserCard";
import Typography from "@mui/material/Typography";

const UsersDisplay = ({ users }) => {
  const noResults = users.length === 0;
  return (
    <>
      {!noResults ? (
        users.map((user) => <UserCard key={user.id} userInfo={user} />)
      ) : (
        <Typography variant="h5">No results found</Typography>
      )}
    </>
  );
};

export default UsersDisplay;
