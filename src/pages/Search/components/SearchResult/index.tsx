import React from 'react'
import {
	Result,
	TvResult,
	MovieResult,
	PersonResult,
} from '../../../../store/ducks/api/types'
import { Link } from 'react-router-dom'

import { SearchResultContainer } from './styles'

type TProps = {
	result: Result
}

const Home: React.FC<TProps> = ({ result }) => {
	// const dispatch = useDispatch()
	// const result = useSelector((state: any) => state.api.result)

	if (
		(result as TvResult).media_type &&
		(result as TvResult).media_type === 'tv'
	) {
		const resultTv: TvResult = result as TvResult
		return (
			<Link to={`/tv/${resultTv.id}`}>
				<SearchResultContainer>{resultTv.name}</SearchResultContainer>{' '}
			</Link>
		)
	} else if (
		(result as MovieResult).media_type &&
		(result as MovieResult).media_type === 'movie'
	) {
		const resultMovie: MovieResult = result as MovieResult
		return (
			<Link to={`/movie/${resultMovie.id}`}>
				<SearchResultContainer>
					{resultMovie.original_title}
				</SearchResultContainer>
			</Link>
		)
	} else {
		const resultPerson: PersonResult = result as PersonResult
		return (
			<Link to={`/person/${resultPerson.id}`}>
				<SearchResultContainer>{resultPerson.name}</SearchResultContainer>
			</Link>
		)
	}
}

export default Home
