import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Grid, Button, Icon, Image, List} from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class Test extends Component {
  static async getInitialProps ({ query: { ipfs, docstatus, insstatus} }) {


    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("Your Account is :", account);
    return { ipfs , docstatus, account,insstatus}
  }


  constructor(props) {
    super(props);
  console.log("In Contructor");

    this.state = {
        ipfs : this.props.ipfs,
        docstatus :this.props.docstatus,
        insstatus:this.props.insstatus
      }




  }


      render ()
      {
        return (
          <Layout>
          <div style={{ background: 'yellow',  padding: '30px' }}>

    <div align="center">
    <h1>MY DOCUMENTS</h1>

    <br></br> <br></br>  <br></br>
          <Grid>


      <List>
      <Icon type="ban"></Icon>
                      <h1>Documents:</h1>
                      <h2>{this.props.ipfs.map(function(name, index){
                        return <List.Item> <br></br><a href= {'https://ipfs.io/ipfs/'+name} target="_blank"><Image src='http://clipart-library.com/data_images/596925.png'  size='tiny' /></a> </List.Item>;
                        })}</h2>

              </List>
                        <List>


                      <h1>Doctor Verification Status :</h1>
                      <h2>{this.props.docstatus.map(function(name, index){
                         return <List.Item key={ index }> <br></br><br></br>{name} </List.Item>;
                        })}</h2>

     </List>
     <List>


   <h1>Insurance Verification Status :</h1>
   <h2>{this.props.insstatus.map(function(name, index){
      return <List.Item key={ index }> <br></br><br></br>{name} </List.Item>;
     })}</h2>

</List>
      </Grid>
      </div>
      </div>

    </Layout>


      )
      }
    }


    export default Test;
