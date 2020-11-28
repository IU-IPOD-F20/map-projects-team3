import { mount } from 'enzyme';
import { MainPage } from './pages';
import { setupTestApp } from './test/setupTestApp';

describe('<App />', () => {
	const app = setupTestApp('/');

	it('renders main page', () => {
		expect(app.find(MainPage)).toHaveLength(
			1
		);
	});
});
