import "@testing-library/jest-dom/matchers"
// // setup.js
// import { vi } from 'vitest';
// import { createMemoryHistory } from 'history';

// // Mock `react-router-dom`
// vi.mock('react-router-dom', () => {
//     const actual = vi.importActual('react-router-dom');
//     const history = createMemoryHistory();

//     return {
//         ...actual,
//         useNavigate: () => vi.fn(),
//         MemoryRouter: ({ children }) => <div>{children}</div>, // A basic wrapper
//         useLocation: () => ({ pathname: '/' }),
//         useParams: () => ({}),
//         useRouteMatch: () => ({ path: '/', url: '/' }),
//         history,
//     };
// });

// // Mock `axios`
// vi.mock('axios', () => ({
//     post: vi.fn(),
// }));

// // Optionally, you can add other global configurations or mock setups here.
