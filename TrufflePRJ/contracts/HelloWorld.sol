pragma solidity >=0.4.22 <0.7.0;

contract HelloWorld {
  string defaultMessage;
  constructor() public {
    defaultMessage = 'Hello World';
  }
  function getMessage() public view returns(string memory){
    return defaultMessage;
  }
}