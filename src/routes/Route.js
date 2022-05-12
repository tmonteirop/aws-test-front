import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store/store';

import { AuthLayout } from "../pages/_layouts/auth";
import { DefaultLayout } from "../pages/_layouts/default";

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const { auth } = store.getState().loggedUser;

    if (!auth && isPrivate) {
        return <Redirect to="/" />;
    }

    const Layout = auth ? DefaultLayout : AuthLayout;

    return <Route
        {...rest}
        render={props => (
            <Layout><Component {...props} /></Layout>
        )}
    />;
}