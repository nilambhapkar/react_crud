import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/';
import {Link} from 'react-router-dom';

class UserList extends React.Component{
    componentDidMount(){
      this.props.fetchUsers();
    }

    renderList(){
        return this.props.users.map(user => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.phone_number}</td>
                    <td>{user.address}</td>
                    <td>{user.user_role}</td>
                </tr>
             );
        })
    }

    renderCreate() {
       if( this.props.isSignedIn && this.props.userRole === "admin" ){
           return(
               <div style={{textAlign:'right'}}>
                <Link to='/users/new' className="ui button primary">
                <i className="aligened icon user plus"/>
                Create New
                </Link>
               </div>
           )
       }
    }

    render(){
        return (
            <div>
                <h2>Users</h2>
                    <table className ="ui celled table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>User Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
            users: Object.values(state.users),
            currentUserId: state.auth.userId,
            isSignedIn: state.auth.isSignedIn,
            userRole: state.auth.userRole,
        };
};

export default connect(mapStateToProps,{fetchUsers})(UserList);