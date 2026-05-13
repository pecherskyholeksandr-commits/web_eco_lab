"use client";

import { Component, ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.error("[ERROR BOUNDARY]", error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20 }}>
                    <h1>Something went wrong</h1>
                    <p>Please reload the page</p>
                </div>
            );
        }

        return this.props.children;
    }
}