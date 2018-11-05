import React, {Component} from 'react'
import { Form, Button, Modal, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class MemberInfoDialog extends Component {

    constructor(props){
        super(props);
        this.state = {
            key: this.props.member.key,
            name: this.props.member.name,
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
            "name" : this.state.name,
            "relation" : this.state.relation,
            "parent" : this.state.parent,
        })
    }

    render() {
        return (
            <Modal open={this.props.dialogVisible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Header>Add Family Member</Header>
                </Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input
                            naem='name'
                            label='Name'
                            value={this.state.name}
                            placeholder="Enter name"
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name='relation'
                            label='Relation'
                            value={this.state.relation}
                            placeholder="Enter relation"
                            onChange={this.handleChange}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button type="submit" primary onClick={this.saveAndClose}>Save And Close</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default MemberInfoDialog