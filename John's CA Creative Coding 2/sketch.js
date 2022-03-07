let data01 = [
    { name2: "Attempts/threats to murder and assaults",values: [2,3,4,1,2,4,4,1], total: 21 },
    { name: "Attempts/threats to murder and assaults",values: [2,3,4,1,2,2,4,1], total: 19 },
    { name2: "Burglary and related offences",values: [2,3,4,1,1,1,3,1], total: 16 },
    { name: "Burglary and related offences",values: [2,3,1,1,2,1,2,1], total: 13 },
    { name2: "Theft and related offences",values: [12,13,13,10,2,4,4,10], total: 68 },
    { name: "Theft and related offences",values: [12,13,14,6,2,4,4,1], total: 56 },
    { name2: "Public order and other social code offences",values: [13,3,4,1,2,4,4,1], total: 32 },
    { name: "Public order and other social code offences",values: [11,3,4,1,2,4,4,1], total: 30 }
];

let data02 = [

    { name: "Attempts/threats to murder and assaults",values: [21,19], total: 40 },

    { name: "Burglary and related offences",values: [16,13], total: 29 },

    { name: "Theft and related offences",values: [68,56], total: 124 },
    
    { name: "Public order and other social code offences",values: [32,30], total: 62 }
];

let data03 = [

    { name2: "Attempts/threats to murder and assaults", total: 21}
    { name: "Attempts/threats to murder and assaults", total: 19}
    { name3: "Attempts/threats to murder and assaults", total: 19}
    { name2: "Burglary and related offences",values:  total: 16}
    { name: "Burglary and related offences",values:  total: 13}
    { name3: "Burglary and related offences",values:  total: 8}
    { name2: "Theft and related offences",values:  total: 68}
    { name: "Theft and related offences",values:  total: 56}
    { name3: "Theft and related offences",values:  total: 45}
    { name2: "Public order and other social code offences", total: 32}
    { name: "Public order and other social code offences", total: 30}
    { name3: "Public order and other social code offences", total: 27}
];


let chart01;
let chart02;
let chart03;

function setup() {
    createCanvas(1500, 1300);

    chart01 = new VerBarChart(data01, "Recorded crime incidents classified by offence group before and during COVID 19 (in thousands)", "2020 (With COVID19)           2019 (Before COVID19)")
    chart01.chartWidth = 250;
    chart01.chartHeight = 250
    chart01.posX = 655;
    chart01.posY = 950;
    chart01.updateValues();

    chart02 = new HorBarChart(data01, "Recorded crime incidents classified by offence group before and during COVID 19 (in thousands)", "2020 (With COVID19)           2019 (Before COVID19)")
    chart02.chartWidth = 250;
    chart02.chartHeight = 250
    chart02.posX = 280;
    chart02.posY = 400;
    chart02.updateValues();

    chart03 = new StckHorBarChart(data02, "Recorded crime incidents classified by offence group before and during COVID 19 (in thousands)", "2020 (With COVID19)           2019 (Before COVID19)")
    chart03.chartWidth = 250;
    chart03.chartHeight = 250
    chart03.posX = 1000;
    chart03.posY = 400;
    chart03.updateValues();

}


function draw() {
    background(128,128,128);
    chart01.updateValues();
    chart01.render();
    chart02.updateValues();
    chart02.render();
    chart03.updateValues();
    chart03.render();
}