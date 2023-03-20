import * as React from 'react';
import { Link } from 'react-router-dom';

// @mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Link as MuiLink } from '@mui/material';

// icons
import AdbIcon from '@mui/icons-material/Adb';
import LoginIcon from '@mui/icons-material/Login';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// custom
import Logo from './logo';
// constants
import { ADMIN_PANEL_PORT } from '../constants';

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
				<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
					<Logo />
				</Box>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size='large'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleOpenNavMenu}
						color='inherit'
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>
						<MenuItem onClick={handleCloseNavMenu}>
							<MuiLink
								component={Link}
								to='/'
								color='dark.main'
								sx={{ fontSize: '1.5rem' }}
							>
								<Stack direction='row' sx={{ gap: 0.5 }}>
									<HomeRoundedIcon />
									<Typography>Home</Typography>
								</Stack>
							</MuiLink>
						</MenuItem>
					</Menu>
				</Box>
				<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 4 }}>
					<Logo />
				</Box>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Stack
						direction='row'
						alignItems='center'
						sx={{
							gap: 4,
						}}
					>
						<MuiLink
							component={Link}
							to='/'
							color='dark.main'
							sx={{ fontSize: '1.5rem' }}
						>
							<Stack direction='row' sx={{ gap: 0.5 }}>
								<HomeRoundedIcon />
								<Typography>Home</Typography>
							</Stack>
						</MuiLink>
						<MuiLink
							component={Link}
							to='/posts'
							color='dark.main'
							sx={{ fontSize: '1.5rem' }}
						>
							<Stack direction='row' sx={{ gap: 0.5 }}>
								<SearchRoundedIcon />
								<Typography>Posts</Typography>
							</Stack>
						</MuiLink>
					</Stack>
				</Box>

				<Box sx={{ flexGrow: 0 }}>
					<Button
						LinkComponent='a'
						href={ADMIN_PANEL_PORT}
						color='dark'
						variant='contained'
						size='large'
						startIcon={<LoginIcon />}
						target='_blank'
					>
						Admin Login
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
export default ResponsiveAppBar;
