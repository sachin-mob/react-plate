import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../services/apiService';
import { action1 } from '../actions/actions';
import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    static getDerivedStateFromProps(nextProps, prevState){
      console.log("login getderivedpro",nextProps,prevState)
      
        //Return a new state
        return {
              action : nextProps.action
        };
    }
    componentDidUpdate(prevProps){
        //console.log("login page did update",prevProps,this.props)
    }
    login(){
      this.props.actionCall("test");
      login({}).then(data => {
        console.log(data);
      });
    }
    render(){
        return(
            <div className='login-form' style={{height:"100vh"}}>
            {"Redux action props: "+(this.props.action)}
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/image.jpg' /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.login.bind(this)}>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
                    <Button color='teal' fluid size='large' type="submit">
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href='/signup'>Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        )
    }
}

// const mapStateToProps = state => ({
//   action: state.firstReducer.firstActionFirstRedValue
// })
const mapStateToProps=(state)=>{
  return { action: state.firstReducer?state.firstReducer.firstActionFirstRedValue:'' };
}
const mapDispatchToProps = dispatch => ({
  actionCall: text => dispatch(action1(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)