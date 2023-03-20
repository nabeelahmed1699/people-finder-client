import React from 'react';
// @mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
const Filters = ({ value, setValue }) => {
	return (
		<Card
			sx={{
				boxShadow:
					'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
			}}
		>
			<CardContent>
				<TextField
					sx={{ '& .MuiInputBase-root': { borderRadius: '16px' } }}
					fullWidth
					placeholder='Search by Name | Father name | Mother name | Phone no | Address | etc...'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</CardContent>
		</Card>
	);
};

export default Filters;
