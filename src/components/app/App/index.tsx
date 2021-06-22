import { ThemeProvider } from "styled-components";
import { RouteId } from "../../../../res/ids";
import { RouteConfig } from "../index";
import {
    AuthProvider,
    LayoutProvider,
    LayoutRegistry,
    LayoutType,
    NavigationProvider
} from "../../../contexts";
import { GlobalStyle, theme } from "../../../utils";

interface AppProps {
    readonly routes: RouteConfig<RouteId>[];
    readonly layouts: LayoutRegistry;
}

export function App({ routes, layouts }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AuthProvider>
                <LayoutProvider layouts={layouts} defaultLayout={LayoutType.BLANK}>
                    <NavigationProvider<RouteId> routes={routes} />
                </LayoutProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
