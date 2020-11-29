import { mount } from 'enzyme';
import { MainPage } from './pages';
import { setupTestApp } from './test/setupTestApp';

import {
	Head,
	Sidebar,
	Foot,
	AssetInput,
	LiabilityInput,
	NetWorth,
} from './components';

// Add setup for Jest
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest
		.fn()
		.mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
});

describe('rendering of system layout', () => {
	const app = setupTestApp('/');

	// Simple rendering checks
	it('renders main page', () => {
		expect(app.find(MainPage)).toHaveLength(
			1
		);
	});

	it('renders the header', () => {
		expect(app.find(Head)).toHaveLength(1);
	});

	it('renders the sidebar', () => {
		expect(app.find(Sidebar)).toHaveLength(1);
	});

	it('renders the footer', () => {
		expect(app.find(Foot)).toHaveLength(1);
	});
});

describe('rendering of asset and liability cards', () => {
	const app = setupTestApp('/');

	it('renders asset card', () => {
		expect(app.find(AssetInput)).toHaveLength(
			1
		);
	});

	it('renders asset card', () => {
		expect(
			app.find(LiabilityInput)
		).toHaveLength(1);
	});

	it('renders total net worth', () => {
		expect(app.find(NetWorth)).toHaveLength(
			1
		);
	});
});
