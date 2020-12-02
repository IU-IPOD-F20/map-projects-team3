import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export const Head: FC = () => {
	return (
		<Header
			className="site-layout-background"
			style={{ padding: 0 }}
		/>
	);
};
