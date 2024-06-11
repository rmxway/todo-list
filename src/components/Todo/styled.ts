import styled from 'styled-components';

export const CheckboxTodo = styled.label`
	position: relative;

	input {
		display: none;
	}

	[class^='icon-'] {
		position: absolute;
		width: 35px;
		height: 35px;
		text-align: center;
		border: 1px solid #ccc;
		color: #17b56600;
		border-radius: 100px;
		line-height: 2;
		top: 23px;
		left: 18px;
		font-size: 0.5rem;

		transition: 0.2s;
	}

	span {
		position: relative;
		transition: 0.2s;

		&:after {
			content: '';
			opacity: 0;
			position: absolute;
			bottom: 20px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: #bbb;
			transition: 0.2s;
		}
	}

	display: block;

	border-bottom: 2px solid #f2f2f2;

	cursor: pointer;

	&:last-child {
		border: none;
	}

	&:has(input:checked) {
		[class^='icon-'] {
			color: #17b566;
			font-size: 1rem;
		}

		span {
			color: #bbb;

			&:after {
				opacity: 1;
				bottom: 12px;
			}
		}
	}
`;
