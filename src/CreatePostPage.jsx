import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// MUI IMPORTS
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CreatePostForm from './components/postCreateForm';
import Typography from '@mui/material/Typography';

// constants
import { MISSING_PEOPLE_URL } from './constants';

const CreatePostPage = () => {
	const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate  = useNavigate()


  async function handleSubmitPost(data) {
    setIsLoading(true)
		data.photo = photo;
		try {
      const response = await axios.post(MISSING_PEOPLE_URL, data);
      if (response.status >= 200 && response.status <= 299) {
        navigate('/posts')
        toast.success('Post created successfully!')
      }
			console.log(response.data);
		} catch (error) {
			toast.error('Something went wrong, try again later!')
		}
	}
	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='center'
			// sx={{ minHeight: '110vh' }}
		>
			<Box
				maxWidth='sm'
				sx={{
					border: '1px solid',
					borderColor: 'grey.200',
					backgroundColor: 'background.paper',
					borderRadius: 1,
					boxShadow:
						'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
					overflow: 'hidden',
					my: 4,
					p: 4,
				}}
			>
				<Stack sx={{ mb: 4 }}>
					<Typography variant='h3'>Create a post</Typography>
					<Typography variant='body2'>Fill the form below to post</Typography>
				</Stack>
				<CreatePostForm
					photo={photo}
					setPhoto={setPhoto}
          handleSubmitPost={handleSubmitPost}
          isLoading={isLoading}
				/>
			</Box>
		</Stack>
	);
};

export default CreatePostPage;
