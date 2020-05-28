import React from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson } from '../../store/ducks/api/actions'
import { ApplicationState } from '../../store'
import { ResultContainer } from './styles'

type TProps = {
	params: object
}

const PersonDetails: React.FC<TProps> = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const person = useSelector(
		(state: ApplicationState) => state.api.personDetails,
	)

	React.useEffect(() => {
		dispatch(fetchPerson(id))
	}, [])

	return (
		<ResultContainer>
			<img src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`} alt="poster" />
			<div>
				<h1>{person?.name}</h1>
				<h2>{person?.known_for}</h2>
			</div>
		</ResultContainer>
	)
}

export default PersonDetails
