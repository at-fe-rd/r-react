import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home/index';
import Detail from 'pages/detail/index';
import Feature from 'pages/feature/index';
import Document from 'pages/document/index';
import Header from 'components/header/index';
import Footer from 'components/footer/index';
import Sidebar from 'components/sidebar/index';

export default class AppConfig extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="clearfix">
          <Sidebar />
          <div className="float-right p-4" id="page-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail" component={Detail} />
              <Route path="/feature" component={Feature} />
              <Route path="/document" component={Document} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
