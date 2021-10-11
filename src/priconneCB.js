const { PresenceUpdateStatus } = require('discord-api-types')
const CBInfo = require('../config/config.json')
const currentRound = [1,1,1,1,1]
let netRound=1
let currentTier = 1

function netRoundUpdate() {
  if (currentRound.every(v => v <= netRound)) {
    
  } else {
    netRound++
  }
}
//works
function getBossTier(bossRound) {
  if (bossRound<1) {
    throw new Error('invalid boss round');
  }
  for (i=0; i<CBInfo.Bosses.tierStart.length; i++) {
    if (bossRound<CBInfo.Bosses.tierStart[i]) return i+1// remove +1 if the CBInfo.Bosses.tierStart length is 5
  }
  return 5
}
for (let index = 1; index < 100; index++) {
  console.log(index, getBossTier(index))
  
}

//
function bossRoundUpdate(bossKilled) {
  if (CBInfo.Bosses.tierStart.includes(currentRound[bossKilled-1])){
    if (currentRound.every(v => v === currentRound[0])) {
      currentRound[bossKilled-1]++
      currentTier++
    } else if (currentRound.every(v => v >= currentRound[0])) {
      currentRound[bossKilled-1]++
    }
  } else {
    currentRound[bossKilled-1]++
  }
  console.log(currentRound, currentTier)
}
for (let index = 0; index < 50; index++) {
  if (index%3==1) {
    console.log('hit boss 1,2,4')
    bossRoundUpdate(1)
    bossRoundUpdate(2)
    bossRoundUpdate(4)
  } else{
    console.log('hit boss 3,5')
    bossRoundUpdate(3)
    bossRoundUpdate(5)
  }
}