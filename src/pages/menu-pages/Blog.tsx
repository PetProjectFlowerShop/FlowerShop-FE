import { PageContainer } from '../../components/common/PageContainer';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { usersApi, type User } from '../../api/users.api';
import { useLoading } from '../../providers/loading/useLoading';
import { EmptyState } from '../../components/common/EmptyState';
import { useNotification } from '../../providers/notifications/useNotification';

export function Blog() {
  const [users, setUsers] = useState<User[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  const { showError } = useNotification();

  useEffect(() => {
    if (!usersApi?.getAll) return;

    const loadUsers = async () => {
      try {
        showLoading('Loading users...');
        const res = await usersApi.getAll();
        const result = res?.data ?? [];

        setUsers(result);
        setHasLoaded(true);
      } catch {
        showError('Failed to load users');
        setHasLoaded(true);
      } finally {
        hideLoading();
      }
    };

    loadUsers();
  }, [showLoading, hideLoading, showError]);

  if (users.length === 0) {
    return (
      <PageContainer>
        <Typography variant="h4">Blog</Typography>

        <EmptyState
          title="No users yet"
          description="Users will appear here once they are created."
        />
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <Typography variant="h4">Blog</Typography>
      {hasLoaded && users.length === 0 && (
        <EmptyState
          title="No users yet"
          description="Users will appear here once they are created."
        />
      )}
      {/*just test data, can be deleted*/}
      {Array.isArray(users) &&
        users.map((user) => (
          <Box key={user.id}>
            {user?.name} - {user?.email}
          </Box>
        ))}
    </PageContainer>
  );
}
