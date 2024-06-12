import styled from 'styled-components';

export const WrapperToolbar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 20px;
`;

export const Clear = styled.div`
	cursor: pointer;

	[class^='icon-'] {
		display: inline-block;
		margin-right: 8px;
		color: #777;
		transition: 1s;
	}

	&:hover {
		[class^='icon-'] {
			transform: rotate(360deg);
			transition: 0.7s;
		}
	}
`;
