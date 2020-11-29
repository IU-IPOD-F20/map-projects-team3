import React, { FC } from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export const MainContent: FC = () => {
	return (
		<Content
			style={{
				margin: '0 16px',
			}}
		>
			<Breadcrumb
				style={{
					margin: '16px 0',
				}}
			>
				<Breadcrumb.Item>
					Dashboard
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					Home
				</Breadcrumb.Item>
			</Breadcrumb>
			<div
				className="site-layout-background"
				style={{
					padding: 24,
					minHeight: 360,
				}}
			>
				Content goes here.
			</div>
		</Content>
	);
};
