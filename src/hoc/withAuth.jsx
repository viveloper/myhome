import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = WrappedComponent => {
    const WithAuth = props => {
        if (localStorage.getItem('myhome-user')) {
            const user = JSON.parse(localStorage.getItem('myhome-user'));
            return (
                <WrappedComponent {...props} user={user} />
            );
        }
        else {
            return <Redirect to="/signin" />;
        }
    }
    WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
    return WithAuth;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;