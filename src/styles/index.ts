import styled from 'styled-components'
import {
	GRADIENT1_COLOR,
	GRADIENT2_COLOR,
} from '../config/colors'
import backdrop from '../assets/backdrop.jpg'

export const Page = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	align-items: center;
	line-height: 1.5em;

	h1 {
		font-size: 36px;
		line-height: 1.5em;
	}
`

export const Background = styled.div`
	background: linear-gradient(${GRADIENT1_COLOR}EE, ${GRADIENT2_COLOR}DD), url(${backdrop});
	/* background-image: url(${backdrop}); */
  background-size: cover;
  display: block;
  /* filter: blur(15px);
  -webkit-filter: blur(15px); */
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  z-index: -1;
`
