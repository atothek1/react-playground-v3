import React from "react";
import { StyledHeader } from "./styled";
import { HeaderProps } from "./types";

export function Header({ children, as = "header", ...rest }: HeaderProps) {
    return (
        <StyledHeader forwardedAs={as} {...rest}>
            {children}
        </StyledHeader>
    );
}
