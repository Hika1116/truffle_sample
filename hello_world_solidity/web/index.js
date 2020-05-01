var abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newWord",
          "type": "string"
        }
      ],
      "name": "Set",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "word",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "newWord",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  var address = "0x26c033Ca44C81fdC007A9171Cdd5699AC6A23F08"; // コントラクトアドレス


  var web3js;
  var web3Local;

   
  window.onload = async function() {
   if (typeof web3 === 'undefined') {
       web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
       this.console.log("web3 undefined");
       return;
   }

    // Mist または MetaMask のプロバイダを使用して Web3 を初期化します。
    // web3js = new Web3(web3.currentProvider);
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    var accounts = await web3js.eth.getAccounts();
    this.console.log(accounts);

    //コントラスト送信のオプション
    var option = {
        from: accounts[1],
    };

    //コントラスト接続
    var contract = new web3js.eth.Contract(abi, address);

    contract.methods.get().call()
    .then((result) => {
        document.getElementById("contract_result").textContent = result;
    });



    //コンストラクトイベント監視
    // web3Local = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    // var eventContract = new web3Local.eth.Contract(abi, address);
    
    //Metamaskだとイベントの取得ができないみたい
    contract.events.Set()
      .on('data',(event,args)=> {
        console.log(event);
        console.log(args);
        this.console.log("hikaru");
      })
      .on('changed',(event,args)=> {
        console.log(event);
        console.log(args);
        this.console.log("hikaru");
      });
      


    document.getElementById("button_set").onclick = () => {
      let time = Math.floor(new Date().getTime() / 1000);
      console.log(time);
      contract.methods.set("" + time).send(option).then((error, txid) => {
        console.log(txid);
      });
    };

    
    //監視イベントの生成
    web3Local = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    var eventContract = new web3Local.eth.Contract(abi, address);
      // document.getElementById("contract_result").textContent = data.args.newWord;
  };


