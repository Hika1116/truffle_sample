pragma solidity >=0.4.22 <0.7.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TrufflePRJ is ERC20("TrufflePRJ", "TRFPJ"){

  constructor(uint256 initialSupply) public {
   _mint(msg.sender, initialSupply);
   }
}