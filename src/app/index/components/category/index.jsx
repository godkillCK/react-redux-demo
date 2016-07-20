import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/category.js';

export default class Category extends React.Component {
  render () {
    return (
      <div className="category">
        <li className="active">Default</li>
      </div>
    );
  }
}

let mapStateToProps = state => ({category: state.category});
let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);
