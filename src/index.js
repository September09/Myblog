/**
 * Created by september on 2018/5/27.
 */

/*eslint-disable*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import 'babel-polyfill';
import { browserHistory } from 'react-router'
import configureStore from './store/index'
import RouterMap from './router/router';
import 'antd/dist/antd.css'

const store = configureStore();

const renderDom = () => {
  render(
    <AppContainer>
        <Provider store={store}>
            <RouterMap />
        </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderDom();

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

unsubscribe()

if (module.hot) {
  module.hot.accept(renderDom());
}
