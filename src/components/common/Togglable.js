import React, { Component } from "react";

export default class Togglable extends Component {
  state = {
    toggle: false
  };

  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const { type, title } = this.props;
    const { toggle } = this.state;

    const buttonClasses = `btn btn-block btn-${type} mt-4`;
    const containerClasses = `col-md-12 border border-${type} rounded`;

    return (
      <div className="col-md-12 Homepage">
        <button onClick={this.onToggle} className={buttonClasses}>
          {title}
        </button>
        {toggle ? (
          <div className={containerClasses}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
