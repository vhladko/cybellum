import { Card, CardContent, Typography } from '@mui/material';
import { Route, Routes } from 'react-router';
import logo from '../assets/images/cybellum-logo-vertical-black.svg';
import Styled from './app.styled';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

function App() {
  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
  );
}

export default App;
