import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchForm from "../components/SearchForm.tsx";

describe("SearchForm", () => {
    it("renders input with correct value and handles changes", () => {
        const mockSetSearchQuery = vi.fn();
        const initialQuery = "batman";

        render(<SearchForm searchQuery={initialQuery} setSearchQuery={mockSetSearchQuery} />);

        const input = screen.getByTestId("search-input") as HTMLInputElement;

        // Assert the initial value is correct
        expect(input.value).toBe("batman");

        // Simulate typing into the input
        fireEvent.change(input, { target: { value: "superman" } });

        // Ensure the setter function is called with correct value
        expect(mockSetSearchQuery).toHaveBeenCalledWith("superman");
    });
});
