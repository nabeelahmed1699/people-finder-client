import React from 'react';
// @mui
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// custom
import BackgroundImage from '../assets/poor.jpg';
// icons
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
	return (
		<Stack direction={{ md: 'row' }} sx={{ gap: 2, height: '100%' }}>
			<BlackCard />
			<ImageCard BackgroundImage={BackgroundImage} />
		</Stack>
	);
};

function ImageCard({ BackgroundImage }) {
	return (
		<Card
			sx={{
				backgroundImage: `url(${BackgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				boxShadow:
					'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
				width: '100%',
				minHeight: 370,
			}}
		></Card>
	);
}
function BlackCard() {
	const navigate = useNavigate();
	return (
		<Card
			sx={{
				bgcolor: '#262626',
				color: '#fefefe',
				borderRadius: '24px',
				p: { xs: 0, lg: 2 },
				width: '100%',
			}}
		>
			<CardContent>
				<Stack sx={{ gap: 4 }}>
					<Typography variant='h2' component='h1'>
						Bringing Hope to Families: Find Missing Individuals with Our App
					</Typography>
					<Typography variant='h5' paragraph>
						The People Finder app helps locate missing loved ones using a
						centralized and up-to-date database. With a user-friendly interface
						and dedicated support, our app makes it easy to reunite families and
						bring people back together.
					</Typography>
					<Button
						size='large'
						color='dark'
						sx={{
							bgcolor: 'common.white',
							'&:hover': { bgcolor: 'grey.400' },
							alignSelf: 'flex-start',
							borderRadius: '12px',
						}}
						startIcon={<SearchIcon />}
						onClick={() => navigate('/posts')}
					>
						Browse People
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
}
export default HeroSection;
