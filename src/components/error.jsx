import React from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button"

// image
import ErrorImage from '../assets/page-not-found.svg';
const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<Box
				sx={{
					maxHeight: 450,
					'&>img': {
						maxWidth: '100%',
					},
				}}
			>
				<img src={ErrorImage} alt='404 error' />
			</Box>
			<Stack sx={{gap:2}}>
				<Typography variant='h3' component='h1'>
					Error Accured while fetching the resourced/data!
				</Typography>
				<Button onClick={() => navigate(-1)}>TRY AGAIN!</Button>
			</Stack>
		</Box>
	);
};

export default ErrorPage;
