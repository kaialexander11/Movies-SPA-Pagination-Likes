import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';

const root = document.querySelector('#root');

const ctxRender = (ctx, templateResult) => {

    let layout = html`

        <nav>
            ${navigationTemplate(ctx)}
        </nav>

        <main>
            ${templateResult}
        </main>

        <footer class="footer">
            <p>All rights reserved &copy; </p>
        </footer>

    `;

    render(layout, root);
    //render(navigationView, navElement);
}


export const renderMiddleware = (ctx, next) => {
    //console.log('render middleware');
    ctx.render = ctxRender.bind(null, ctx);
    next();
}