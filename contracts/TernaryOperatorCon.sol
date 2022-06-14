// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract TernaryOperatorCon{

    function demo(uint _age) public pure returns(bool){
        return (_age>=18) ? true : false;
    }
}