import React, { useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import moment from 'moment';
// @mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// custom
import PostCard from './components/postCard';
import CardLoading from './components/cardLoading';
import CustomModal from './components/modal';
import Details from './components/details';
import Filters from './components/filters';

const MissingPeople = ({ loading, error, value }) => {
	const [detailsModal, setDetailsModal] = useState(false);
	const [detailsPerson, setDetailsPerson] = useState({});
	const openDetail = () => setDetailsModal(true);
	const closeDetail = () => setDetailsModal(false);
	const [filterInput, setFilterInput] = useState('');
	const [imageModal, setImageModal] = useState(false);
	const openImageModal = () => setImageModal(true);
	const closeImageModal = () => setImageModal(false);

	const posts = useMemo(() => {
		if (!value) return [];
		if (filterInput === '') return value;

		return value.filter((post) => {
			const query = filterInput.toLowerCase();
			return post.queryAbleString.includes(query);
		});
	}, [value, filterInput]);
	console.log('missingValue', posts);

	if (error !== undefined) {
		<Navigate to='/error' />;
	}
	return (
		<>
			<Filters value={filterInput} setValue={setFilterInput} />
			<Grid container spacing={2} sx={{ mt: 2 }}>
				{loading
					? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
							return (
								<Grid key={card} item xs={12} sm={6} lg={4} xl={3}>
									<CardLoading />
								</Grid>
							);
					})
					: posts.map((person) => {
							return (
								<Grid key={person._id} item xs={12} sm={6} lg={4} xl={3}>
									<PostCard
										data={person}
										openDetail={openDetail}
										setDetailsPerson={setDetailsPerson}
										posterName={
											person.userType === 'registered'
												? person.posterInfo.name
												: person.guestName
										}
										openImageModal={openImageModal}
									/>
								</Grid>
							);
					})}
			</Grid>
			<CustomModal
				open={detailsModal}
				onClose={closeDetail}
				title={
					detailsPerson.userType === 'registered'
						? detailsPerson.posterInfo.name
						: detailsPerson.guestName
				}
				subtitle={moment(detailsPerson.createdAt).format(
					'MMMM Do YYYY, h:mm:ss a'
				)}
			>
				<Details person={detailsPerson} />
			</CustomModal>
			<CustomModal open={imageModal} onClose={closeImageModal}>
				<Box
					sx={{
						borderRadius: 1,
						overflow: 'hidden',
						height: 450,
						width: '100%',
						'&>img': {
							maxWidth: '100%',
							height: '100%',
							objectFit: 'contain',
						},
					}}
				>
					<img src={detailsPerson.photo} alt={detailsPerson.name} />
				</Box>
			</CustomModal>
		</>
	);
};

export default MissingPeople;
