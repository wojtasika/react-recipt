import React from 'react';
import ReciptList from './ReciptList';
import Search from './Search';
import recipes from "../api/recipepuppy";


class App extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = async (phrase) => {
    const response = await recipes.get('/', {
      params: {
        i: phrase
      }
    });

    // console.log(response.data.results);

    this.setState({
      recipes: response.data.results
    });
  }

  onSearch = (phrase) => {
    this.fetchRecipes(phrase);
  }

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <h1>Recipes:</h1>
        <ReciptList recipes={this.state.recipes} />
      </div>
    )
  }
}

export default App;