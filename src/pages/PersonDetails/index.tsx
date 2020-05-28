import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson } from '../../store/ducks/api/actions'
import { ApplicationState } from '../../store'
import { ResultContainer } from './styles'
import { yearsPassed } from '../../services/date'

type TProps = {
	params: object
}

const PersonDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const person = useSelector(
		(state: ApplicationState) => state.api.personDetails,
	)
	const lastMovie = useSelector(
		(state: ApplicationState) => state.api.lastMovie,
	)

	React.useEffect(() => {
		dispatch(fetchPerson(id))
	}, [id, dispatch])

	return (
		<ResultContainer>
			<img
				src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`}
				alt="poster"
			/>
			<div>
				<h1>{person?.name}</h1>
				<p>📅 {person?.birthday && yearsPassed(person?.birthday)} years old</p>
				<p>
					🎥 Last movie:{' '}
					<Link to={`/movie/${lastMovie?.id}`}>
						{lastMovie?.original_title}
					</Link>
				</p>
				<div className="biography">
					<p>{person?.biography}</p>
				</div>
			</div>
		</ResultContainer>
	)
}

export default PersonDetails
