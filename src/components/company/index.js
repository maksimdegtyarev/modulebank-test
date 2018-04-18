import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './list';
import Item from './item';
import Form from './form';


export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/company/edit/:id" component={Form} />
        <Route path="/company/:id" component={Item} />
        <Route path="/" component={List} />
      </Switch>
    </BrowserRouter>
  );
}
