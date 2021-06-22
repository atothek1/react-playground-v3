import { Link } from "react-router-dom";
import { RouteId } from "../../../../res/ids";
import { useAuth, useNavigation } from "../../../contexts";
import { NavigationGroup } from "../Routes/types";
import { Navigation, NavigationElement } from "./styled";

export function AppBar() {
    const { getNavigationByGroup, getNavigationById } = useNavigation();

    const customNavi = getNavigationById([
        RouteId.HOME,
        RouteId.LOGOUT,
        RouteId.LOGIN,
        RouteId.USERS_PROFILE
    ]);
    console.log(customNavi);
    const navigation = getNavigationByGroup(NavigationGroup.HEAD);
    const elements = (customNavi as any[]).map((navItem) => {
        return (
            <NavigationElement key={navItem.id}>
                <Link to={navItem.path}>{navItem.label}</Link>
            </NavigationElement>
        );
    });
    return <Navigation>{elements}</Navigation>;
}
