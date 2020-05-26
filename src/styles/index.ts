import styled from 'styled-components'
import { BACKGROUND_COLOR } from '../config/colors'

export const Page = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	background-color: ${BACKGROUND_COLOR};
	justify-content: center;
	align-items: center;

	h1 {
		text-align: center;
		font-size: 36px;
	}
`
