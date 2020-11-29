import React, { FC } from 'react';
import {
	Row,
	Col,
	Divider,
	Layout,
	Breadcrumb,
} from 'antd';

import {
	AssetInput,
	LiabilityInput,
} from '../../components';

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
				<Row gutter={16}>
					<Col>
						<AssetInput />
					</Col>

					<Col>
						<LiabilityInput />
					</Col>
				</Row>
				<Row>
					<Divider />
				</Row>
			</div>
		</Content>
	);
};
