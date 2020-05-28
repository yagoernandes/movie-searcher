import React from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTvShow } from '../../store/ducks/api/actions'
import { ApplicationState } from '../../store'
import { ResultContainer } from './styles'

type TProps = {
	params: object
}

const TvDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const tvShow = useSelector(
		(state: ApplicationState) => state.api.tvShowDetails,
	)

	React.useEffect(() => {
		dispatch(fetchTvShow(id))
	}, [])

	return (
		<ResultContainer>
			<img src={`https://image.tmdb.org/t/p/w500${tvShow?.poster_path}`} alt="poster" />
			<div>
				<h1>{tvShow?.name}</h1>
				<h2>{tvShow?.overview}</h2>
			</div>
		</ResultContainer>
	)
}

export default TvDetails
