import '@fontsource/open-sans';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function Providers({ children }: PropsWithChildren) {
	return (
			<BrowserRouter>
				{children}
			</BrowserRouter>
	);
}