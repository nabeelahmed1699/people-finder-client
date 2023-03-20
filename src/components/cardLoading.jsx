import React from 'react';
// @mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const CardLoading = () => {
	return (
		<Card>
			<CardHeader
				avatar={
					<Skeleton
						animation='wave'
						variant='circular'
						width={40}
						height={40}
					/>
				}
				title={
					<Skeleton
						animation='wave'
						height={10}
						width='80%'
						style={{ marginBottom: 6 }}
					/>
				}
				subheader={<Skeleton animation='wave' height={10} width='40%' />}
			/>
			<CardContent>
				<Skeleton
					animation='wave'
					variant='rounded'
					height={230}
					width='100%'
				/>
				<Stack direction='row' justifyContent='flex-end' sx={{mt:2}}>
						<Skeleton animation='wave' variant='rounded' height={30} width='30%' />
				</Stack>
			</CardContent>
		</Card>
	);
};

export default CardLoading;
