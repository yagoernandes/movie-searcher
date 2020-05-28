import React from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../store/ducks/api/actions'
import { ApplicationState } from '../../store'
import { ResultContainer } from './styles'

type TProps = {
	params: object
}

const MovieDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const movie = useSelector(
		(state: ApplicationState) => state.api.movieDetails,
	)

	React.useEffect(() => {
		dispatch(fetchMovie(id))
	}, [])

	return (
		<ResultContainer>
			<img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="poster" />
			<div>
				<h1>{movie?.original_title}</h1>
				<h2>{movie?.overview}</h2>
			</div>
		</ResultContainer>
	)
}

export default MovieDetails
