import { createContext, useContext } from 'react';

interface Value {
	assets?: number;
	liabilities?: number;
	setAssets?: (value: number) => void;
	setLiabilities?: (value: number) => void;
}

export const ValueContext = createContext<Value>({
	assets: undefined,
	setAssets: (value: number) => () => {
		console.warn('no provider');
	},
	liabilities: undefined,
	setLiabilities: (value: number) => () => {
		console.warn('no provider');
	},
});

export const useValues = () =>
	useContext(ValueContext);
