import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getItems, addItem, deleteItem } from '../../actions/itemAction';

import {
  Container,
  Alert,
  Button
} from 'react-bootstrap';

class ShoppingList extends Component {

  state = {
    loading: false
  }

  componentDidMount() {
    this.props.getItems();
  }


  render() {
    return (
      <Container className="mt-5">
        <Button className="mb-5 d-block w-100 btn-info" type="button" onClick={() => {
          const title = prompt("enter title");
          if (title) {
            this.props.addItem(title);
          }
        }}>
          click me
        </Button>
        {
          this.props.items.items.items.length ? this.props.items.items.items.map((item, index) => (
            <Alert variant="info" key={item._id}>
              <Button className="btn-danger mr-3" type="button" onClick={() => {
                this.props.deleteItem(item._id);
              }}>
                x
              </Button>
              {item.title}
            </Alert>
          ))
        :
          <Alert variant="info">
            There Is No Items Yet!
          </Alert>
        }
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state
  }
}


export default connect(mapStateToProps, { getItems, addItem, deleteItem })(ShoppingList);