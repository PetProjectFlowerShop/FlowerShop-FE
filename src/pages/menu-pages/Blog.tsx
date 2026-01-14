import {PageContainer} from "../../components/common/PageContainer";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {usersApi, User} from "../../api/users.api";

export function Blog() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        usersApi.getAll()
            .then(res => {
                setUsers(res.data)
            })
            .catch(error => {
                console.error("Failed to fetch users:", error);
            });
    }, [])
    return (
        <PageContainer>
            <Typography variant="h4">Blog</Typography>

            {/*just test data, can be deleted*/}
            <Typography variant="h5">Users</Typography>
            {users.map((user) => (
                <Box key={user.id}>
                    {user.name} - {user.email}
                </Box>
            ))}

        </PageContainer>
    );
}