import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../config/colors'

export const LoaderContainer = styled.div`
	border: 10px solid #f3f3f3; /* Light grey */
	border-top: 10px solid ${PRIMARY_COLOR}; /* Blue */
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
