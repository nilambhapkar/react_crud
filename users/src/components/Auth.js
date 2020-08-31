import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';
import {Link} from 'react-router-dom';

class Auth extends React.Component {
   
     OnSignOutClick = () => {
        this.props.signOut();
    };
    
    renderAuthbutton()  {
        if(this.props.isSignedIn) {
            return  (
                <button onClick={this.OnSignOutClick} className="ui red google button" >
                  Sign Out
                </button>
            );
        } else{
           return  (
            <Link to="/login" className="ui blue button" > 
               Sign In
            </Link>
            );
        }
    };

    render(){
        return <div>{this.renderAuthbutton()}</div>
    }
};

const mapStateToProps = (state) =>{
    return { isSignedIn : state.auth.isSignedIn }
};

export default connect(
    mapStateToProps,
    {signIn,signOut}
    )(Auth);