import React from "react";
import { StyledFooter } from "./styled";
import { FooterProps } from "./types";

export function Footer({ children, as = "footer", ...rest }: FooterProps) {
    return (
        <StyledFooter forwardedAs={as} {...rest}>
            {children}
        </StyledFooter>
    );
}
