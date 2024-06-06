import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
	position: relative;
	width: 600px;
	max-width: 100%;
	margin: 20px auto;
`;

export function App() {
	return (
		<Back>
			<h1>Todos</h1>
		</Back>
	);
}

export default App;
