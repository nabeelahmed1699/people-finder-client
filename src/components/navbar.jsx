import React from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// custom
import LogoPic from '../assets/logo.png';
// icons
import LoginIcon from '@mui/icons-material/Login';
// constants
import { ADMIN_PANEL_PORT } from '../constants';

const Navbar = () => {
	return (
		<Box minHeight={60} p={1}>
			<Card
				sx={{
					boxShadow: '0',
					bgcolor: '#d7d9dd',
				}}
			>
				<CardContent>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Logo />
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
function Logo() {
	return (
		<Box
			sx={{
				width: 50,
				aspectRatio: 1,
				overflow: 'hidden',
				borderRadius: 8,
				'&>img': { maxWidth: '100%' },
			}}
		>
			<img src={LogoPic} alt='people-finder' />
		</Box>
	);
}
export default Navbar;
