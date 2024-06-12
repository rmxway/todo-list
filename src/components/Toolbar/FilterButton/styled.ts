import styled from 'styled-components';

export const FilterButtonLabel = styled.label`
	position: relative;
	display: inline-block;
	border: 1px solid #e4c8c800;
	padding: 4px 8px;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.2s;

	input {
		display: none;
	}

	&:has(input:checked) {
		border: 1px solid #e4c8c8;
	}
`;
