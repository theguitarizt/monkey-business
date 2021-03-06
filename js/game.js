var gameState = new GameState(0, 0, 0, false, 0, 1, 0);

function barrelClick() {
  gameState.barrel.click(gameState);
  refreshBananas();
  refreshBarrel();
}



function removeMonkey(index) {
  gameState.removeMonkey(index);
  refreshBarrel();
  refreshMonkeysInBarrel();
  refreshBPC();
}

function addWoodpecker() {
  gameState.buyWoodPecker();
  refreshWoodPeckerCost();
}

function addMonkey(type) {
  gameState.buyMonkey(type);  // Eventually we'll pass the monkey type and get cost/etc from that
  refreshBananas();
  refreshBarrel();
  refreshMonkeysInBarrel();
  refreshBPC();
}

function upgradeBarrel() {
  gameState.buyBarrel(50);  // Eventually we'll pass the barrel type and get cost/etc from that
  refreshBananas();
  refreshBarrel();
}

function refreshBananas() {
  $('bCounter').innerHTML = gameState.bananas;
}

function refreshWoodPeckerCost() {
  $('wCost').innerHTML = gameState.magic;
}

function refreshBarrel() {
  $('barrelType').innerHTML = gameState.barrel.barrelName;
  $('sBarrel').innerHTML = gameState.barrel.barrelSize;
  $('inBarrel').innerHTML = gameState.barrel.inTheBarrel.length;
  refreshMonkeysInBarrel();
  refreshBPC();
}

function refreshMonkeysInBarrel() {
  var monkeys = '';

  for (var i = 0; i < gameState.barrel.inTheBarrel.length; i++) {
    monkeys += '<li>' +
        gameState.barrel.inTheBarrel[i].type +
        ' <a href="javascript:void(0);" onclick="removeMonkey(' + i + ')">(Remove)</a></li>';
  }

  $('monkeysInBarrel').innerHTML = monkeys;
}

function refreshBPC() {
  var bananaValue = 0;
  for (var i = 0; i < gameState.barrel.inTheBarrel.length; i++) {
    bananaValue += gameState.barrel.inTheBarrel[i].bananasDropped;
  }

  $('bpc').innerHTML = bananaValue;
}

