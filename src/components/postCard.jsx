import React, { useState } from 'react';
import moment from 'moment';
// @mui
import { Avatar, CardContent, CardHeader, Card, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// custom
import Details from './details';

const person = {
	name: 'Nabeel Ahmed',
	age: 23,
	fatherName: 'Rizwan Nafees',
	motherName: 'Huma Rizwan',
	mentalCondition: 'Fine',
	physicalCondition: 'Fine',
	street: 'sfasda',
	city: 'Lahore',
	country: 'pakistan',
	photo:
		'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

const PostCard = ({ data = person, openDetail, setDetailsPerson }) => {
	console.log('DATA=>', data);
	return (
		<>
			<Card
				sx={{
					boxShadow:
						'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
					'& .MuiCardContent-root': {
						pb: 1,
					},
				}}
			>
				<CardHeader
					avatar={<Avatar>{data.organizationInfo?.name.charAt(0)}</Avatar>}
					title={data.organizationInfo?.name}
					subheader={moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
				/>

				<CardContent>
					{data.photo && (
						<Box
							sx={{
								minHeight: 320,
								backgroundImage: `url('${data.photo}')`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
							}}
						></Box>
					)}

					{/* ====================info ===================== */}
					<TableContainer>
						<Table aria-label='simple table'>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{data.name}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Stack direction='row' justifyContent='flex-end'>
						<Button
							onClick={() => {
								openDetail();
								setDetailsPerson(data);
							}}
						>
							View details
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
};

export default PostCard;
