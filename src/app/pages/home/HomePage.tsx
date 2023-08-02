import { Box, Typography } from '@mui/material';
import { useGetNotificationQuery } from '../../store/notifications/notificationApi';

export const HomePage = () => {
  const { data: notification } = useGetNotificationQuery();
  return (
    <Box sx={{ m: 5 }}>
      <Typography variant="h1" textAlign="center">
        {notification?.title}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {notification?.description}
      </Typography>
    </Box>
  );
};
