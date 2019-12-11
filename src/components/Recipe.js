import React from 'react';



class Recipe extends React.Component {
  render() {

    return (
      <li>
        <h2 className="heading">
          {this.props.data.title}
        </h2>
        <img src={this.props.data.thumbnail} alt="" />
        <span style={{ display: "block", fontSize: "16px" }}>{this.props.data.ingredients}</span>
      </li>
    );
  }
}
export default Recipe;