import React, { ForwardedRef } from "react";
import { BoxProps } from "./types";
import { StyledBox } from "./styled";

function InnerBox(props: BoxProps, ref: ForwardedRef<any>) {
    const {
        children,
        as = "div",
        column = false,
        width = "100%",
        height = "100%",
        justifyContent,
        alignItems,
        padding,
        backgroundColor
    } = props;

    return (
        <StyledBox
            ref={ref}
            as={as}
            column={column}
            justifyContent={justifyContent}
            alignItems={alignItems}
            $width={width}
            $height={height}
            padding={padding}
            backgroundColor={backgroundColor}
            className={(props as any).className}>
            {children}
        </StyledBox>
    );
}

export const Box = React.forwardRef(InnerBox);
