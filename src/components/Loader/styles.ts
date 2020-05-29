import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../config/colors'

export const LoaderContainer = styled.div`
	border: 10px solid #f3f3f3;
	border-top: 10px solid ${PRIMARY_COLOR};
	border-radius: 50%;
	max-width: 60px;
	min-width: 60px;
	max-height: 60px;
	min-height: 60px;
	animation: spin 1s linear infinite;
	margin-top: 20px;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
