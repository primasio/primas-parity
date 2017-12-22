
Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

if(!web3.isConnected())
{
    console.log("Connection failed!");
}else{
    console.log("Connection established!");
}
