import React, { Component } from 'react'

export default class Favorite extends Component {
  state = {
    favorites: []
  }

  componentDidMount() {
    const { getAllCurrentUserFavorites } = this.props;
    getAllCurrentUserFavorites().then(favorites => {

      this.setState({ favorites: favorites.map(favorite => JSON.parse(favorite)) })
    })
  }

  deleteFavorite(id) {
    const { deleteSelectedFavorite } = this.props;
    window.confirm("Are you sure  about this ?")
    deleteSelectedFavorite(id);
    window.location.reload()
  }

  render() {
    const { favorites } = this.state;

    return (
      <div>
        <ul>
          {
            favorites.map(favorite => <li key={favorite.id}>{favorite.volcano_name} |
            <button onClick={() => this.deleteFavorite(favorite.id)}>
              Delete</button> </li>)
          } 
        </ul>
      </div>
    )
  }
}
