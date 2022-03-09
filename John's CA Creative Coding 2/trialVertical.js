// class HorBarChart {
//     constructor(_data, _title, _legend) {
//         this.data = _data;
//         this.title = _title;
//         this.legend = _legend;
//         this.chartWidth = 300;
//         this.chartHeight = 300;
//         this.spacing = 5;
//         this.margin = 30;
//         this.numTicks = 10;
//         this.posX = 50;
//         this.posY = 400;
//         this.tickIncrements;
//         this.maxValue;
//         this.numPlaces = 0;
//         this.tickSpacing;
//         this.barWidth;
//         this.availableWidth;

//         this.showValues = true;
//         this.showLabels = true;
//         this.rotateLabels = true;

//         this.colors = [color('#FF7F50'), color('#000080')];

//         this.updateValues();
//         this.calculateMaxValue();
//     }

//     updateValues() {
//         this.tickSpacing = this.chartHeight / this.numTicks;
//         this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
//         this.barWidth = this.availableWidth / this.data.length;
//     }

//     calculateMaxValue() {
//         let listValues = this.data.map(function(x) { return x.total })
//         this.maxValue = max(listValues);
//         this.tickIncrements = this.maxValue / this.numTicks;
//     }

//     render() {

//         push()
//         translate(this.posX, this.posY);

//         this.drawTicks();
//         this.drawHorizontalLines();
//         this.drawRects();
//         this.drawAxis();
//         this.drawTitle();
//         this.drawLegend();
//         pop()
//     }

//     scaleData(num) {
//         return map(num, 0, this.maxValue, 0, this.chartHeight);
//     }

//     drawAxis() {
//         //chart
//         stroke(255, 180);
//         strokeWeight(1);
//         line(0, 0, 0, -this.chartHeight); //y
//         line(0, 0, this.chartWidth, 0); //x
//     }

//     drawTicks() {
//         for (let i = 0; i <= this.numTicks; i++) {
//             //ticks
//             stroke(255);
//             strokeWeight(1)
//             line(this.tickSpacing * i,0,  this.tickSpacing * i,10,);

//             //numbers (text)
//             if (this.showValues) {
//                 fill(255, 200);
//                 noStroke();
//                 textSize(14);
//                 textAlign(RIGHT, CENTER);
//                 text((i * this.tickIncrements).toFixed(this.numPlaces),  -this.tickSpacing * -i,25);
//             }
//         }
//     }

//     drawHorizontalLines() {
//         for (let i = 0; i <= this.numTicks; i++) {

//             //horizontal line
//             stroke(255, 50);
//             strokeWeight(1)
//             line(this.tickSpacing * i, -0, this.tickSpacing * i, -this.chartWidth);


//         }
//     }

//     drawTitle() {
//         noStroke();
//         fill(255);
//         textSize(13);
//         textAlign(CENTER, TOP);
//         text(this.title, this.chartWidth/2, -this.chartHeight -60);
//     }

//     drawLegend() {
//         fill(0, 0, 128);
//         rect(-58,85 , 15 );
//         fill(255, 127, 80);
//         rect(135,85,15);
//         noStroke();
//         fill(255);
//         textSize(13);
//         textAlign(CENTER, BOTTOM);
//         text(this.legend, this.chartWidth/2, -this.chartHeight + 350);
//     }

//     drawRects() {
//         push();
//         translate(0, -this.margin);
//         for (let i = 0; i < this.data.length; i++) {
            
//             let colorNumber = i % 2;

//             //bars
//             fill(this.colors[colorNumber]);
            
//             noStroke();
//             rect(0, (this.barWidth + this.spacing) * -i, this.scaleData(this.data[i].total), -this.barWidth);

            

//             //numbers (text)
//             noStroke();
//             fill(255);
//             textSize(16);
//             textAlign(LEFT, BOTTOM);
//             text(this.data[i].total, this.scaleData(this.data[i].total)+5,((-this.barWidth - this.spacing) * i) - this.barWidth / 4);

//             //text
//             if (this.showLabels) {
//                 if (this.rotateLabels) {
//                     push()
//                     noStroke();
//                     textSize(12);
//                     textAlign(RIGHT, CENTER);
//                     translate(-10, (-(this.barWidth + this.spacing) * i) - this.barWidth / 2);
//                     rotate(PI * 2)
//                     text(this.data[i].name, 0, 15);
//                     pop()
//                 } else {

//                     noStroke();
//                     fill(255);
//                     textSize(14);
//                     textAlign(CENTER, BOTTOM);
//                     text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
//                 }
//             }


//         }
//         pop()
//     }
// }