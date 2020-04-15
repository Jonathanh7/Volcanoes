import React from "react";

class EditVolcano extends React.Component {

  state = {}

  handleChange = (event) => {
   this.setState({[event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { updateVolcano } = this.props;
    const selectedVolcano = this.props.volcanos.find((volcano) => {
      return parseInt(volcano.id) === parseInt(this.props.match.params.id);
    });

    updateVolcano(selectedVolcano.id, this.state);
    window.location.href = `/main/${selectedVolcano.id}`
  }

  render() {
    const selectedVolcano = this.props.volcanos.find((volcano) => {
      return parseInt(volcano.id) === parseInt(this.props.match.params.id);
    });

    const { name = '', image_url = '', content = '', elevation = '', location = '', ideal_for = '' } = selectedVolcano || {};

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
           <input type="text" name="name" defaultValue={name} onChange={this.handleChange}/>
        </label>

        <br />

        <label>
          Image URL: 
           <input type="text" name="image_url" defaultValue={image_url} onChange={this.handleChange}/>
        </label>

        <br />
        
        <label>
          Content: 
           <input type="text" name="content" defaultValue={content} onChange={this.handleChange}/>
        </label>
<br />

        <label>
          Elevation: 
           <input type="text" name="elevation" defaultValue={elevation} onChange={this.handleChange}/>
        </label>

        <br />

        <label>
          Location: 
           <input type="text" name="location" defaultValue={location} onChange={this.handleChange}/>
        </label>
        <br />
        
        <label>
          Ideal For: 
           <input type="text" name="ideal_for" defaultValue={ideal_for} onChange={this.handleChange}/>
        </label>

        <br />

        <input type="submit" value="Update" />
      </form>
    )
  }
}

export default EditVolcano;
