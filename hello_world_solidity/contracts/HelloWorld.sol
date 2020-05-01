pragma solidity >= 0.5.0 < 0.7.0;

contract HelloWorld {

  string public word;
  event Set(address sender, string newWord);

  constructor() public {
    word = "Hello World";
  }

  function get() public view returns (string memory) {
    return word;
  }

  function set(string memory newWord) public {
    word = newWord;
    emit Set(msg.sender, newWord);
  }
}
