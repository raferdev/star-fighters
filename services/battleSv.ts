import battleRepo from "../repositories/battleRepo.js";

interface Idata {
    userData1:any,
    userData2:any
}

function startsCount(data:Idata) {
    const {userData1,userData2} = data;
    let starsUser1 = 0;
    let startUser2 = 0;

    userData1.forEach( proj => {
        starsUser1 += proj.stargazers_count 
    });
    userData2.forEach( proj => {
        startUser2 += proj.stargazers_count
    });

    const battle =  {
        winner:null,
        loser:null,
        draw: true
    }
    if(starsUser1===startUser2) {
        battleRepo.saveBattle(userData1[0].owner.login,'draw');
        battleRepo.saveBattle(userData2[0].owner.login,'draw');
    }
    
    if(starsUser1>startUser2) {
        battle.winner = userData1[0].owner.login;
        battle.loser = userData2[0].owner.login;
        battle.draw = false
        battleRepo.saveBattle(userData1[0].owner.login,'winner');
        battleRepo.saveBattle(userData2[0].owner.login,'loser');
    }
    if(startUser2<startUser2) {
        battle.winner = userData2[0].owner.login;
        battle.loser = userData1[0].owner.login;
        battle.draw = false
        battleRepo.saveBattle(userData2[0].owner.login,'winner');
        battleRepo.saveBattle(userData1[0].owner.login,'loser');
    }
    return battle;
}

const battleServices = {
    startsCount
}

export default battleServices;