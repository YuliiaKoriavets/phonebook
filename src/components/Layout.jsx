import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import Header from './AppBar';

export default function Layout() {
    const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      </ThemeProvider>
  );
}
