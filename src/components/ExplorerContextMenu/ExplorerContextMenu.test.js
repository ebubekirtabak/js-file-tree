
import { render, screen } from '@testing-library/react';
import ExplorerContextMenu from './ExplorerContextMenu';

const item = {
    name: 'Edit Item',
    type: 'edit',
    icon: 'edit',
}
describe('ExplorerContextMenu Component', () => {
  it('should be defined', () => {
    expect(ExplorerContextMenu).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<ExplorerContextMenu />, div);
  });

  it('trigger handleMenuItemClick', () => {
    const onHandleMenuItemClick = jest.fn()
    const div = document.createElement('div');
    render(<ExplorerContextMenu show={true} handleMenuItemClick={onHandleMenuItemClick} />, div);
    const editElement = screen.getAllByTestId('context-menu-item');
    editElement[0].click();
    expect(onHandleMenuItemClick).toHaveBeenCalledWith(item.type);
  });
});