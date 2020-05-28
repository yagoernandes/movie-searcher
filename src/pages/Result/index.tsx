import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ResultContainer } from './styles'

const Home: React.FC = () => {
	const dispatch = useDispatch()
	const result = useSelector((state: any) => state.api.result)
	return (
		<ResultContainer>
			{/* {JSON.stringify(results, null, 2)} */}
			{result?.results.map((res: any) => (
				<p>{res.original_name}</p>
			))}
		</ResultContainer>
	)
}

export default Home
