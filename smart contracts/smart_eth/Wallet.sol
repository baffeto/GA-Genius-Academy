// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15; // Версия Солидити

contract Wallet { // Создание контракта
    address public owner; // Владелец контаркта
    mapping (address => uint) public payments;

    constructor() {
        owner = msg.sender; // Адрес отправителя
    }

    function payForItem() public payable { // Человек сможет перевести нам деньги
        payments[msg.sender] = msg.value;
    }

    function withdrawAll() public { // Отправлять деньги обратно на кошелек владельца
        address payable _to = payable (owner);
        address _thisContract = address(this); // С какого контракта отправляем деньги
        _to.transfer(_thisContract.balance); // Отправляет деньги куда? На баланс 
    }
}
