import UserCard from "./UserCard";
import Typography from "@mui/material/Typography";
import LoadinguUsers from "./LoadingUsers";

const UsersDisplay = ({ users, loading }) => {
  const noResults = users.length === 0;
  return (
    <>
      {loading ? (
        <LoadinguUsers />
      ) : !noResults ? (
        users.map((user) => <UserCard key={user.id} userInfo={user} />)
      ) : (
        <Typography variant="h5">No results found</Typography>
      )}
    </>
  );
};

export default UsersDisplay;
