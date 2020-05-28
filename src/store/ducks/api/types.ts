/**
 * Action types
 */
export enum ApiTypes {
	SEARCH_REQUEST = '@api/SEARCH_REQUEST',
	SEARCH_SUCCESS = '@api/SEARCH_SUCCESS',
	SEARCH_FAILURE = '@api/SEARCH_FAILURE',

	FETCH_TVSHOW = '@api/FETCH_TVSHOW',
	FETCH_TVSHOW_SUCCESS = '@api/FETCH_TVSHOW_SUCCESS',
	FETCH_TVSHOW_FAILURE = '@api/FETCH_TVSHOW_FAILURE',

	FETCH_MOVIE = '@api/FETCH_MOVIE',
	FETCH_MOVIE_SUCCESS = '@api/FETCH_MOVIE_SUCCESS',
	FETCH_MOVIE_FAILURE = '@api/FETCH_MOVIE_FAILURE',

	FETCH_PERSON = '@api/FETCH_PERSON',
	FETCH_PERSON_SUCCESS = '@api/FETCH_PERSON_SUCCESS',
	FETCH_PERSON_FAILURE = '@api/FETCH_PERSON_FAILURE',
}

/**
 * State types
 */
export type Result = MovieResult | TvResult | PersonResult

export interface ApiState {
	readonly results?: {
		pages: number
		total_results: number
		total_pages: number
		results: [Result]
	} | null
	readonly tvShowDetails?: TvResult | null
	readonly movieDetails?: MovieResult | null
	readonly personDetails?: PersonResult | null
	readonly loading: boolean
	readonly error: boolean
}

/**
 * Data types
 */
export interface MovieResult {
	media_type: 'movie'
	poster_path?: string
	adult?: boolean
	overview?: string
	release_date?: string
	genre_ids?: Array<number>
	id: number
	original_title?: string
	original_language?: string
	title?: string
	backdrop_path?: string
	popularity?: number
	vote_count?: number
	video?: boolean
	vote_average?: number
}

export interface TvResult {
	media_type: 'tv'
	poster_path?: string
	popularity?: number
	id: number
	overview?: string
	backdrop_path?: string
	vote_average?: number
	first_air_date?: string
	origin_country?: Array<string>
	genre_ids?: Array<number>
	original_language?: string
	vote_count?: number
	name?: string
	original_name?: string
	episode_run_time?: [number]
}

export interface PersonResult {
	profile_path?: string
	adult?: boolean
	id: number
	name?: string
	popularity?: number
	known_for?: Array<MovieResult | TvResult>
	known_for_department?: string
	birthday?: string
	biography?: string
}
