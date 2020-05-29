import { ApplicationState } from '../../index'

export const loadingSelector = (state: ApplicationState) => state.api.loading

export const movieSelector = (state: ApplicationState) => state.api.movieDetails

export const tvShowSelector = (state: ApplicationState) =>
	state.api.tvShowDetails

export const personSelector = (state: ApplicationState) =>
	state.api.personDetails

export const lastMovieSelector = (state: ApplicationState) =>
	state.api.lastMovie

export const resultsSelector = (state: ApplicationState) => state.api.results

export const errorSelector = (state: ApplicationState) => state.api.error
