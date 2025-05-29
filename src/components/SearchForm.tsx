import React from 'react';

interface handlingFormProps {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
}

const SearchForm: React.FC<handlingFormProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            data-testid="search-input"
            type="text"
            placeholder="Search movies..."
            className="flex-1 p-2 border rounded outline-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchForm;
