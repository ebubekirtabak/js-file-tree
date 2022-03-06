
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ExplorerFileItem from './ExplorerFileItem';

const file = {
    name: 'explorer.js',
    type: 'file',
    path: './explorer.js',
}
describe('ExplorerFileItem Component', () => {
  it('should be defined', () => {
    expect(ExplorerFileItem).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<ExplorerFileItem file={file} />, div);
  });

  it('renders file name', () => {
    const div = document.createElement('div');
    render(<ExplorerFileItem file={file} />, div);
    const fileElement = screen.getByText(/explorer.js/i);
    expect(fileElement).toBeInTheDocument();
  });

  it('renders context menu when onContext', async () => {
        const div = document.createElement('div');
        render(<ExplorerFileItem file={file} />, div);
        const fileElement = screen.getByTestId('file-item-head');
        const contextMenu = screen.getByTestId('context-menu');
        fireEvent.contextMenu(fileElement, {
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