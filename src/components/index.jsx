import React from 'react';
import Category from './category/index.jsx';
import ListBox from './list/index.jsx';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <h1>Todo-List</h1>
        <div className="box clearfix">
          <Category />
          <ListBox />
        </div>
      </div>
    );
  }
};
