import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment, Icon} from 'semantic-ui-react';

import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router, Link } from '../routes';

import ipfsClient from 'ipfs-http-client';





class StoreIndex extends Component {



  static async getInitialProps () {


      const accounts = await web3.eth.getAccounts();
       const account = accounts[0];


    return {account}
  }


constructor(props) {
  super(props);

  this.state = {
    buffer : null,
    ipfsHash : '',
    message :'',
    account : this.props.account
  }



}
 componentDidMount() {

  window.addEventListener('load',async () => {
   const accounts = await web3.eth.getAccounts();
   const account = accounts[0];
   console.log("Account :",account)
   this.setState({account : account });
  });
}



  render ()
  {

    return (
<Layout>
<Segment placeholder>
<div style={{ background: 'grey',  padding: '30px' }}>

<div align="center">

<br/> <br/> <br/>
<Grid columns={1} relaxed>
<Grid.Row>
      <Grid.Column>
      <h1>Add your Health Record here :</h1>
    <Image src='http://www.animatedimages.org/data/media/506/animated-health-image-0047.gif' size='medium' circular />

    <br></br>    <br></br>       <br></br> <br></br> <br></br> <br></br>
<form method="post" action="/upload" id="submit-form" encType="multipart/form-data">
<input type="file" name="doc"/>
<Button animated='fade' type="submit" color='olive'>
<br></br><br></br>
      <Button.Content hidden>Upload</Button.Content>
      <Button.Content visible>
        <Icon name='upload'  align="center"/>
      </Button.Content>
    </Button>
</form>
      </Grid.Column>


  </Grid.Row>


</Grid>
</div>
</div>
 </Segment>

</Layout>


  )
  }
}


export default StoreIndex;
