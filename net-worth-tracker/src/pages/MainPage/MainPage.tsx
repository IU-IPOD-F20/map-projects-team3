import React, { FC, useState } from 'react';
import { Layout } from 'antd';

import {
	Head,
	Sidebar,
	Foot,
} from '../../components';

import { MainContent } from './MainContent';

export const MainPage: FC = () => {
	const [collapsed, setCollapsed] = useState(
		false
	);
	const onCollapse = (collapsed: boolean) => {
		setCollapsed(collapsed);
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sidebar
				collapsed={collapsed}
				onCollapse={onCollapse}
			/>
			<Layout className="site-layout">
				<Head />
				<MainContent />
				<Foot />
			</Layout>
		</Layout>
	);
};
