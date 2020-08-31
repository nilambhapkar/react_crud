import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect } from 'react-redux';
import {fetchUsers,signIn} from '../actions/';
import history from '../history';

class Login extends React.Component {

    componentDidMount(){
      this.props.fetchUsers();
    }
   
   renderError({error,touched}){
       if(error && touched){
            return(
                <div className="ui error message">
                   <div className="header">{error}</div>
                </div>
            );
       }
   }
   
    renderInput = ({input,label,meta,type}) => {
        const className= `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" type={type} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        let allusers = this.props.users;
        let user = allusers.find( user => user.username === formValues.username && user.password === formValues.password ) 
        if( user ) {
             this.props.signIn(user);
              history.push('/');
        } else {
                alert("Enter valid username password");
        }

    };
  
    render() { 
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}  className="ui form error">
                <Field name="username"  type="text" component={this.renderInput} label="Username"/>
                 <Field name="password" type="password" component={this.renderInput} label="Password"/>
                <button className="ui button primary">Login</button>
            </form>
        )
    };
};

const validate = (formValues)=>{
    const error ={};
    if(!formValues.username){
        error.username="Please enter username";
    }
    
    if(!formValues.password){
        error.password="Please enter password";
    }

    return error;
}
const mapStateToProps = state => {
    return {
            users: Object.values(state.users),
        };
};

Login = connect(mapStateToProps,{fetchUsers,signIn})(Login);
export default reduxForm({
    form:'LoginForm',
    validate
})(Login);
