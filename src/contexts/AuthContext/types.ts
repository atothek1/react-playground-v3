import React from "react";
import { Session } from "../../types";

export enum Roles {
    ME = "me",
    USER = "user",
    PUBLIC = "public"
}

export interface AuthState {
    readonly status: boolean;
    readonly session: Session | null;
}

export interface AuthContextValue {
    isLoggedIn(): boolean;
    isAuthorized(requiredRoles: string[]): boolean;
    getRoles(): string[];
    getSession(): Session | null;
    login(session: Session): void;
    logout(): void;
}

export interface AuthProviderProps {
    readonly children: React.ReactNode;
}
