import { Route, Routes } from 'react-router';
import { AuthProvider, RequireAuth } from './common/auth/auth';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
