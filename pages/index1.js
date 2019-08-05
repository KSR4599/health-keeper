import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment, Input, Icon} from 'semantic-ui-react';
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
<div style={{ background: '#FE9A76',  padding: '30px' }}>

<div align="center">
<h1>Your Account:{this.state.account} </h1>

<br/> <br/> <br/>
<Segment placeholder>
<Grid columns={3} divided>
<Grid.Row>
      <Grid.Column>
       <img src='http://clipart-library.com/data_images/596905.png' />
       <br></br> <br></br>
       <Link route= "/adddoc">

          <a className = "item"> <Button type="submit" content='Add Document' icon='plus circle' size='big' color='orange'/></a>
          </Link>
      </Grid.Column>


      <Grid.Column>
       <img src='http://clipart-library.com/data_images/596974.jpg' />
       <form action="/mydocs" method="post">
       <input type="hidden" name ="account" value={this.state.account} />
       <input type="hidden" name ="sample" value="10"/>
       <br></br>  <br></br>
        <Button content='My Documents' icon='address card outline' size='big' color="orange"/>
        </form>

      </Grid.Column>





      <Grid.Column>
       <img src='http://clipart-library.com/data_images/226249.gif' />
       <form action="/mydocs" method="post">
       <input type="hidden" name ="sample" value="10"/>
       <br></br>
       <Input icon={<Icon name='address card' inverted circular link />} name="account" placeholder='Enter the address' />
       <br></br>  <br></br>
        <Button content='Check the status' icon='hospital' size='big' type="submit" color='orange' />


        </form>
      </Grid.Column>

</Grid.Row>
    </Grid>

  </Segment>


</div>

</div>
</Layout>


  )
  }
}


export default StoreIndex;
