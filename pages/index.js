import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Row, Col, Title, Icon, Avatar ,Input, Divider, Grid, Image, Placeholder, Segment, Container} from 'antd';
import { Button, Modal, Header, Form} from 'semantic-ui-react';
const { Meta } = Card;
import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router, Link } from '../routes';


import ipfsClient from 'ipfs-http-client';





class Hdocindex extends Component {
  static async getInitialProps () {


    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    return {account}
  }


constructor(props) {
  super(props);
  const accounts = web3.eth.getAccounts();
  const account = this.props.account;

  this.state = {
    buffer : null,
    ipfsHash : '',
    message :'',
    account : account,
    modalOpen : false,
    password :'',
    password1: ''
  }


}

onChange = async(event) => {
  this.setState({password:event.target.value});
}

onChange1 = async(event) => {
  this.setState({password1:event.target.value});
}



handleOpen = () => this.setState({ modalOpen: true })
handleOpen1 = () => this.setState({ modalOpen1: true })

  handleClose = () => this.setState({ modalOpen: false })
  handleClose1 = () => this.setState({ modalOpen1: false })

  onClick = async (event) => {
    event.preventDefault();
    var password = this.state.password;
    if(password =="doc"){
      Router.pushRoute('/verifydocs');
    }
  }

  onClick1 = async (event) => {
    event.preventDefault();
    var password = this.state.password1;
    if(password =="ins"){
      Router.pushRoute('/verifydocs1');
    }
  }



  render ()
  {
    return (

        <Layout>

<Modal

        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >

<Header icon='ban' content='Restricted Entry!' />
        <Modal.Content>
          <h2 color="red">This is a restricted entry. Please provide secret key for the Physician to login.</h2>
        </Modal.Content>
        <Modal.Actions>
        <Input type="password" onChange = {this.onChange} placeholder="Enter secret key"/>
          <Button color='green' onClick={this.onClick} inverted>
            <Icon name='checkmark' /> Enter
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal

              open={this.state.modalOpen1}
              onClose={this.handleClose1}
              basic
              size='small'
            >

      <Header icon='ban' content='Restricted Entry!' />
              <Modal.Content>
                <h2>This is a restricted entry. Please provide secret key for the Insurance Provider to login.</h2>
              </Modal.Content>
              <Modal.Actions>
              <Input type="password" onChange = {this.onChange1} placeholder="Enter secret key"/>
                <Button color='green' onClick={this.onClick1} inverted>
                  <Icon name='checkmark' /> Enter
                </Button>
              </Modal.Actions>
            </Modal>




        <div style={{ background: '#13c2c2',  padding: '30px' }}>

    <Row gutter={16}>
    <Col span={8}>
    <Card
    style={{ width: 330, height:500 }}
    cover={<img alt="example" src="http://clipart-library.com/images/8i6oer5KT.png" size="large" />}

    >


<div align ="center">
<Link route= "/index1">
   <a className = "item"> <Button type="submit" content='User Login' icon='user' size='big' color='teal'/></a>
   </Link>


    <br></br>  <br></br>



    </div>
    </Card>


    </Col>
      <Col span={8}>
      <Card
      hoverable
      style={{ width: 330, height:500}}
      cover={<img alt="example" src="http://clipart-library.com/images/6cr6Kndei.png" style={{height:350}} />}

      >


      <div align ="center">


          <Button type="submit" onClick ={this.handleOpen} content='Physician Login' icon='user md' size='big' color='teal'/>







      <br></br>  <br></br>

       </div>
       <Meta


     description="This is an authorised entry. Please proceed only if you are the Physician."
   />
      </Card>
      </Col>


      <Col span={8}>
      <Card
      style={{ width: 330, height:500}}
      cover={<img alt="example" src="http://clipart-library.com/image_gallery2/Insurance-PNG-HD.png"  size="small"/>}

      >


      <div align ="center">


          <Button type="submit" onClick ={this.handleOpen1} content='Insurance Login' icon='shield alternate' size='big' color='teal' />



      <br></br>  <br></br>



</div>
<Meta


description="This is an authorised entry. Please proceed only if you are the Insurance Provider."
/>
      </Card>
      </Col>
    </Row>
</div>
      </Layout>
    )
  }
}



export default Hdocindex;
