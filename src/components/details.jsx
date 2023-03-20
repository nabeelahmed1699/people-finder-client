import { Table, TableContainer, TableRow, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// icons
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Details({ person }) {
	return (
		<Box>
			<Typography variant='h6' color='text.secondary'>
				Details about the person:
			</Typography>
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
							<TableCell>Name:</TableCell>
							<TableCell>{person.name}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Age:</TableCell>
							<TableCell>{person.age} years</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Father Name:</TableCell>
							<TableCell>{person.fatherName}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Mother Name:</TableCell>
							<TableCell>{person.motherName}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Mental condition:</TableCell>
							<TableCell>{person.mentalCondition}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Physical condition:</TableCell>
							<TableCell>{person.physicalCondition}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Address where found:</TableCell>
							<TableCell>{`${person.street}, ${person.city} ${person.country}`}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Stack direction='row' sx={{gap:2,mb:4}}>
				<Stack direction='row'>
					<LocalPhoneOutlinedIcon />
					<Typography variant='body1' fontWeight={600}>
						Where to contact?
					</Typography>
				</Stack>
				<Typography component='a' href={`tel:${person.cellNo}`}>
					{person.cellNo}
				</Typography>
			</Stack>
			{person.photo && (
				<Box
					sx={{
						borderRadius:1,
						overflow:'hidden',
						'& >img': {
							maxWidth: '100%',
						},
					}}
				>
					<img src={person.photo} alt={person.name} />
				</Box>
			)}
		</Box>
	);
}

export default Details;
