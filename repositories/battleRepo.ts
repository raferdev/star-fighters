import connection from "../database/db.js";

async function saveBattle(user:string,battle:string) {
    const db = {
        user,
        wins:0,
        losses:0,
        drawns:0

    };
    if(battle==='winner') {
        db.wins++
    };

    if(battle==='loser') {
        db.losses++
    };

    if(battle==='draw') {
        db.drawns++
    };
    await connection.query(`
    INSERT INTO fighters (username,wins,losses,draws) VALUES ($1,$2,$3,$4)
    `,[db.user,db.wins,db.losses,db.drawns]);
}


const battleRepo = {
    saveBattle,
};

export default battleRepo;