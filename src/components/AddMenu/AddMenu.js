import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios'

class AddMenu extends Component {

    state = {
        name: '',
        price: '',
        description: '',
        image: ''
    }

    postMenuHandler = () => {
        const newMenu = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            image: this.state.image
        };

        axios.post("https://jsonplaceholder.typicode.com/posts/", newMenu)
            .then((res) => {
                console.log(res)

                this.setState({ newMenu: res.data });
                console.log(newMenu)
            })

    }
    render() {
        return (
            <div className="container">

                <Row center>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form>
                            <Form.Group controlId="">
                                <Form.Label> Food name </Form.Label>
                                <Form.Control placeholder="food-name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label> Price</Form.Label>
                                <Form.Control placeholder="price" value={this.state.price} onChange={(event) => this.setState({ price: event.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="description" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="image" />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.postMenuHandler}>
                                Submit
                          </Button>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default AddMenu;