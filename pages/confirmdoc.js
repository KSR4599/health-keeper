import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Card, Button, Icon, Image, Segment, Step } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

import { Link, Router } from '../routes';
import estore from '../ethereum/store';

class Test extends Component {

    static async getInitialProps ({ query: {imagehash} }) {


        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log("Your Account is :", account);
        return {imagehash, account}
      }

constructor(props) {
    super(props);
  console.log("In Constructor");

    this.state = {

        imagehash :this.props.imagehash,
        imageLink : 'https://ipfs.io/ipfs/'+this.props.imagehash,
        message: 'If Everything is Correct, Click the Confirm Button!'
      }


    this.onClick = this.onClick.bind(this);

  }


  onClick = async (event) => {
    event.preventDefault();
    this.setState({message : 'We are adding your document. Please wait.' });
      console.log("On Click Called!");

      console.log("imagehash", this.state.imagehash);

      var  dlink = 'https://ipfs.io/ipfs/'+this.state.imagehash;
    const accounts = await web3.eth.getAccounts();
console.log("THE ACCOUNT IS",accounts[0]);


    var id= estore.methods.addDocumentToStore(

      this.state.imageLink

   ).send({
     from : accounts[0]
   })

   

  console.log("OUT FROM CONTRACT");
    this.setState({message : 'Done!' });

    Router.pushRoute('/index1');
  }


      render ()
      {
        return (
    <Layout>

    <div align="center">
    <div style={{ background: 'blue',  padding: '30px' }}>

    <h1>Document Name :</h1>  <Step.Group>
    <Step>
      <Icon name='file' />
      <Step.Content>
        <Step.Title>{this.props.name}</Step.Title>
        <Step.Description>Will be Approved by the Respective Authority Soon</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
    <h1>Your Document :<a href= {this.state.imageLink} target="_blank"><Image src='http://clipart-library.com/data_images/596903.png'  size='small'/>
</a></h1>


    <form onSubmit={this.onClick}>
    <Button animated type="submit">
      <Button.Content visible>Confirm</Button.Content>
      <Button.Content hidden>
        <Icon name='check square outline' />
      </Button.Content>
    </Button>

</form>
    <Segment color='yellow'>  <h2>{this.state.message}</h2></Segment>
    </div>
    </div>
    </Layout>


      )
      }
    }


    export default Test;
