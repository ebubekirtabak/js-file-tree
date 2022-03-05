import { render, screen } from '@testing-library/react';
import ExplorerFolderItem from './ExplorerFolderItem';
const folder = {
    type: 'folder',
    name: 'Home',
    path: '/',
};
describe('ExplorerFolderItem Component', () => {
    test('renders without crash', () => {
      render(<ExplorerFolderItem folder={folder} />);
      const folderElement = screen.getByText(/Home/i);
      expect(folderElement).toBeInTheDocument();
    });
});
