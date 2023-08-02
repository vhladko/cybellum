import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import logo from '../../../assets/images/logo.svg';
import { usePostLoginMutation } from '../../store/login/loginApi';
import { LeftSection, PageWrapper, RightSection, Title } from './styled';

export const LoginPage = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [login, { isLoading }] = usePostLoginMutation();
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  console.log(errors);
  async function onSubmit(data: FieldValues) {
    try {
      const { accessToken, username } = await login({ username: data.username, password: data.password }).unwrap();
    } catch (e) {
      setError('root', { type: '400', message: "The email or password you entered don't match" });
    }
  }

  return (
    <PageWrapper>
      <LeftSection>
        <img src={logo} alt="Cybellum" />
        <Title variant="h1">
          Welcome to the
          {isUpLg && <br />} Product Security Platform
        </Title>
        <Box component="form" sx={{ width: 400 }} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                label="Username"
                type="email"
                fullWidth
                sx={{ mb: 3.5 }}
                {...field}
                error={!isValid}
                InputProps={{
                  endAdornment: !isValid && (
                    <InputAdornment position="end" sx={{ mr: 1.5 }}>
                      <ErrorOutline color="error" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                label="Password"
                type="password"
                fullWidth
                {...field}
                error={!isValid}
                helperText={errors.root?.message}
                InputProps={{
                  endAdornment: !isValid && (
                    <InputAdornment position="end" sx={{ mr: 1.5 }}>
                      <ErrorOutline color="error" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button size="small" sx={{ mb: 6 }}>
            Forgot password ?
          </Button>
          <Button variant="contained" color="secondary" fullWidth type="submit" disabled={isLoading}>
            Log in
          </Button>
        </Box>

        <Box sx={{ width: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Button>Privacy Policy</Button>
          <Button>Terms of use</Button>
          <Button>Contact us</Button>
        </Box>
      </LeftSection>
      {isUpLg && <RightSection component="div" />}
    </PageWrapper>
  );
};
