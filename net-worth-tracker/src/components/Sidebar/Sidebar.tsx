import React, { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

import { PieChartOutlined } from '@ant-design/icons';

interface SidebarProps {
	collapsed: boolean;
	onCollapse: (collapsed: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({
	collapsed,
	onCollapse,
}) => {
	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={onCollapse}
		>
			<div className="logo" />
			<Menu
				theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
			>
				<Menu.Item
					key="1"
					icon={<PieChartOutlined />}
				>
					Main Page
				</Menu.Item>
			</Menu>
		</Sider>
	);
};
