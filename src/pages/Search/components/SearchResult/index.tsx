import React from 'react'
import {
	Result,
	TvResult,
	MovieResult,
	PersonResult,
} from '../../../../store/ducks/api/types'
import { Link } from 'react-router-dom'

import { SearchResultContainer } from './styles'
import noImage from '../../../../assets/NoImage.jpg'

type TProps = {
	result: Result
}

const Home: React.FC<TProps> = ({ result }) => {
	if (
		(result as TvResult).media_type &&
		(result as TvResult).media_type === 'tv'
	) {
		const resultTv: TvResult = result as TvResult
		return (
			<Link to={`/tv/${resultTv.id}`}>
				<SearchResultContainer>
					<img
						src={
							resultTv.poster_path
								? `https://image.tmdb.org/t/p/w500${resultTv.poster_path}`
								: noImage
						}
						alt="poster"
					/>
					<div className="info">
						<h3>{resultTv.name}</h3>
						<small>({resultTv.first_air_date?.substring(0, 4)})</small>
						<div className="overview">
							<p>{resultTv.overview}</p>
							<div />
						</div>
					</div>
				</SearchResultContainer>{' '}
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
					<img
						src={
							resultMovie.poster_path
								? `https://image.tmdb.org/t/p/w500${resultMovie.poster_path}`
								: noImage
						}
						alt="poster"
					/>
					<div className="info">
						<h3>{resultMovie.original_title}</h3>
						<small>({resultMovie.release_date?.substring(0, 4)})</small>
						<div className="overview">
							<p>{resultMovie.overview}</p>
							<div />
						</div>
					</div>
				</SearchResultContainer>
			</Link>
		)
	} else {
		const resultPerson: PersonResult = result as PersonResult
		return (
			<Link to={`/person/${resultPerson.id}`}>
				<SearchResultContainer>
					<img
						src={
							resultPerson.profile_path
								? `https://image.tmdb.org/t/p/w500${resultPerson.profile_path}`
								: noImage
						}
						alt="foto"
					/>
					<div className="info">
						<h3>{resultPerson.name}</h3>
					<span>{resultPerson.known_for_department}</span>
					</div>
				</SearchResultContainer>
			</Link>
		)
	}
}

export default Home
