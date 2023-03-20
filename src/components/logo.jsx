import React from 'react';
import { Typography, Box } from '@mui/material';


const textStyle = {
	background:
		'linear-gradient(to right, #000000 0%, #71CEEF 25%, #111827 75%, #6200ea 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
};

const Logo = () => {
	return (
		<Box sx={textStyle}>
			<Typography variant='body2' fontWeight={900}>People Finder</Typography>
		</Box>
	);
};

export default Logo;
