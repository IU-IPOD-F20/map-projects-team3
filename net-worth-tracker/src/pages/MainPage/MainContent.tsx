import React, { FC, useContext, useEffect, useState } from 'react';
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
	NetWorth,
} from '../../components';

import { ApiContext, ValueContext } from '../../context';

const { Content } = Layout;

export const MainContent: FC = () => {
	const [assets, setAssets] = useState<number>(
		0
	);
	const [
		liabilities,
		setLiabilities,
	] = useState<number>(0);

	const api = useContext(ApiContext);

	useEffect(() => {
		api.login('picroc', '123')
			.then(() => {
				console.log("Nice");
				api.getRecords()
					.then(res => console.log('Supa nice', res))
					.catch(err => console.log('Baad', err));
			})
			.catch(err => console.log("Not nice", err));
	})

	return (
		<ValueContext.Provider
			value={{
				assets,
				setAssets: (val: number) => {
					setAssets(val);
				},
				liabilities,
				setLiabilities: (val: number) => {
					setLiabilities(val);
				},
			}}
		>
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

						<Col>
							<NetWorth />
						</Col>
					</Row>
					<Row>
						<Divider />
					</Row>
				</div>
			</Content>
		</ValueContext.Provider>
	);
};
