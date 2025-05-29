import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { CategoriesMovieFilter, type CategoryType } from "../types/Movie.ts";

interface HandlingProps {
    category: CategoryType;
    setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

const SelectFilter: React.FC<HandlingProps> = ({ category, setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (cat: CategoryType) => {
        setCategory(cat);
        setIsOpen(false);
    };

    return (
        <div className="flex items-center gap-2 space-y-1 w-52 relative">
            <p className="font-bold text-[0.8rem] text-blue-200">Filter</p>

            <div className="relative w-full">
                <button
                    data-testid="category-button"
                    type="button"
                    onClick={toggleDropdown}
                    className="w-full flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded border border-blue-700 cursor-pointer"
                >
                    {category.replace("_", " ").toUpperCase()}
                    <MdOutlineArrowDropDownCircle className="text-xl" />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <ul
                        data-testid="category-dropdown"
                        className="absolute z-10 mt-1 w-full bg-white border border-blue-300 rounded shadow-md max-h-60 overflow-auto"
                    >
                        {CategoriesMovieFilter.map((cat) => (
                            <li
                                key={cat}
                                data-testid={`category-option-${cat}`}
                                onClick={() => handleSelect(cat)}
                                className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-100 ${
                                    cat === category ? "bg-blue-50 font-semibold" : ""
                                }`}
                            >
                                {cat.replace("_", " ").toUpperCase()}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SelectFilter;
