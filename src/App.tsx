import { Wrapper } from './styled';
import { Todos } from '@/src/components';

export const App = () => {
	return (
		<Wrapper>
			<h1>todos</h1>
			<Todos />
		</Wrapper>
	);
};

export default App;
