import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
