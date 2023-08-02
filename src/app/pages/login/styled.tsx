import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import background from '../../../assets/images/background-image.png';

export const PageWrapper = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(5),
  paddingTop: theme.spacing(24.125),
  paddingLeft: theme.spacing(22.75),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',
  [theme.breakpoints.down('xl')]: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(20),
    paddingLeft: theme.spacing(18),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(16, 1, 3, 1),
    alignItems: 'center',
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
}));

export const RightSection = styled(Box)(() => ({
  backgroundImage: `url(${background})`,
  height: '100%',
  flex: 1,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
}));
