import React from 'react';
import { Field, reduxForm } from 'redux-form';


class UserForm extends React.Component {
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
      this.props.onSubmit(formValues);
    };
  
    render() { 
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="username"  type="text" component={this.renderInput} label="Username"/>
                <Field name="phone_number"  type="text" component={this.renderInput} label="Phone Number"/>
                <Field name="address" type="text" component={this.renderInput} label="Address"/>
                <Field name="password" type="password" component={this.renderInput} label="Password"/>
                <div className="field">
                    <label>Role</label>
                    <Field defaultValue="admin" name="user_role" component="select">
                        <option value="">Select Role</option>
                        <option value="admin" key="admin" >Admin</option>
                        <option value="normal" key="normal">Normal</option>
                    </Field>
                </div>
                <button className="ui button primary">Submit</button>
            </form>
        )
    };
};

const validate = (formValues)=>{
    const error ={};

    if(!formValues.username){
        error.username="Please enter username";
    }
    
    if(!formValues.phone_number){
        error.phone_number="Please enter phone number";
    }

    if(formValues.phone_number && isNaN(formValues.phone_number) ){
        error.phone_number="Please enter valid phone number";
    }

    if(!formValues.address){
        error.address="Please enter address";
    }
    
    if(!formValues.password){
        error.password="Please enter password";
    }

    return error;
}

export default  reduxForm({
    form:'StreamForm',
    validate
})(UserForm);

