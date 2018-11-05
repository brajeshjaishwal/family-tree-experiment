import React, {Component} from 'react'
import { Form, Button, Modal, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class AddDescendantDialog extends Component {

    constructor(props){
        super(props);
        this.state = {
            key: this.props.member.key,
            firstName: this.props.member.firstName,
            lastName: this.props.member.lastName,
            relation: this.props.member.relation,
            parent: this.props.member.parent,
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    close = () => {
        this.props.hideDialog();
    }

    saveAndClose = () => {
        this.props.hideDialog();
        this.props.onSave({
            "key": this.state.key,
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName,
            "relation" : this.state.relation,
            "parent" : this.state.parent,
        })
    }

    render() {

        return (
        <div className="AddDescendantDialog">
            <Modal show={this.props.dialogVisible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Header>Add Family Member</Header>
                </Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input
                                id="firstName"
                                type="text"
                                label="First Name"
                                value={this.state.firstName}
                                placeholder="Enter First Name"
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                id="lastName"
                                type="text"
                                label="Relation"
                                value={this.state.relation}
                                placeholder="What is the relation"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button type="submit" primary onClick={this.saveAndClose}>Save & Close</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Actions>
            </Modal>
        </div>
        );
    }
}

export default AddDescendantDialog