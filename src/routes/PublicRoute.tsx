import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicRoute = ({
    children, ...rest
}:any) => {
    const isAuthenticated = false;

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

export default PublicRoute;
