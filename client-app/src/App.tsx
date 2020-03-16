import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response: any) => {
      this.setState({
        values: response.data
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="users" />
          <Header.Content>Possy Seed</Header.Content>
        </Header>
        <List>
          {/*using any ignores the strict type casting of typescript. */}
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
        <ul></ul>
      </div>
    );
  }
}

export default App;
