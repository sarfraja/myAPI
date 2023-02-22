import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    let {title, description, url} =this.props;
    return (
      <div>
        <h1>{title}</h1>
            <h3>{description}</h3>
            <p>{url}</p>
      </div>
    )
  }
}
