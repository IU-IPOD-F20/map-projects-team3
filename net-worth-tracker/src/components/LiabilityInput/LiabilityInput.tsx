import React, { FC } from 'react';

import { InputCard } from '../InputCard';

export const LiabilityInput: FC = () => {
	const tooltipValue = `A liability is something a person or company owes, usually a sum of money.
  Examples of liabilities include mortgages, credit card debt, car loans, student loans, etc.`;

	return (
		<InputCard
			tooltipValue={tooltipValue}
			cardTitle="Total Liability Value"
		/>
	);
};
