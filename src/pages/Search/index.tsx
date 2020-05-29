import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { searchRequest } from '../../store/ducks/api/actions'
import { resultsSelector } from '../../store/ducks/api/selectors'

import { ResultContainer } from './styles'
import SearchResult from './components/SearchResult'
import SearchBar from '../Home/components/SearchBar'

const Search: React.FC = () => {
	const dispatch = useDispatch()
	const result = useSelector(resultsSelector)
	const queryUrl = new URLSearchParams(useLocation().search)
	const queryToSearch = decodeURIComponent(queryUrl.get('query') || '')

	React.useEffect(() => {
		dispatch(searchRequest(queryToSearch))
	}, [queryToSearch, dispatch])

	return (
		<>
			<SearchBar />
			<ResultContainer>
				{result?.results.map((res: any) => (
					<SearchResult result={res} key={res.id} />
				))}
			</ResultContainer>
		</>
	)
}

export default Search
