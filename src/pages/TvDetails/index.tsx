import React from 'react'
import { useParams } from 'react-router-dom'

// import {} from ''
import { ResultContainer } from './styles'

type TProps = {
	params: object
}

const Home: React.FC<TProps> = () => {
	const { id } = useParams()
	console.log(id)

	React.useEffect(() => {
		console.log('pegar informações da série')
	}, [])

	return (
		<ResultContainer>
			<img
				src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="poster"
			/>
			<div>
				<h1>Segunda página!</h1>
				<h2>GERADO COM O TEMPLATE DO YAGO</h2>
			</div>
		</ResultContainer>
	)
}

export default Home
