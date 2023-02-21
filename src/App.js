
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './Components';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ flexGrow: 1, backgroundColor: '#000' }}>
      <Navbar />
      <AppRoutes/>
      <Outlet/>
    </Box>
    </BrowserRouter>
  );
}

export default App;
