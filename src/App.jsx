// @mui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

// CUstom
import PostTabs from './PostsTab';
import HeroSection from './components/heroSection';
import Navbar from './components/navbar';
import { theme } from './theme';
import ErrorPage from './components/error';
import ResponsiveAppBar from './components/appbar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div
				style={{
					backgroundImage:
						'radial-gradient(#bdbcbc35 10%, transparent 11%),radial-gradient(#bdbcbc35 10%, transparent 11%)',
					backgroundSize: '60px 60px',
					backgroundPosition: '0 0, 30px 30px',
					backgroundRepeat: ' repeat',
					minHeight: '97vh',
				}}
			>
				<ResponsiveAppBar/>
				<Container maxWidth='xl' sx={{ minHeight: '100%', mt: `calc(${64}px + 16px)` }}>
					<Routes>
						<Route path='/' element={<Hero />} />
						<Route path='/posts' element={<PostTabs />} />
						<Route path='/error' element={<ErrorPage />} />
					</Routes>
				</Container>
			</div>
		</ThemeProvider>
	);
}

function Hero() {
	return (
		<Box mt={4} minHeight='100%'>
			<HeroSection />
		</Box>
	);
}
export default App;
