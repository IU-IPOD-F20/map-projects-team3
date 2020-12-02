import React, { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const Foot: FC = () => {
	return (
		<Footer
			style={{
				textAlign: 'center',
			}}
		>
			F20. Group 3, MAP Project Course.
		</Footer>
	);
};
