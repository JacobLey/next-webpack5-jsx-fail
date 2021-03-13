import React from 'react';
import App from 'next/app.js';
export class CustomApp extends App {
    render() {
        const { Component } = this.props;
        const props = this.props.pageProps
        return (
            <Component {...props}/>
        );
    }
}
export default CustomApp;
