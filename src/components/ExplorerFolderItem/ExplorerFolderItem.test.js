import { render, screen, fireEvent } from '@testing-library/react';
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

    it('should active when the user clicks', async () => {
        const div = document.createElement('div');
        render(<ExplorerFolderItem folder={folder} />, div);
        const folderElement = screen.getByTestId('folder-item-head');
        const folderItemList = screen.getByTestId('folder-item-list');
        // expect(folderItemList).toHaveStyle({ visibility: 'hidden'});
        fireEvent.click(folderElement, {
            preventDefault: () => {}
        });
        expect(folderItemList).toBeVisible();
    });

    it('renders context menu when onContext', async () => {
        const div = document.createElement('div');
        render(<ExplorerFolderItem folder={folder} />, div);
        const folderElement = screen.getByTestId('folder-item-head');
        const contextMenu = screen.getByTestId('context-menu');
        fireEvent.contextMenu(folderElement, {
            preventDefault: () => {}
        });
        await new Promise((r) => setTimeout(r, 2000));
        expect(contextMenu).toBeVisible();

        const contextItem = screen.getAllByTestId('context-menu-item');
        expect(contextItem[0]).toBeInTheDocument();
        fireEvent.click(contextItem[0]);

        const itemEditor = screen.getByTestId('item-editor');
        expect(itemEditor).toBeVisible();

        const inputElement = screen.getByRole('textbox', { Name: 'newName' });
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: 'test(2).txt' } })
        fireEvent.keyUp(inputElement, {
            key: "Enter",
            code: "Enter",
            keyCode: 13,
            charCode: 13,
            which: 13,
        });
        expect(itemEditor).not.toBeVisible();
    });
});
