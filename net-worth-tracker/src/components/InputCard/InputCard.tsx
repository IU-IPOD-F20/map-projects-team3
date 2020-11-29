import React, { FC } from 'react';
import { InputNumber, Tooltip, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { useValues } from '../../context/ValueContext/ValueContext';

interface InputCardProps {
	tooltipValue: string;
	cardTitle: string;
}

export const InputCard: FC<InputCardProps> = ({
	tooltipValue,
	cardTitle,
}) => {
	const {
		assets,
		setAssets,
		liabilities,
		setLiabilities,
	} = useValues();

	console.log({
		assets,
		setAssets,
		liabilities,
		setLiabilities,
	});

	return (
		<Card
			title={cardTitle}
			extra={
				<Tooltip
					title={tooltipValue}
					placement="rightTop"
				>
					<InfoCircleOutlined
						style={{
							color:
								'rgba(0,0,0,.45)',
						}}
					/>
				</Tooltip>
			}
			style={{ width: 300 }}
		>
			<InputNumber
				min={0}
				formatter={(value) =>
					`€ ${value}`.replace(
						/\B(?=(\d{3})+(?!\d))/g,
						','
					)
				}
				size="large"
				style={{
					width: '100%',
				}}
			/>
		</Card>
	);
};
