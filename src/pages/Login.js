import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../services/apiService';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    login(){
      login({}).then(data => {
          console.log(data);
      });
    }
    render(){
        return(
            <div className='login-form' style={{height:"100vh"}}>
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