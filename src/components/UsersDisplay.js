import { useState } from "react";

import UserCard from "./UserCard";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

import LoadinguUsers from "./LoadingUsers";
import { USERS_PER_PAGE } from "../utils/constants";

const UsersDisplay = ({ users, loading }) => {
  const [page, setPage] = useState(1);

  const noResults = users.length === 0;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  console.log(totalPages);

  const usersToDisplay = users.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  return loading ? (
    <LoadinguUsers />
  ) : !noResults ? (
    <Box
      sx={{
        marginTop: "30px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {usersToDisplay.map((user) => (
        <UserCard key={user.id} userInfo={user} />
      ))}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      )}
    </Box>
  ) : (
    <Typography variant="h5">No results found</Typography>
  );
};

export default UsersDisplay;
