import styled from 'styled-components';

export const TodoWrapper = styled.div`
	position: relative;
	width: 100%;
	background-color: #fff;
	font-weight: 100;
	box-shadow:
		0 2px 2px rgba(0, 0, 0, 0.1),
		0 5px 10px rgba(0, 0, 0, 0.05);

	&:before {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 4px;
		right: 4px;
		height: 10px;
		background-color: #fff;
		display: block;
		z-index: -2;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}

	&:after {
		content: '';
		position: absolute;
		bottom: -12px;
		left: 8px;
		right: 8px;
		height: 10px;
		background-color: #fafafa;
		display: block;
		z-index: -3;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}

	input[type='text'],
	& > label {
		font-size: 1.8rem;
		padding: 20px 5px 20px 70px;
	}

	input[type='text']::placeholder {
		font-style: italic;
		color: #bbb;
	}

	input[type='text'] {
		font-weight: 100;
		border: none;
		outline: none;
		width: 100%;
		border-bottom: 2px solid #f2f2f2;
	}

	& > [class^='icon-'] {
		position: absolute;
		font-size: 1.6rem;
		top: 25px;
		left: 25px;
		color: #aaa;
	}
`;
