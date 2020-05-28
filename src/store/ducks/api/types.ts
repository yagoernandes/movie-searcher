/**
 * Action types
 */
export enum ApiTypes {
  SEARCH_REQUEST = '@api/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@api/SEARCH_SUCCESS',
  SEARCH_FAILURE = '@api/SEARCH_FAILURE'
}

/**
 * State types
 */
export interface ApiState {
  readonly result: MovieResult | TvResult | PersonResult | null
  readonly loading: boolean
  readonly error: boolean
}

export type Result = MovieResult | TvResult | PersonResult

/**
 * Data types
 */
export interface MovieResult {
  type: 'movie'
  poster_path?: string
  adult?: boolean
  overview?: string
  release_date?: string
  genre_ids?: Array<number>
  id?: number
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
  type: 'tv'
  poster_path?: string
  popularity?: number
  id?: number
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
}

export interface PersonResult {
  type: 'person'
  profile_path?: string
  adult?: boolean
  id?: number
  name?: string
  popularity?: number
  known_for?: Array<MovieResult|TvResult>
}

