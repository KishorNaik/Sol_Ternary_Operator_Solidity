import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Global-Variable-Example", function () {
  it("#Test1 - Check-age-Success", async function () {
    const Contract = await ethers.getContractFactory("TernaryOperatorCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    let flag:boolean =await contract.demo(20);
    expect(flag).to.equal(true);
  });

  it("#Test2 - Check-age-Fail", async function () {
    const Contract = await ethers.getContractFactory("TernaryOperatorCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    let flag:boolean =await contract.demo(10);
    expect(flag).to.equal(false);
  });

});