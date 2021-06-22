import { Footer, Header, Main } from "../../layout";
import { BlankWithHeaderLayoutProps } from "./types";
import { AppBar } from "../AppBar";

export function BlankWithHeaderLayout({ children }: BlankWithHeaderLayoutProps) {
    return (
        <>
            <Header order={0} backgroundColor="red">
                <AppBar />
            </Header>
            <Main order={2}>{children}</Main>
            <Footer fixed height="80px">
                Fixed Footer
            </Footer>
        </>
    );
}
