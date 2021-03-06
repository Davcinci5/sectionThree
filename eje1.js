const spawn = require('child_process').spawn;
let child = spawn(process.execPath, ['exe4.js'], { stdio: 'pipe', stdout: 'pipe', stderr: 'pipe' });

let table =
`┌──────────────────────────────────────────────────────┬────────┐
 │                       (index)                        │ Values │
 ├──────────────────────────────────────────────────────┼────────┤
 │                       Malaysia                       │   3    │
 │                        China                         │  371   │
 │                        France                        │   87   │
 │                     Netherlands                      │   67   │
 │                       Germany                        │   53   │
 │                  Russian Federation                  │   31   │
 │                      Mauritius                       │   3    │
 │                       Ukraine                        │   4    │
 │                        Canada                        │   30   │
 │                     South Africa                     │   1    │
 │                      Indonesia                       │   23   │
 │                      Singapore                       │   22   │
 │               United States of America               │  107   │
 │                       Romania                        │   2    │
 │                 Korea (Republic of)                  │   37   │
 │                      Argentina                       │   7    │
 │                        India                         │   36   │
 │ United Kingdom of Great Britain and Northern Ireland │   21   │
 │                        Brazil                        │   72   │
 │                         Panama                       │   2    │
 │                        Japan                         │   3    │
 │              Taiwan (Province of China)              │   10   │
 │                       Viet Nam                       │   66   │
 │                         Sweden                       │   5    │
 │                        Italy                         │   15   │
 │                        Poland                        │   5    │
 │                     Saudi Arabia                     │   1    │
 │                       Colombia                       │   11   │
 │                 United Arab Emirates                 │   5    │
 │                      Hong Kong                       │   20   │
 │                       Zimbabwe                       │   2    │
 │                        Chile                         │   5    │
 │              Iran (Islamic Republic of)              │   9    │
 │                        Serbia                        │   1    │
 │            Bolivia (Plurinational State of)          │   4    │
 │                        Mexico                        │   11   │
 │                       Paraguay                       │   4    │
 │                       Hungary                        │   5    │
 │                Moldova (Republic of)                 │   1    │
 │                       Czechia                        │   1    │
 │                      Lithuania                       │   1    │
 │                    Cote D'ivoire                     │   1    │
 │                      Azerbaijan                      │   1    │
 │                      Australia                       │   3    │
 │                        Spain                         │   8    │
 │                       Thailand                       │   8    │
 │                       Ecuador                        │   2    │
 │                     Philippines                      │   4    │
 │                  Dominican Republic                  │   1    │
 │                         Peru                         │   2    │
 │                      Bangladesh                      │   2    │
 │                        Greece                        │   1    │
 │                       Slovenia                       │   2    │
 │                       Botswana                       │   1    │
 │                        Turkey                        │   1    │
 │                      Kazakhstan                      │   1    │
 │                        Nepal                         │   2    │
 │                      Uzbekistan                      │   1    │
 │                     Puerto Rico                      │   1    │
 │                       Morocco                        │   1    │
 │                       Croatia                        │   6    │
 │                      Sri Lanka                       │   1    │
 │                       Mongolia                       │   1    │
 │                      Guatemala                       │   1    │
 │                       Bulgaria                       │   1    │
 │                       Ireland                        │   1    │
 │                        Zambia                        │   1    │
 │                       Algeria                        │   1    │
 │                       Portugal                       │   1    │
 │                        Uganda                        │   1    │
 └──────────────────────────────────────────────────────┴────────┘`;

child.stdout.on('data', function (data) {
    console.log(data.toString());
});
