import React from 'react';
import ReactDOM from 'react-dom';
import serialize from 'form-serialize';
import { checkAction } from '../action';
import { connect } from 'react-redux';

const Bucket = React.createClass({

  onSubmit (event) {
    event.preventDefault();
    const { checkAction } = this.props;
    let formData = serialize(this.refs.form, { hash: true });
    formData.values = typeof formData.values === 'string' ? [formData.values] : formData.values;
    formData.values ? checkAction(formData.values, this.props.targetBucket) : null;
  },

  getButtonText () {
    switch (this.props.targetBucket) {
      case 1: return '<- Move Left';
      case 2: return 'Move Right ->';
    }
  },

  onChange (event) {
    event.target.checked
      ? event.target.nextElementSibling.classList.add('active')
      : event.target.nextElementSibling.classList.remove('active');
  },

  render () {
    return (
      <div className={'bucketWrapper ' + this.props.className}>
        {this.props.bucketData
          ? <form ref="form" onSubmit={this.onSubmit} key={new Date().getTime()}>
              <ul>
                {this.props.bucketData.map((row, key) => {
                  return (
                    <li className="listItem" key={key}>
                      <input type="checkbox" name="values" id={row.id} value={row.id} onChange={this.onChange} />
                      <label htmlFor={row.id} className="itemName">{row.name}</label>
                    </li>
                  )
                })}
              </ul>
              <button className={this.props.className} type="submit">{this.getButtonText()}</button>
            </form>
          : <p className="noData">No Data</p>
        }
      </div>
    );
  }
});

export default connect(state => state, { checkAction })(Bucket);
