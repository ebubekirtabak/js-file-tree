
import { render, screen } from '@testing-library/react';
import ExplorerContextMenuItem from './ExplorerContextMenuItem';

const item = {
    name: 'Edit Item',
    type: 'edit',
    icon: 'edit',
}
describe('ExplorerFileItem Component', () => {
  it('should be defined', () => {
    expect(ExplorerContextMenuItem).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<ExplorerContextMenuItem item={item} />, div);
  });

  it('renders item name', () => {
    const div = document.createElement('div');
    render(<ExplorerContextMenuItem item={item} />, div);
    const editElement = screen.getByText(/Edit Item/i);
    expect(editElement).toBeInTheDocument();
  });

  it('trigger handleMenuItemClick', () => {
    const onHandleMenuItemClick = jest.fn()
    const div = document.createElement('div');
    render(<ExplorerContextMenuItem item={item} handleMenuItemClick={onHandleMenuItemClick} />, div);
    const editElement = screen.getByTestId('context-menu-item');
    editElement.click();
    expect(onHandleMenuItemClick).toHaveBeenCalledWith(item.type);
  });
});