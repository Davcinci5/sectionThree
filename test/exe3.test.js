let createTableFromCsv = require('../exe3');

///      this command was use to do the test --->  npm run test:three pokemon.csv pokemon_more_11.csv

test('create Table with this pokemon.csv', async () => {
    let column = '|         #        |       Name       |      Type 1      |      Type 2      |       Total      |        HP        |      Attack      |      Defense     |      Sp. Atk     |      Sp. Def     |       Speed      |\n' +
                 '|         1        |     Bulbasaur    |       Grass      |      Poison      |        318       |        45        |        49        |        49        |        65        |        65        |        45        |\n' +
                 '|         2        |      Ivysaur     |       Grass      |      Poison      |        405       |        60        |        62        |        63        |        80        |        80        |        60        |\n' +
                 '|         3        |     Venusaur     |       Grass      |      Poison      |        525       |        80        |        82        |        83        |        100       |        100       |        80        |\n' +
                 '|         3        |VenusaurMega Venus|       Grass      |      Poison      |        625       |        80        |        100       |        123       |        122       |        120       |        80        |\n' +
                 '|         4        |    Charmander    |       Fire       |                  |        309       |        39        |        52        |        43        |        60        |        50        |        65        |\n' +
                 '|         5        |    Charmeleon    |       Fire       |                  |        405       |        58        |        64        |        58        |        80        |        65        |        80        |\n' +
                 '|         6        |     Charizard    |       Fire       |      Flying      |        534       |        78        |        84        |        78        |        109       |        85        |        100       |\n' +
                 '|         6        |CharizardMega Char|       Fire       |      Dragon      |        634       |        78        |        130       |        111       |        130       |        85        |        100       |\n' +
                 '|         6        |CharizardMega Char|       Fire       |      Flying      |        634       |        78        |        104       |        78        |        159       |        115       |        100       |\n' +
                 '|         7        |     Squirtle     |       Water      |                  |        314       |        44        |        48        |        65        |        50        |        64        |        43        |\n' +
                 '|         8        |     Wartortle    |       Water      |                  |        405       |        59        |        63        |        80        |        65        |        80        |        58        |\n' +
                 '|         9        |     Blastoise    |       Water      |                  |        530       |        79        |        83        |        100       |        85        |        105       |        78        |\n' +
                 '|         9        |BlastoiseMega Blas|       Water      |                  |        630       |        79        |        103       |        120       |        135       |        115       |        78        |\n' +
                 '|        10        |     Caterpie     |        Bug       |                  |        195       |        45        |        30        |        35        |        20        |        20        |        45        |\n' +
                 '|        11        |      Metapod     |        Bug       |                  |        205       |        50        |        20        |        55        |        25        |        25        |        30        |\n' +
                 '|        12        |    Butterfree    |        Bug       |      Flying      |        395       |        60        |        45        |        50        |        90        |        80        |        70        |\n' +
                 '|        13        |      Weedle      |        Bug       |      Poison      |        195       |        40        |        35        |        30        |        20        |        20        |        50        |\n' +
                 '|        14        |      Kakuna      |        Bug       |      Poison      |        205       |        45        |        25        |        50        |        25        |        25        |        35        |\n' +
                 '|        15        |     Beedrill     |        Bug       |      Poison      |        395       |        65        |        90        |        40        |        45        |        80        |        75        |\n' +
                 '|        15        |BeedrillMega Beedr|        Bug       |      Poison      |        495       |        65        |        150       |        40        |        15        |        80        |        145       |\n' +
                 '|        16        |      Pidgey      |      Normal      |      Flying      |        251       |        40        |        45        |        40        |        35        |        35        |        56        |\n' +
                 '|        17        |     Pidgeotto    |      Normal      |      Flying      |        349       |        63        |        60        |        55        |        50        |        50        |        71        |\n' +
                 '|        18        |      Pidgeot     |      Normal      |      Flying      |        479       |        83        |        80        |        75        |        70        |        70        |        101       |\n' +
                 '|        18        |PidgeotMega Pidgeo|      Normal      |      Flying      |        579       |        83        |        80        |        80        |        135       |        80        |        121       |\n' +
                 '|        19        |      Rattata     |      Normal      |                  |        253       |        30        |        56        |        35        |        25        |        35        |        72        |\n' +
                 '|        20        |     Raticate     |      Normal      |                  |        413       |        55        |        81        |        60        |        50        |        70        |        97        |\n' +
                 '|        21        |      Spearow     |      Normal      |      Flying      |        262       |        40        |        60        |        30        |        31        |        31        |        70        |\n' +
                 '|        22        |      Fearow      |      Normal      |      Flying      |        442       |        65        |        90        |        65        |        61        |        61        |        100       |\n' +
                 '|        23        |       Ekans      |      Poison      |                  |        288       |        35        |        60        |        44        |        40        |        54        |        55        |\n' +
                 '|        24        |       Arbok      |      Poison      |                  |        438       |        60        |        85        |        69        |        65        |        79        |        80        |\n' +
                 '|        25        |      Pikachu     |     Electric     |                  |        320       |        35        |        55        |        40        |        50        |        50        |        90        |\n' +
                 '|        26        |      Raichu      |     Electric     |                  |        485       |        60        |        90        |        55        |        90        |        80        |        110       |\n' +
                 '|        27        |     Sandshrew    |      Ground      |                  |        300       |        50        |        75        |        85        |        20        |        30        |        40        |\n' +
                 '|        28        |     Sandslash    |      Ground      |                  |        450       |        75        |        100       |        110       |        45        |        55        |        65        |\n' +
                 '|        29        |     Nidoran♀     |      Poison      |                  |        275       |        55        |        47        |        52        |        40        |        40        |        41        |\n' +
                 '|        30        |     Nidorina     |      Poison      |                  |        365       |        70        |        62        |        67        |        55        |        55        |        56        |\n' +
                 '|        31        |     Nidoqueen    |      Poison      |      Ground      |        505       |        90        |        92        |        87        |        75        |        85        |        76        |\n' +
                 '|        32        |     Nidoran♂     |      Poison      |                  |        273       |        46        |        57        |        40        |        40        |        40        |        50        |\n' +
                 '|        33        |     Nidorino     |      Poison      |                  |        365       |        61        |        72        |        57        |        55        |        55        |        65        |\n' +
                 '|        34        |     Nidoking     |      Poison      |      Ground      |        505       |        81        |        102       |        77        |        85        |        75        |        85        |\n' +
                 '|        35        |     Clefairy     |       Fairy      |                  |        323       |        70        |        45        |        48        |        60        |        65        |        35        |\n' +
                 '|        36        |     Clefable     |       Fairy      |                  |        483       |        95        |        70        |        73        |        95        |        90        |        60        |\n' +
                 '|        37        |      Vulpix      |       Fire       |                  |        299       |        38        |        41        |        40        |        50        |        65        |        65        |\n' +
                 '|        38        |     Ninetales    |       Fire       |                  |        505       |        73        |        76        |        75        |        81        |        100       |        100       |\n' +
                 '|        39        |    Jigglypuff    |      Normal      |       Fairy      |        270       |        115       |        45        |        20        |        45        |        25        |        20        |\n' +
                 '|        40        |    Wigglytuff    |      Normal      |       Fairy      |        435       |        140       |        70        |        45        |        85        |        50        |        45        |\n' +
                 '|        41        |       Zubat      |      Poison      |      Flying      |        245       |        40        |        45        |        35        |        30        |        40        |        55        |\n' +
                 '|        42        |      Golbat      |      Poison      |      Flying      |        455       |        75        |        80        |        70        |        65        |        75        |        90        |\n' +
                 '|        43        |      Oddish      |       Grass      |      Poison      |        320       |        45        |        50        |        55        |        75        |        65        |        30        |\n';

    let path = process.argv[4];
    let data = await createTableFromCsv(path);
    expect(data).toBe(column);
});

test('get error, more than 11 columns', async () => {
    try {
        let path = process.argv[5];
        await createTableFromCsv(path);
    } catch (error) {
        expect(error.message).toBe('Invalid amount of rows');
    }
});