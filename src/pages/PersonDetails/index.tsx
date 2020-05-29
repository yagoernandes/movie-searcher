import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson } from '../../store/ducks/api/actions'
import {
	personSelector,
	lastMovieSelector,
} from '../../store/ducks/api/selectors'
import { ResultContainer } from './styles'
import { yearsPassed } from '../../services/date'
import noImage from '../../assets/NoImage.jpg'

type TProps = {
	params: object
}

const PersonDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const person = useSelector(personSelector)
	const lastMovie = useSelector(lastMovieSelector)

	React.useEffect(() => {
		dispatch(fetchPerson(id))
	}, [id, dispatch])

	return (
		<ResultContainer>
			<img
				src={
					person?.profile_path
						? `https://image.tmdb.org/t/p/w500${person?.profile_path}`
						: noImage
				}
				alt="poster"
			/>
			<div>
				<h1>{person?.name}</h1>
				{person?.birthday && (
					<p>
						<span role="img" aria-label="callendar emoji">
							📅
						</span>{' '}
						{person?.birthday && yearsPassed(person?.birthday)} years old
					</p>
				)}
				{lastMovie && (
					<p>
						<span role="img" aria-label="callendar emoji">
							🎥
						</span>{' '}
						Last movie:{' '}
						<Link to={`/movie/${lastMovie?.id}`}>
							{lastMovie?.original_title}
						</Link>
					</p>
				)}
				<div className="biography">
					<p>{person?.biography}</p>
				</div>
			</div>
		</ResultContainer>
	)
}

export default PersonDetails
