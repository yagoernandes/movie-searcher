import styled from 'styled-components'
import { BACKGROUND_COLOR } from '../config/colors'

export const Page = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	background-color: ${BACKGROUND_COLOR};
	align-items: center;
	line-height: 1.5em;
	
	h1 {
		font-size: 36px;
		line-height: 1.5em;
	}
`
