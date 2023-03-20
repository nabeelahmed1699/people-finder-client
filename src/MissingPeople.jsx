import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import moment from 'moment';
// @mui
import Grid from '@mui/material/Grid';
import PostCard from './components/postCard';

// custom
import CardLoading from './components/cardLoading';
import CustomModal from './components/modal';
import Details from './components/details';

const MissingPeople = ({ loading, error, value }) => {
	const [detailsModal, setDetailsModal] = useState(false);
	const [detailsPerson, setDetailsPerson] = useState({});
	const openDetail = () => setDetailsModal(true);
	const closeDetail = () => {
		setDetailsModal(false);
		setDetailsPerson({});
	};

	if (error !== undefined) {
		<Navigate to='/error' />;
	}
	return (
		<>
			<Grid container spacing={2}>
				{loading
					? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
							return (
								<Grid key={card} item xs={12} sm={6} lg={4} xl={3}>
									<CardLoading />
								</Grid>
							);
					  })
					: value.people.map((person) => {
							return (
								<Grid key={person._id} item xs={12} sm={6} lg={4} xl={3}>
									<PostCard
										data={person}
										openDetail={openDetail}
										setDetailsPerson={setDetailsPerson}
									/>
								</Grid>
							);
					  })}
			</Grid>
			<CustomModal
				open={detailsModal}
				onClose={closeDetail}
				title={detailsPerson.posterInfo?.name}
				subtitle={moment(detailsPerson.createdAt).format(
					'MMMM Do YYYY, h:mm:ss a'
				)}
			>
				<Details person={detailsPerson} />
			</CustomModal>
		</>
	);
};

export default MissingPeople;
