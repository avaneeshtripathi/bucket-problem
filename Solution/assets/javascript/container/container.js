import React from 'react';
import ReactDOM from 'react-dom';
import underscore from 'underscore';
import { connect } from 'react-redux';
import BucketOne from '../component/bucket';
import BucketTwo from '../component/bucket';

const Conatiner = React.createClass({
  render () {
    const { bucket1, bucket2 } = this.props;
    return (
      <section className="container">
        <BucketOne bucketData={bucket1} className="leftBucket" targetBucket={2} />
        <BucketTwo bucketData={bucket2} className="rightBucket" targetBucket={1} />
        <div className="clearfix"></div>
      </section>
    );
  }
});

export default (connect(state => state))(Conatiner);
