import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
class MenuList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                <h4 className="card-header">Card Title : {this.props.id}</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.   {this.props.id}
                  </p>
                </div>
                <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuList;
