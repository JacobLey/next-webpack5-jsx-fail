import React from 'react';
import App from 'next/app.js';
export default class CustomApp extends App {
    render() {
        const { Component } = this.props;
        const props = this.props.pageProps
        return (
            <Component {...props}/>
        );
    }
}
