import React, { FC } from 'react';
import { Tooltip, Card, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { useValues } from '../../context/ValueContext/ValueContext';

const { Text } = Typography;

export const NetWorth: FC = () => {
	const tooltipValue = `Net worth is the value of the assets you own,
  minus the liabilities you owe. It can give you a pretty good assessment
  of you financial status.`;

	const { assets, liabilities } = useValues();

	const netWorth = assets - liabilities;

	return (
		<Card
			title="Total Net Worth"
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
			style={{ width: 200 }}
		>
			<Text
				type="secondary"
				style={{
					fontSize: '1.6rem',
					textAlign: 'center',
					display: 'block',
					width: '100%',
				}}
			>
				{netWorth >= 0
					? `€ ${netWorth}`
					: 0}
			</Text>
		</Card>
	);
};
