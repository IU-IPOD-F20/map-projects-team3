import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../App';
import { ApiContext } from '../context';
import { Api } from '../services';
import React from 'react';

export const setupTestApp = (
	route: string
): ReactWrapper => {
	const api = new Api();

	return mount(
		<MemoryRouter initialEntries={[route]}>
			<ApiContext.Provider value={api}>
				<App />
			</ApiContext.Provider>
		</MemoryRouter>
	);
};
