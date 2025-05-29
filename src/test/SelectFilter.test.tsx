import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SelectFilter from "../components/SelectFilter.tsx";


describe('SelectFilter', () => {
    it('should render filter label and selected category', () => {
        const mockSetCategory = vi.fn();
        render(<SelectFilter category="top_rated" setCategory={mockSetCategory} />);

        expect(screen.getByText(/filter/i)).toBeInTheDocument();
        expect(screen.getByTestId('category-button')).toHaveTextContent('TOP RATED');
    });

    it('should open dropdown on button click', () => {
        const mockSetCategory = vi.fn();
        render(<SelectFilter category="popular" setCategory={mockSetCategory} />);

        fireEvent.click(screen.getByTestId('category-button'));

        expect(screen.getByTestId('category-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('category-option-now_playing')).toBeInTheDocument();
    });

    it('should call setCategory when option is selected', () => {
        const mockSetCategory = vi.fn();
        render(<SelectFilter category="now_playing" setCategory={mockSetCategory} />);

        fireEvent.click(screen.getByTestId('category-button'));
        fireEvent.click(screen.getByTestId('category-option-upcoming'));

        expect(mockSetCategory).toHaveBeenCalledWith('upcoming');
    });
});
