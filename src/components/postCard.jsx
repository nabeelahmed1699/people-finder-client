import React,{useState} from 'react';

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
import CustomModal from './modal';

const PostCard = () => {
	const [detailsModal, setDetailsModal] = useState(false);
	const openDetail = () => setDetailsModal(true);
	const closeDetail = () => setDetailsModal(false);

	return (
		<>
			<Card>
				<CardHeader
					avatar={<Avatar>R</Avatar>}
					title='Shrimp and Chorizo Paella'
					subheader='September 14, 2016'
				/>

				<CardContent>
					<Box
						sx={{
							maxHeight: '230px',
							borderRadius: 1,
							overflow: 'hidden',
							'&>img': {
								maxWidth: '100%',
							},
						}}
					>
						<img
							src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
							alt='arshad'
						/>
					</Box>

					{/* ====================info ===================== */}
					<TableContainer>
						<Table aria-label='simple table'>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Ali Hassan</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Stack direction='row' justifyContent='flex-end'>
						<Button onClick={openDetail}>View More</Button>
					</Stack>
				</CardContent>
			</Card>
			<CustomModal open={detailsModal} onClose={closeDetail} title='Details' subtitle='sbtitle'>

			</CustomModal>
		</>
	);
};

export default PostCard;
