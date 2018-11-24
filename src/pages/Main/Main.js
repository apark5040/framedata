import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="2" />
                        <Col md="3">
                            <h1>Main Page</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;