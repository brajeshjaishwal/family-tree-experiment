import React, {Component} from 'react'
import FamilyMemberDescendants from './FamilyMemberDescendants'
import AddDescendantDialog from './AddDescendantDialog'
import { Button, Grid, List, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class FamilyMember extends Component {

    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false
        }
    }

    showDialog = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        this.setState({dialogVisible: true});
    }

    hideDialog = () =>{
        this.setState({dialogVisible: false});
    }

    addDescendant = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("adding new descendant for key: ",this.props.member.key)
        const member = {
            firstName: "",
            lastName: "",
            parent: this.props.member.key
        }
        this.props.onAdd(member);
    }

    render() {
        return (
                <List.Item>
                    <Card onClick={this.showDialog}>
                        <Card.Content>
                            <Grid columns='3'>
                                <Grid.Row>
                                    <Grid.Column><Button icon='plus' size='mini' circular></Button></Grid.Column>
                                    <Grid.Column >{this.props.member.firstName}</Grid.Column>
                                    <Grid.Column><Button floated='right' onClick={this.addDescendant} circular size='mini'>Add</Button></Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Content>
                    </Card>
                    <FamilyMemberDescendants
                        descendants={this.props.descendants}
                        getDescendantsOfUUID={this.props.getDescendantsOfUUID}
                        onAdd={this.props.onAdd}
                    />
                    <AddDescendantDialog
                        dialogVisible={this.state.dialogVisible}
                        onSave={this.props.onUpdate}
                        showDialog={this.showDialog}
                        hideDialog={this.hideDialog}
                        member={this.props.member}
                    />
                </List.Item>
        );
    }
}

export default FamilyMember