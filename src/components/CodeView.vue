<template>
  <div class="container">
    <!--h1>Caerus Contract Development</h1-->
    <div class="title"><h1>Contract Development</h1></div>
    <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
      <div class="left">
        <div class="relative" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
          <highlightjs
            language="solidity"
            code="bytes memory args = abi.encodePacked(
  address(this),        // account
  slotNumber,           // slot number
  blockNumber           // block number
);

(
  bool success,         // status
  bytes memory result   // result (bytes)
) = address(0x13).staticcall(args);"
          />
          <a href="https://github.com/Caerus-Chain/test-contract/blob/master/contracts/TestContract.sol" target="_blank"><img class="icon" src="/arrow.svg" /></a>
          <div class="caption">
            <span>
              To access historical data on the Historeum, you can invoke precompiled
              contract 19 (0x13), specifying the account address, slot number, and past
              block number as parameters.
            </span>
          </div>
        </div>
        <div
          class="padding-top relative"
          uk-scrollspy="cls: uk-animation-slide-left; repeat: true"
        >
          <highlightjs
            language="solidity"
            code="bytes32 result = caerus(
  address(this),        // account
  slotNumber,           // slot number
  blockNumber           // block number
);"
          />
          <a href="https://github.com/Caerus-Chain/test-contract/blob/master/contracts/TestContract.sol" target="_blank"><img class="icon" src="/arrow.svg" /></a>
          <div class="caption">
            <span>
              Alternatively, you can use the keyword `caerus` to retrieve past data in
              bytes32 format, utilizing our customized Solidity compiler.
            </span>
          </div>
        </div>
      </div>
      <div class="right">
        <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
          <h1>To Access<br />Historical<br />Data<br />On Chain</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  padding: 50px;
  background-color: rgb(81, 81, 81);
  text-align: center;
}

.left,
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
  font-size: 8rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.75);
  padding-bottom: 50px;
}

p {
  color: rgba(255, 255, 255, 0.89);
  font-size: 1.3rem;
}

pre {
  text-align: left;
  font-size: 1rem;
  padding: 10px;
  background-color: #22272e;
  border: none;
  border-radius: 30px;
  opacity: 0.9;
  margin-bottom: 4px;
}

pre code {
  padding: 3em;
}

.caption {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  padding: 0px 20px 0px 20px;
}

.relative {
  position: relative;
}
.icon {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  cursor: pointer;
  filter: invert(100%) sepia(0%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
  opacity: 0.8;
  transition: all .2s ease-in-out;
}
.icon:hover {
  opacity: 1;
}
</style>
