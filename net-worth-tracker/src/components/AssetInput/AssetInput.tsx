import React, { FC } from 'react';

import { InputCard } from '../InputCard';

export const AssetInput: FC = () => {
	const tooltipValue = `An asset is a resource with economic value that you
  own or control with the expectation that it will provide a future benefit.
  This includes your investments, house, precious metals, etc.
  Here you should input the total value of all your assets.`;
	return (
		<InputCard
			tooltipValue={tooltipValue}
			cardTitle="Total Asset Value"
		/>
	);
};
