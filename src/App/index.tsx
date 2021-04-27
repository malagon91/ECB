import React from 'react';
import { GlobalStyle } from '../GlobalStyles';
import { Header } from '../Header';
import { List } from '../List';

export default function App() {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<List />
		</div>
	);
}
