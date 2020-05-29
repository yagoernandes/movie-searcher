import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../config/colors'

export const ResultContainer = styled.div`
	/* asd */
	background-color: #fff;
	padding: 15px;
	border-radius: 5px;
	width: 100%;
	max-width: 900px;
	min-width: 250px;
  display: flex;
  margin-top: 15px;
	a {
    color: ${PRIMARY_COLOR};
	}

	img {
		width: 300px;
		height: 450px;
		margin-right: 15px;
	}

	.biography {
		height: 300px;
		overflow-y: auto;
		margin-top: 15px;
	}

	@media screen and (max-width: 768px) {
		flex-direction:column;

		img{
			margin-right: 0;
			align-self: center;
		}
	}
`
