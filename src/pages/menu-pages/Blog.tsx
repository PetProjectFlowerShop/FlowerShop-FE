import { PageContainer } from "../../components/common/PageContainer";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { usersApi, type User } from "../../api/users.api";

export function Blog() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    if (!usersApi?.getAll) return;

    usersApi
      .getAll()
      .then((res) => {
        const result = Array.isArray(res.data) ? res.data : (res.data ?? []);

        setUsers(result);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  return (
    <PageContainer>
      <Typography variant="h4">Blog</Typography>

      {/*just test data, can be deleted*/}
      <Typography variant="h5">Users</Typography>
      {Array.isArray(users) &&
        users.map((user) => (
          <Box key={user.id}>
            {user?.name} - {user?.email}
          </Box>
        ))}
    </PageContainer>
  );
}
