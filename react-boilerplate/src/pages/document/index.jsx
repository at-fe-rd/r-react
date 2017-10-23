import React from 'react';
import './style.scss';

export default class Document extends React.Component {
  render() {
    return (
      <div className="document-page">
        <h2>Document</h2>
        <p>Full Document: <a href="https://github.com/at-fe-rd/r-react/tree/master/document" target="_blank">here</a></p>
        <ul>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/00_ReactIntroduction.md" target="_blank">React Introduction</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/01_InstallationAndConfiguration.md" target="_blank">Installation and Configuration</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/02_WebpackConfig.md" target="_blank">Webpack Configuration</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/03_JSX-ES6.md" target="_blank">JSX and ES6</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/04_ComponentAndProps.md" target="_blank">Component and Props</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/05_StateAndLifecycle.md" target="_blank">State and Lifecycle</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/06_HandlingEvent.md" target="_blank">Handling Event</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/07_CompositionAndInheriance.md" target="_blank">Composition and Inheriance</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/08_FormsListsKeys.md" target="_blank">Forms, Lists and Keys</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/10_StylesInReact.md" target="_blank">Styles in React</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/11_UsingBootstrap4.md" target="_blank">How to use Bootstrap 4 in React</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/12_ReactRouter.md" target="_blank">React Router</a></li>
          <li>- <a href="https://github.com/at-fe-rd/r-react/blob/master/document/13_Redux.md" target="_blank">React Redux</a></li>
        </ul>
        <p></p>
        <p>More document will be updated</p>
      </div>
    );
  }
}
