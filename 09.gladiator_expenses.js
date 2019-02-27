function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmetTrashed = 0;
    let swordTrashed = 0;
    let shieldTrashed = 0;
    let armorTrashed = 0;

    for ( let i = 1; i <= lostFights; i ++){
        if (i % 2 === 0){
            helmetTrashed ++;
        }
        if(i % 3 === 0){
            swordTrashed ++;
        }
        if (i % 2 === 0 && i % 3 === 0){
            shieldTrashed ++;
        }
        if (i % 12 === 0){
            armorTrashed ++;
        }
    }
    let helmetExpenses = helmetTrashed * helmetPrice;
    let swordExpenses = swordTrashed * swordPrice;
    let shieldExpenses = shieldTrashed * shieldPrice;
    let armorExpenses = armorTrashed * armorPrice;
    let totalExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus.`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200) 
