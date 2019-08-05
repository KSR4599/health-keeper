import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Row, Col } from 'antd';
import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router, Link } from '../routes';


import ipfsClient from 'ipfs-http-client';





class Hdocindex extends Component {
  state={visible:false}

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
    password :''
  }


}

onChange = async(event) => {
  this.setState({password:event.target.value});

}
handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  onClick = async (event) => {
    event.preventDefault();
    var password = this.state.password;
    if(password =="admin"){
      Router.pushRoute('/verifydocs');
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

<Header icon='hand paper' content='Unauthorized Entry!' />

        <div>
        <Button type="primary" onClick={this.showModal}>

        </Button>
        <Modal
          title="Restricted access"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Enter Key"
          cancelText="Go Back"
        >
          <p>This is a restricted entry. Please provide secret key to login.</p>

        </Modal>
      </div>


        <template>
        <div id="Access to document">
        <Input type="password" onChange = {this.onChange} placeholder="Enter secret key"/>
        <a-button-group>
          <a-button type="primary" icon="check" color="green" onClick={this.onClick} inverted>
            <Icon name='check' /> Enter
          </a-button>
        </a-button-group>
        </div>
        </template>


      </Modal>

      <Header icon='hand paper' content='Unauthorized Entry!' />

              <div>
              <Button type="primary" onClick={this.showModal}>

              </Button>
              <Modal
                title="Restricted access"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="Enter Key"
                cancelText="Go Back"
              >
                <p>This is a restricted entry. Please provide secret key to login.</p>

              </Modal>
            </div>


              <template>
              <div id="Access to document">
              <Input type="password" onChange = {this.onChange} placeholder="Enter secret key"/>
              <a-button-group>
                <a-button type="primary" icon="check" color="green" onClick={this.onClick} inverted>
                  <Icon name='check' /> Enter
                </a-button>
              </a-button-group>
              </div>
              </template>





<div align="center">


<br/> <br/> <br/>

<Segment placeholder>
<Grid>
//=================User Login
<Row>
      <Col>

      <template>
      <a-card
        hoverable
        style="width: 300px"
      >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta
          title="Card title"
          description="This is the description">
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-card-meta>
      </a-card>
      </template>

      </Col>

      <Col>
      <template>
      <a-card
        hoverable
        style="width: 300px"
      >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta
          title="Card title"
          description="This is the description">
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-card-meta>
      </a-card>
      </template>

      </Col>

      <Col>
      <template>
      <a-card
        hoverable
        style="width: 300px"
      >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta
          title="Card title"
          description="This is the description">
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-card-meta>
      </a-card>
      </template>

      </Col>










      </Row>


    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>


</div>

</Layout>



  )
  }
}


export default Hdocindex;
