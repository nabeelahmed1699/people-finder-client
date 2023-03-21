import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// custom
import MissingPeople from './MissingPeople';
import FoundedPeople from './FoundedPeople';
import CreatePostForm from './components/postCreateForm';
// icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// constants
import { MISSING_PEOPLE_URL, FOUNDED_PEOPLE_URL } from './constants';
// hooks
import useFetch from './hooks/useFetch';
import CustomModal from './components/modal';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function PostTabs() {
	const navigate = useNavigate()
	const {
		loading: missingLoading,
		error: missingError,
		value: missingData,
	} = useFetch(MISSING_PEOPLE_URL, {}, []);

	const {
		loading: foundedLoading,
		error: foundedError,
		value: foundedData,
	} = useFetch(FOUNDED_PEOPLE_URL, {}, []);

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ width: '100%' }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						bgcolor: 'dark.main',
						borderRadius: 1,
						p: 2,
						boxShadow:
							'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
					}}
				>
					<Stack direction='row' justifyContent='space-between'>
						<Tabs value={value} onChange={handleChange} aria-label='Posts'>
							<Tab label='Missing People' {...a11yProps(0)} />
							<Tab label='Founded People' {...a11yProps(1)} />
						</Tabs>
						{value === 0 && (
							<Button
								variant='contained'
								size='small'
								sx={{ borderRadius: '8px' }}
								startIcon={<AddCircleOutlineIcon />}
								onClick={()=>navigate('/createPost')}
							>
								Create Post
							</Button>
						)}
					</Stack>
				</Box>
				<TabPanel value={value} index={0}>
					<MissingPeople
						error={missingError}
						loading={missingLoading}
						value={missingData}
					/>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<FoundedPeople
						error={foundedError}
						loading={foundedLoading}
						value={foundedData}
					/>
				</TabPanel>
			</Box>
			{/* <CustomModal
				open={true}
				title='Create a post'
				subtitle='Fill the form below to post about your missing one'
			>
				<CreatePostForm photo={photo}
					setPhoto={setPhoto}
					handleSubmitPost={handleSubmitPost}
				/>
			</CustomModal> */}
		</>
	);
}
