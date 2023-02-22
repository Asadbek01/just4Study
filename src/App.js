
import { BrowserRouter, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';
import { Navbar } from './Components';
import { AppRoutes } from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DB954'
    },
    background: {
      main: '#191414',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box bgcolor="background.main" sx={{ flexGrow: 1 }}>
        <Navbar />
        <AppRoutes/>
        <Outlet/>
      </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
