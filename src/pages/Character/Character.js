import React, { Component } from "react";
import CharacterList from "../../Characters.json";
import { Container, Row, Col } from "react-bootstrap";

class Character extends Component {

    state = {
        characterID: 0,
        characterName: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const name = CharacterList[id - 1].name;
        this.setState({
            characterID: id,
            characterName: name
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="2" />
                        <Col md="2">
                            <p>ID: {this.state.characterID}</p>
                        </Col>
                        <Col md="2">
                            <p>Name: {this.state.characterName}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Character;