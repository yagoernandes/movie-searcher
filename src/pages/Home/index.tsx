import React, { useState } from 'react'
import { SearchPage } from './styles'

const Home: React.FC = () => {
  const [text, setText] = useState('')
  
  const handleSearch = ()=>{
    console.log('buscar')
  }

	return (
		<SearchPage>
			<h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
      <br/>
			<div className="search-input">
				<input
					dir="auto"
					id="search_v4"
					name="query"
					type="text"
					placeholder="Search for a movie, tv show, person......"
					value={text}
					onChange={event => setText(event.target.value)}
				/>
				<button type="button" onClick={handleSearch}>Search</button>
			</div>
		</SearchPage>
	)
}

export default Home
