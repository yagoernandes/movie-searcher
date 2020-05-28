import { ApiTypes, Result } from './types'

export const searchRequest = (text:string) => ({ type: ApiTypes.SEARCH_REQUEST, payload: text })

export const searchSuccess = (data: Result) => ({ type: ApiTypes.SEARCH_SUCCESS, payload: data })

export const searchFailure = (error:any ) => ({ type: ApiTypes.SEARCH_FAILURE, payload: error })
