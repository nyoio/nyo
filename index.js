let fm = new Fortmatic('pk_test_EEC5B1B868938132');
web3 = new Web3(fm.getProvider());

let handlePersonalSign = (e) => {
  let message = getInputValue(e, 'message');
  web3.eth.getAccounts((err, accounts) => {
    if (err) return console.error(err);
    var from = accounts[0];
    var params = [message, from];
    var method = 'personal_sign';
    web3.currentProvider.sendAsync({
      id: 1,
      method,
      params,
      from,
    }, (err, result) => {
      if (err) return console.error(err);
      if (result.error) return console.error(result.error);
      document.getElementById('address').innerHTML="address: " + from;
      document.getElementById('signature').innerHTML="signature: " + result.result;
      console.log("address: ", from);
      console.log("signature: ", result.result);
    })
  });
};

let getInputValue = (e, name) => {
  let query = "[name='" + name + "']";
  return e.parentNode.querySelector(query).value
};

let getJsonValue = (e) => {
  let query = "[name='json']";
  return JSON.parse(e.parentNode.querySelector(query).value);
};

// https://etherscan.io/verifySig
// file:///home/joey/Documents/joey/nyoio/github.com/nyoio/index.html
