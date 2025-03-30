import * as authService from '../services/authService.js';

export const authMiddleware = (ctx, next) => {
    //ctx.isAuthenticated = authService.isAuthenticated();
    //ctx.user = authService.getUser();

    let user = authService.getUser();

    ctx.user = user
    ctx.isAuthenticated = Boolean(user?.username);

    next();
};