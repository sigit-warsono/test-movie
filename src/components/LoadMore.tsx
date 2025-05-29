import React from "react";
import {BlinkBlur} from "react-loading-indicators";

interface IProps {
    observerRef: React.RefObject<HTMLDivElement | null>;
    isLoading: boolean;
}

const LoadMore: React.FC<IProps> = ({ observerRef, isLoading }) => {
    return (
        <div ref={observerRef} className="h-10 mt-10 mb-52" data-testid="loading-container">
            {isLoading && <div data-testid="loading-text" className="w-full flex justify-center"><BlinkBlur color="#9adaf6" size="medium" text="" textColor="" /></div>}
        </div>
    );
};

export default LoadMore;
