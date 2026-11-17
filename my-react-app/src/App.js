import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';

// Restore the home page title and jump to the top whenever the page changes.
function OnPageChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') document.title = 'Alanna Robbert';
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The router picks which page component to show based on the URL.
// HashRouter keeps the page name after a "#" (e.g. /#/work), which works on
// GitHub Pages without any extra server setup.
function App() {
  return (
    <HashRouter>
      <OnPageChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
