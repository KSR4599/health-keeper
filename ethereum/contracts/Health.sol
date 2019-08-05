pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract Health{
struct Document{
  uint id;
  string imageLink;
  uint uploadTime;
  address owner;
  string docstatus;
  string insstatus;

}

mapping(uint=>address) docInStore;
mapping(address=> mapping(uint=>Document)) alldocs;
mapping(uint=> Document) alldox;


event newDoc(uint id, string imageLink, uint uploadTime, address owner, string docstatus, string insstatus);
event verDoc(uint id, string imageLink, uint uploadTime, address owner, string docstatus, string insstatus);


function addDocumentToStore( string memory _imageLink ) public returns (string memory){

address owner=msg.sender;
uint random=uint(keccak256(abi.encodePacked(now, msg.sender, _imageLink)))%1000000000;
uint now1=now;
Document memory document = Document(random, _imageLink, now1, owner, "unverified", "unverified");

       alldox[random] = document;


     emit newDoc(random, _imageLink, now1, owner, "unverified", "unverified");
     return random;
   }

   function getDoc(uint id) public view returns (uint, string memory, uint, address, string memory, string memory) {
       Document memory dox = alldox[id];

       return (dox.id, dox.imageLink, dox.uploadTime, dox.owner, dox.docstatus, dox.insstatus);

   }
    function verifyDoc(uint _docId, uint _index) public returns (uint,string memory, uint, address, string memory, string memory) {

       Document storage  doc1 = alldox[_docId];

       if(_index==1 ){

         doc1.docstatus = "verified";

         emit verDoc(doc1.id, doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.docstatus, doc1.insstatus);


        return (doc1.id,doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.docstatus, doc1.insstatus);

       }
       else{

           doc1.insstatus ="verified";
           emit verDoc(doc1.id, doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.docstatus, doc1.insstatus);


          return (doc1.id,doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.docstatus, doc1.insstatus);

}






       }






  constructor() public {}

}
