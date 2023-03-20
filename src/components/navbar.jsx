import React from 'react';
import { Link } from 'react-router-dom';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link as MuiLink, Typography } from '@mui/material';
// custom
import LogoPic from '../assets/logo.png';
// icons
import LoginIcon from '@mui/icons-material/Login';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// constants
import { ADMIN_PANEL_PORT } from '../constants';
import Logo from './logo';

const Navbar = () => {
	return (
		<Box minHeight={30}>
			<Card
				sx={{
					boxShadow: '0',
					bgcolor: '#d7d9dd',
					borderRadius: 0,
					position: "sticky",
					top:0,
					"& .MuiCardContent-root": {
						p:2
					}
				}}
			>
				<CardContent>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Stack direction='row' alignItems='center' sx={{
							gap: 4, "&>*": {
							textDecoration:'none'
						}}}>
						<Logo />
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
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
};
// function Logo() {
// 	return (
// 		<Box
// 			sx={{
// 				width: 40,
// 				aspectRatio: 1,
// 				overflow: 'hidden',
// 				borderRadius: 8,
// 				'&>img': { maxWidth: '100%' },
// 			}}
// 		>
// 			<img src={LogoPic} alt='people-finder' />
// 		</Box>
// 	);
// }


export default Navbar;
