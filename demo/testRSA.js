<!DOCTYPE html>
<html>
<head>
  <title>JSEncrypt</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="text/javascript" src="../bin/jsencrypt.js"></script>
  <style type="text/css">
    body {
      padding-top: 70px;
    }
  </style>
</head>
<body>

<button id="btnTest" onclick="generateRSAPair()">Test Keys</button>

<script type="text/javascript">
  function generateRSAPair() {

      var keySize = 1024;
      var crypt = new JSEncrypt({ default_key_size: keySize });
      crypt.getKey();
      var privKey = crypt.getPrivateKey();
      var publicKey = crypt.getPublicKey();


      var crypt2 = new JSEncrypt();
      crypt2.setPrivateKey(privKey);

      var emess = crypt2.encrypt('this is a message');

      var decrypted = crypt2.decrypt(emess);

      return (privKey, publicKey);

  }
</script>

</div>
</body>
</html>
