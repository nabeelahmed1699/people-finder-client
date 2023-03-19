import React from 'react';
// @mui
import Grid from '@mui/material/Grid';
import PostCard from './postCard';

const Posts = () => {
	return (
		<Grid container spacing={2}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
				return (
					<Grid key={card} item xs={12} sm={6} lg={4} xl={3}>
						<PostCard />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Posts;
