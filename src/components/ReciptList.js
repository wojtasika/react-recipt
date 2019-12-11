import React from 'react';
import './reciptList.css';
import Recipe from './Recipe';



class ReciptList extends React.Component {

  render() {

    return (
      <ul>
        {this.props.recipes.map(recipe =>
          <Recipe key={recipe.href} data={recipe} />)}
      </ul>
    );
  }
}
export default ReciptList;