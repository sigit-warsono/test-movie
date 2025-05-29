import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loading from "../components/LoadMore.tsx";
import React from "react";

describe("<Loading />", () => {
    it("renders the container", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Loading observerRef={ref} isLoading={false} />);
        expect(screen.getByTestId("loading-container")).toBeInTheDocument();
    });

    it("shows loading text when isLoading is true", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Loading observerRef={ref} isLoading={true} />);
        expect(screen.getByTestId("loading-text")).toBeInTheDocument();
    });

    it("does not show loading text when isLoading is false", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Loading observerRef={ref} isLoading={false} />);
        expect(screen.queryByTestId("loading-text")).not.toBeInTheDocument();
    });

    it("attaches the ref to a div element", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Loading observerRef={ref} isLoading={false} />);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
