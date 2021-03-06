import React from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTvShow } from '../../store/ducks/api/actions'
import {
	tvShowSelector,
	loadingSelector,
} from '../../store/ducks/api/selectors'
import { ResultContainer } from './styles'
import { formatDate } from '../../services/date'
import Loader from '../../components/Loader'

type TProps = {
	params: object
}

const TvDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const tvShow = useSelector(tvShowSelector)
	const loading = useSelector(loadingSelector)

	React.useEffect(() => {
		dispatch(fetchTvShow(id))
	}, [id, dispatch])

	return loading ? (
		<Loader />
	) : (
		<ResultContainer>
			{tvShow?.poster_path && (
				<img
					src={`https://image.tmdb.org/t/p/w500${tvShow?.poster_path}`}
					alt="poster"
				/>
			)}
			<div>
				<h1>{tvShow?.name}</h1>
				<p>
					&#11088; {tvShow?.vote_average} | 📺 {tvShow?.number_of_seasons}{' '}
					seasons | &#128336;{' '}
					{tvShow?.first_air_date && formatDate(tvShow?.first_air_date)}
				</p>
				<div className="overview">
					<p>{tvShow?.overview}</p>
				</div>
			</div>
		</ResultContainer>
	)
}

export default TvDetails
