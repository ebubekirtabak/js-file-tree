import { render, screen } from '@testing-library/react';
import ExplorerFolderView from './ExplorerFolderView';
const dir = [
    {
        type: 'folder',
        name: 'Home',
        path: '/',
    }
];
describe('ExplorerFolderView Component', () => {
    test('renders without crash', () => {
      render(<ExplorerFolderView dir={dir} />);
      const folderElement = screen.getByText(/Home/i);
      expect(folderElement).toBeInTheDocument();
    });
});
