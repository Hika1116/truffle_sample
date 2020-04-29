window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            var option = {
                from: accounts[0]
            };
            var myContract = new web3.eth.Contract(abi, contractAddress);
            myContract.methods.RegisterInstructor('8', 'yz')
                .send(option, function (error, result) {
                    if (!error)
                        console.log(result);
                    else
                        console.log(error);
                });
        } catch (error) { }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        web3.eth.sendTransaction({
            /* ... */
        });
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!Metamaskブラウザーアプリが使用できるブラウザーに変更して下さい！');
    }
});