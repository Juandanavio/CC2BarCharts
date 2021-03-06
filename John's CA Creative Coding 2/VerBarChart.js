class VerBarChart {
    constructor(_data, _title, _legend) {
        this.data = _data;
        this.title = _title;
        this.legend = _legend;
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 90;
        this.margin = 20;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#000080'), color('#FF7F50'), color('#EADDCA'), color('#32CD32')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawTitle();
        this.drawLegend();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth +85, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth +85, this.tickSpacing * -i);


        }
    }

    drawTitle() {
        noStroke();
        fill(255);
        textSize(13);
        textAlign(CENTER, TOP);
        text(this.title, this.chartWidth/2 +20, -this.chartHeight -100);
    }

    drawLegend() {
        fill(0, 0, 128);
        rect(450, -this.chartHeight/2, 15 );
        fill(255, 127, 80);
        rect(645,-this.chartHeight/2,15);
        fill(234, 221, 202);
        rect(823,-this.chartHeight/2,15);
        fill(50, 205, 50);
        rect(1040, -this.chartHeight/2, 15 );
        noStroke();
        fill(255);
        textSize(13);
        textAlign(CENTER, RIGHT);
        text(this.legend, this.chartWidth +510, -this.chartHeight/2 + 2);
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            for ( let j = 0; j < this.data[i].values.length; j++){
    
                let colorNumber = j % 4;

                fill(this.colors[colorNumber]);
                noStroke();
                rect((this.barWidth + this.spacing) * i,0,this.barWidth +5 ,this.scaleData(-this.data[i].values[j]));
                // translate( this.scaleData(this.data[i].values[j]),0);
                translate(this.barWidth +10,0);

            }
            pop();
            // let colorNumber = i % 4;

            // fill(this.colors[colorNumber]);
            // noStroke();
            // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].total));

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].values, ((this.barWidth + this.spacing) * i) + this.barWidth / 2 +30, this.scaleData(-this.data[i].total)-20);

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth *2 +10, 20);
                    rotate(PI / 4)
                    text(this.data[i].name, 0, -5);
                    pop()
                } else {

                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }
}