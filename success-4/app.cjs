const React = require('react');
const { default: App } = require('next/app.js');

module.exports = class CustomApp extends App {
    render() {
        const { Component } = this.props;
        const props = this.props.pageProps
        return React.createElement(Component, props);
    }
}
