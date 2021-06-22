import { Theme } from "./types";

const minUnit = 8;

export const theme: Theme = {
    typo: {
        fontFamily: "Roboto",
        fontSize: "1.6rem"
    },
    spacing: {
        s1: `${minUnit / 10}rem`,
        s2: `${(minUnit / 10) * 2}rem`,
        s3: `${(minUnit / 10) * 3}rem`,
        s4: `${(minUnit / 10) * 4}rem`,
        s5: `${(minUnit / 10) * 5}rem`,
        s6: `${(minUnit / 10) * 6}rem`,
        s7: `${(minUnit / 10) * 7}rem`,
        s8: `${(minUnit / 10) * 8}rem`
    },
    size: {
        heightFixedHeader: `${(minUnit / 10) * 6}rem`,
        heightFixedFooter: `${(minUnit / 10) * 6}rem`,
        minHeightHeader: `${(minUnit / 10) * 7}rem`,
        minHeightFooter: `${(minUnit / 10) * 7}rem`,
        widthSidebarLeft: `${(minUnit / 10) * 30}rem`,
        widthSidebarRight: `${(minUnit / 10) * 30}rem`
    }
};
