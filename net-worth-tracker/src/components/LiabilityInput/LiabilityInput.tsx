import React, { FC } from 'react';

import { InputCard } from '../InputCard';

import { useValues } from '../../context/ValueContext/ValueContext';

export const LiabilityInput: FC = () => {
	const tooltipValue = `A liability is something a person or company owes, usually a sum of money.
  Examples of liabilities include mortgages, credit card debt, car loans, student loans, etc.`;

	const {
		liabilities,
		setLiabilities,
	} = useValues();

	return (
		<InputCard
			tooltipValue={tooltipValue}
			cardTitle="Total Liability Value"
			value={liabilities}
			onChange={(val) => {
				if (setLiabilities) {
					setLiabilities(val);
				}
			}}
		/>
	);
};
