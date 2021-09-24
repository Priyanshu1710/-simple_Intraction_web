var helloWorldABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function",

    }
];
var helloWorldAddress = '0xc4edea59893C659C25c6cC20c4454Ebb95c1e4B2';
// var helloWorldAddress = '0x7e455924Ebd490eA88ED5E23e85d814ab859118c';
var web3 = new Web3('http://localhost:7545');
var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
        .then(result => {
            document.getElementById('hello').innerHTML = result;
        });
});
