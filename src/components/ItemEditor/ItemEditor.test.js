import { render, screen, fireEvent } from '@testing-library/react';
import ItemEditor from './ItemEditor';

describe('ItemEditor', () => {
    it('should be defined', () => {
        expect(ItemEditor).toBeDefined();
    });
    
    it('renders editor with value', () => {
        const div = document.createElement('div');
        render(<ItemEditor value="test.txt" />, div);
        const inputElement = screen.getByRole('textbox', { Name: 'newName' });
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('test.txt');
    });
    
    it('should be called onSubmitNewName with \'text(2).txt\'', () => {
        const onSubmitNewName = jest.fn();
        const div = document.createElement('div');
        render(<ItemEditor value="test.txt" onSubmitNewName={onSubmitNewName} />, div);
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
        expect(onSubmitNewName).toHaveBeenCalledWith('test(2).txt');
    });
});