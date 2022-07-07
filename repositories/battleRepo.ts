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

async function ranking() {
    const rank = await connection.query(`
    SELECT username,SUM(wins) as wins,
    SUM(losses) as losses,
    SUM(draws) as draws 
    FROM fighters GROUP BY username
    ORDER BY wins DESC;
    `);
    return rank.rows
}

const battleRepo = {
    saveBattle,
    ranking
};

export default battleRepo;