// let data01 = [
//     { name2: "Attempts/threats to murder and assaults", total: 19 },
//     { name: "Attempts/threats to murder and assaults", total: 21 },
//     { name2: "Burglary and related offences", total: 13 },
//     { name: "Burglary and related offences", total: 16 },
//     { name2: "Theft and related offences", total: 56 },
//     { name: "Theft and related offences", total: 68 },
//     { name2: "Public order and other social code offences", total: 30 },
//     { name: "Public order and other social code offences", total: 32 }
// ];
let data01 = [

    { name: "Attempts/threats to murder and assaults",values: [21, 19], total: 21 },

    { name: "Burglary and related offences",values: [16,13], total: 16 },

    { name: "Theft and related offences",values: [68,56], total: 68 },
    
    { name: "Public order and other social code offences",values: [32,30], total: 32 }
];

let data02 = [

    { name: "Attempts/threats to murder and assaults",values: [21,19,19], total: 59 },

    { name: "Burglary and related offences",values: [16,13,8], total: 37 },

    { name: "Theft and related offences",values: [68,56,45], total: 169 },
    
    { name: "Public order and other social code offences",values: [32,30,27], total: 89 }
];

let data03 = [

    // { name2: "Attempts/threats to murder and assaults", total: 21},
    // { name: "Attempts/threats to murder and assaults", total: 19},
    // { name3: "Attempts/threats to murder and assaults", total: 19},
    // { name4: "Attempts/threats to murder and assaults", total: 28},
    { name: "Attempts/threats to murder and assaults",values: [21,19,19,28], total: 28},
    // { name2: "Burglary and related offences", total: 16},
    // { name: "Burglary and related offences",  total: 13},
    // { name3: "Burglary and related offences",  total: 8},
    // { name4: "Burglary and related offences",  total: 19},
    { name: "Burglary and related offences", values: [16,13,8,19], total: 19},
    // { name2: "Theft and related offences", total: 68},
    // { name: "Theft and related offences", total: 56},
    // { name3: "Theft and related offences", total: 45},
    // { name4: "Theft and related offences", total: 70},
    { name: "Theft and related offences", values: [68,56,45,70], total: 70},
    // { name2: "Public order and other social code offences", total: 32},
    // { name: "Public order and other social code offences", total: 30},
    // { name3: "Public order and other social code offences", total: 27},
    // { name4: "Public order and other social code offences", total: 37}
    { name: "Public order and other social code offences", values: [32,30,27,37] , total: 37}
];



let chart01;
let chart02;
let chart03;

function setup() {
    createCanvas(1500, 2500);

    chart01 = new VerBarChart(data03, "Recorded crime incidents classified by offence group before, during, one year and the present with COVID 19 in Ireland (in thousands)", "2019 (Before of COVID19)           2020 (During COVID19)           2021(One Year into COVID19)           2022(The Present with COVID19)")
    chart01.chartWidth = 350;
    chart01.chartHeight = 350;
    chart01.posX = 200;
    chart01.posY = 1050;
    chart01.updateValues();

    // chart02 = new HorBarChart(data01, "Recorded crime incidents classified by offence group before and during COVID 19 in Ireland (in thousands)", "2019 (Before of COVID19)           2020 (During COVID19)")
    // chart02.chartWidth = 250;
    // chart02.chartHeight = 250
    // chart02.posX = 280;
    // chart02.posY = 400;
    // chart02.updateValues();

    chart03 = new StckHorBarChart(data02, "Recorded crime incidents classified by offence group before, during and one year into COVID 19 in Ireland (in thousands)", "2019 (Before of COVID19)           2020 (During COVID19)           2021(One Year into COVID19)")
    chart03.chartWidth = 250;
    chart03.chartHeight = 250
    chart03.posX = 1000;
    chart03.posY = 400;
    chart03.updateValues();
    
    chart04 = new HorBarChart(data01, "Recorded crime incidents classified by offence group before and during COVID 19 in Ireland (in thousands)", "2019 (Before of COVID19)           2020 (During COVID19)")
    chart04.chartWidth = 250;
    chart04.chartHeight = 250
    chart04.posX = 280;
    chart04.posY = 400;
    chart04.updateValues();

}


function draw() {
    background(128,128,128);
    chart01.updateValues();
    chart01.render();
    // chart02.updateValues();
    // chart02.render();
    chart03.updateValues();
    chart03.render();
    chart04.updateValues();
    chart04.render();
}
