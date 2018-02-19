import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    }

    logout() {
        this.user = null;
    }

    getUser() {
        return { ...this.user };
        // ^^ this is done to prevent the overriding of the private user variable
        // lecture 55 section 5 @ 6:00
    }

    isAuth() {
        return this.user !== null;
    }
}