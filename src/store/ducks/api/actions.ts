import { ApiTypes, Result, MovieResult } from './types'

export const searchRequest = (text: string) => ({
	type: ApiTypes.SEARCH_REQUEST,
	payload: text,
})

export const searchSuccess = (data: Result) => ({
	type: ApiTypes.SEARCH_SUCCESS,
	payload: data,
})

export const searchFailure = (error: any) => ({
	type: ApiTypes.SEARCH_FAILURE,
	payload: error,
})

export const fetchTvShow = (id: number) => ({
	type: ApiTypes.FETCH_TVSHOW,
	payload: id,
})

export const fetchTvShowSuccess = (data: Result) => ({
	type: ApiTypes.FETCH_TVSHOW_SUCCESS,
	payload: data,
})

export const fetchTvShowFailure = (error: any) => ({
	type: ApiTypes.FETCH_TVSHOW_FAILURE,
	payload: error,
})

export const fetchMovie = (id: number) => ({
	type: ApiTypes.FETCH_MOVIE,
	payload: id,
})

export const fetchMovieSuccess = (data: Result) => ({
	type: ApiTypes.FETCH_MOVIE_SUCCESS,
	payload: data,
})

export const fetchLastMovie = (id: number) => ({
	type: ApiTypes.FETCH_LAST_MOVIE,
	payload: id,
})

export const fetchLastMovieSuccess = (data: MovieResult) => ({
	type: ApiTypes.FETCH_LAST_MOVIE,
	payload: data,
})

export const fetchLastMovieFailure = (error: any) => ({
	type: ApiTypes.FETCH_LAST_MOVIE,
	payload: error,
})

export const fetchMovieFailure = (error: any) => ({
	type: ApiTypes.FETCH_MOVIE_FAILURE,
	payload: error,
})

export const fetchPerson = (id: number) => ({
	type: ApiTypes.FETCH_PERSON,
	payload: id,
})

export const fetchPersonSuccess = (data: Result) => ({
	type: ApiTypes.FETCH_PERSON_SUCCESS,
	payload: data,
})

export const fetchPersonFailure = (error: any) => ({
	type: ApiTypes.FETCH_PERSON_FAILURE,
	payload: error,
})
