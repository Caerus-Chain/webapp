<template>
  <div class="container">
    <!--h1>Caerus Contract Development</h1-->
    <div class="title"><h1>Contract Development</h1></div>
    <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
      <div class="left">
        <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
          <highlightjs language='solidity' code="bytes memory args = abi.encodePacked(
  address(this),        // account
  slotNumber,           // slot number
  blockNumber           // block number
);

(
  bool success,         // status
  bytes memory result   // result (bytes)
) = address(0x13).staticcall(args);" />
        </div>
      </div>
      <div class="right">
        <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
          <p>
            To access historical data on the Caerus chain, you can invoke precompiled contract 19 (0x13),
            specifying the account address, slot number, and past block number as parameters.
          </p>
        </div>
      </div>
    </div>

    <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
      <div class="left">
        <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
          <highlightjs language='solidity' code="bytes32 result = caerus(
  address(this),        // account
  slotNumber,           // slot number
  blockNumber           // block number
);" />
        </div>
      </div>
      <div class="right">
        <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
          <p>
            Alternatively, you can use the keyword "caerus" to retrieve past data in bytes32 format,
            utilizing our customized Solidity compiler.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 50vh;
  padding: 50px;
  background-color: rgb(0, 0, 0);
  text-align: center;
}

.right {
  text-align: left;
}

.title {
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0.505);
  display: inline-block;
  border-radius: 50px 50px 50px 50px;
  margin-bottom: 70px;
}

.title h1 {
  position: relative;
  top: 10px;
  line-height: 2rem;
  padding: 0px 20px 0px 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.89);
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.89);
  padding-bottom: 50px;
}

p {
  color: rgba(255, 255, 255, 0.89);
  font-size: 1.3rem;
}

pre {
  text-align: left;
  font-size: 1.5rem;
}
</style>
