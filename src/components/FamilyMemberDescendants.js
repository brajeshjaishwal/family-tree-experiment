import React, {Component} from 'react'
import FamilyMember from './FamilyMember'

class FamilyMemberDescendants extends Component {
    render() {
        return (
        (
            this.props.descendants &&
            this.props.descendants.length>0
        )?
        <ul>
                {this.props.descendants.map(member=>
                    <FamilyMember
                        key={member.key}
                        member={member}
                        parent={member.parent}
                        getDescendantsOfUUID={this.props.getDescendantsOfUUID}
                        descendants={this.props.getDescendantsOfUUID(member.key)}
                        onAdd={this.props.onAdd}
                    />
                )}
        </ul>
        :null
        );
    }
}

export default FamilyMemberDescendants
