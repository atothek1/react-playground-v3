import { useCallback } from "react";
import { Redirect } from "react-router";
import { Heading } from "../../components";
import { useAuth } from "../../contexts";

export function Login() {
    const auth = useAuth();
    const handleLoginClick = useCallback(
        (e) => {
            e.preventDefault();
            const session = {
                id: "some-id",
                token: "some-token",
                expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
                roles: ["me", "users"],
                username: "atothek"
            };
            auth.login(session);
        },
        [auth]
    );
    const handleLogoutClick = useCallback(
        (e) => {
            e.preventDefault();
            auth.logout();
        },
        [auth]
    );
    if (auth.isLoggedIn()) {
        return <Redirect to="/" push={false} />;
    }
    return (
        <>
            <Heading> Login Page</Heading>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleLogoutClick}>Logout</button>
        </>
    );
}
