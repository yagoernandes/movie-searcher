import styled from 'styled-components'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../../../config/colors'

export const SearchBar = styled.div`
	height: 46px;
	line-height: 46px;
	font-size: 1.1em;
	border-radius: 30px;
	background-color: #fff;
	display: flex;
	width: 90%;
	max-width: 900px;
	margin: 20px 0;
	position: relative;
	input {
		flex: 1;
		padding: 10px 20px;
		height: 46px;
	}
	button {
		display: inline-flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		position: absolute;
		height: 46px;
		top: 0;
		right: -1px;
		cursor: pointer;
		font-weight: 700;
		padding: 10px 26px;
		border: none;
		color: #fff;
		background: linear-gradient(
			to left,
			${PRIMARY_COLOR} 0%,
			${SECUNDARY_COLOR} 100%
		);
		border-radius: 30px;
	}
`
