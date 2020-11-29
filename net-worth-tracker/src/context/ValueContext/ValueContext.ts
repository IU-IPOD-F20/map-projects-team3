import { createContext, useContext } from 'react';

interface Value {
	assets: number;
	liabilities: number;
	setAssets?: (value: number) => void;
	setLiabilities?: (value: number) => void;
}

export const ValueContext = createContext<Value>({
	assets: 0,
	setAssets: (value: number) => () => {
		console.warn('no provider', value);
	},
	liabilities: 0,
	setLiabilities: (value: number) => () => {
		console.warn('no provider', value);
	},
});

export const useValues = (): Value => {
	return useContext(ValueContext);
};
