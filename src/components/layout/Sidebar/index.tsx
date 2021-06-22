import React from "react";
import { StyledSidebar } from "./styled";
import { SidebarProps } from "./types";

export function Sidebar({ children, order = 0, as = "aside", ...rest }: SidebarProps) {
    return (
        <StyledSidebar forwardedAs={as} order={order} column {...rest}>
            {children}
        </StyledSidebar>
    );
}
