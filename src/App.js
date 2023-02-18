
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import {Box, Button, Container, Grid, Paper, Typography} from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './Components';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ flexGrow: 1, backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
