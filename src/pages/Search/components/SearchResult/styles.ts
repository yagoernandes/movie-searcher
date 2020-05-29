import styled from 'styled-components'

export const SearchResultContainer = styled.div`
	display: flex;
	border-radius: 8px;
	border: 1px solid #ccc;
	margin: 5px;
	color: #000;

	small {
		color: #999
	}

	img {
		height: 140px;
		width: auto;
		margin-right: 15px;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		line-height: 1.25em;
		margin: 15px 0;
		.overview {
			--max-lines: 2;
			--lh: 1.25em;
			position: relative;
			max-height: calc(var(--lh) * var(--max-lines));
			overflow: hidden;
			padding-right: 1rem; /* space for ellipsis */
		}
		.overview:before {
			position: absolute;
			inset-block-end: 0; /* "bottom" */
			inset-inline-end: 0; /* "right" */
		}
		.overview:after {
			content: '';
			text-align: right;
			position: absolute;
			bottom: 0;
			right: 0;
			width: 70%;
			height: 1.2em;
			background: linear-gradient(
				to right,
				rgba(255, 255, 255, 0),
				rgba(255, 255, 255, 1) 80%
			);
		}
	}
`

export const MovieResultContainer = styled(SearchResultContainer)`
	/* asdasdasd */
`

export const TvResultContainer = styled(SearchResultContainer)`
	/* asdasdasd */
`

export const PersonResultContainer = styled(SearchResultContainer)`
	/* asdasdasd */
`
