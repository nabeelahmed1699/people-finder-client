import React, { useState } from 'react';
import moment from 'moment';
// @mui
import { Avatar, CardContent, CardHeader, Card, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PostCard = ({
	data,
	posterName,
	openDetail,
	setDetailsPerson,
	openImageModal,
}) => {
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
					avatar={<Avatar>{posterName.charAt(0)}</Avatar>}
					title={posterName}
					subheader={moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
				/>

				<CardContent>
					{data.photo && (
						<Box
							onClick={() => {
								openImageModal();
								setDetailsPerson(data);
							}}
							sx={{
								minHeight: 250,
								backgroundImage: `url('${data.photo}')`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
							}}
						></Box>
					)}

					{/* ====================info ===================== */}
					<TableContainer>
						<Table
							sx={{
								'& .MuiTableCell-root': {
									p: 0.5,
								},
							}}
						>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{data.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Age</TableCell>
									<TableCell>{data.age}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Father Name</TableCell>
									<TableCell>{data.fatherName}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Typography variant='body2' color='text.secondary'>
						{data.description}
					</Typography>
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
