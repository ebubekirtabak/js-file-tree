
import { render, screen } from '@testing-library/react';
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
    const linkElement = screen.getByText(/explorer.js/i);
    expect(linkElement).toBeInTheDocument();
  });
});