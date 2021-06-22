import React from "react";
import { StyledMain } from "./styled";
import { MainProps } from "./types";

export function Main({ children, as = "main", ...rest }: MainProps) {
    return (
        <StyledMain forwardedAs={as} column {...rest}>
            {children}
        </StyledMain>
    );
}
