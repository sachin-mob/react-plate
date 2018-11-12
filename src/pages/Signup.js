import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className='login-form' style={{height:"100vh"}}>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/image.jpg' /> Create your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Confirm Password'
                      type='password'
                    />
                    <Button color='teal' fluid size='large'>
                      Signup
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Already have account? <a href='/login' as={Link}>Sign In</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        )
    }
}