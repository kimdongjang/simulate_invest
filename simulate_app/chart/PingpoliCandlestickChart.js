export function PingpoliCandlestick(timestamp, open, close, high, low) {
    this.timestamp = parseInt(timestamp);
    this.open = parseFloat(open);
    this.close = parseFloat(close);
    this.high = parseFloat(high);
    this.low = parseFloat(low);
}



export function PingpoliCandlestickChart(canvas_, json) {
    this.canvas = canvas_
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.canvas.context = this.canvas.getContext("2d");

    this.canvas.addEventListener("mousemove", (e) => {
        this.canvas.mouseMove(e);
    });
    this.canvas.addEventListener("mouseout", (e) => {
        this.canvas.mouseOut(e);
    });

    this.canvas.style.backgroundColor = "#252525";
    this.canvas.context.font = '12px sans-serif';
    this.canvas.gridColor = "#444444";
    this.canvas.gridTextColor = "#aaaaaa";
    this.canvas.mouseHoverBackgroundColor = "#eeeeee";
    this.canvas.mouseHoverTextColor = "#000000";
    this.canvas.greenColor = "#00cc00";
    this.canvas.redColor = "#cc0000";
    this.canvas.greenHoverColor = "#00ff00";
    this.canvas.redHoverColor = "#ff0000";

    this.canvas.context.lineWidth = 1;
    this.canvas.candleWidth = 5;

    this.canvas.marginLeft = 10;
    this.canvas.marginRight = 100;
    this.canvas.marginTop = 10;
    this.canvas.marginBottom = 30;

    this.canvas.yStart = 0;
    this.canvas.yEnd = 0;
    this.canvas.yRange = 0;
    this.canvas.yPixelRange = this.canvas.height - this.canvas.marginTop - this.canvas.marginBottom;

    this.canvas.xStart = 0;
    this.canvas.xEnd = 0;
    this.canvas.xRange = 0;
    this.canvas.xPixelRange = this.canvas.width - this.canvas.marginLeft - this.canvas.marginRight;

    // these are only approximations, the grid will be divided in a way so the numbers are nice
    this.canvas.xGridCells = 16;
    this.canvas.yGridCells = 16;

    this.canvas.b_drawMouseOverlay = false;
    this.canvas.mousePosition = { x: 0, y: 0 };
    this.canvas.xMouseHover = 0;
    this.canvas.yMouseHover = 0;
    this.canvas.hoveredCandlestickID = 0;

    this.canvas.candlesticks = [];
    for ( var i = 0 ; i < json.length ; ++i )
    {
        this.canvas.candlesticks.push(new PingpoliCandlestick(json[i][0], json[i][1] , json[i][4] , json[i][2] , json[i][3] ));
    }   


    this.canvas.addCandlestick = function (candlestick) {
        this.candlesticks.push(candlestick);
    }



    this.canvas.mouseMove = function (e) {
        var getMousePos = (e) => {
            var rect = this.getBoundingClientRect();
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }
        this.mousePosition = getMousePos(e);
        this.mousePosition.x += this.candleWidth / 2;
        this.b_drawMouseOverlay = true;
        if (this.mousePosition.x < this.marginLeft) this.b_drawMouseOverlay = false;
        if (this.mousePosition.x > this.width - this.marginRight + this.candleWidth) this.b_drawMouseOverlay = false;
        if (this.mousePosition.y > this.height - this.marginBottom) this.b_drawMouseOverlay = false;
        if (this.b_drawMouseOverlay) {
            this.yMouseHover = this.yToValueCoords(this.mousePosition.y);
            this.xMouseHover = this.xToValueCoords(this.mousePosition.x);
            // snap to candlesticks
            var candlestickDelta = this.candlesticks[1].timestamp - this.candlesticks[0].timestamp;            
            
            this.hoveredCandlestickID = Math.floor((this.xMouseHover - this.candlesticks[0].timestamp) / candlestickDelta);                        
            this.xMouseHover = Math.floor(this.xMouseHover / candlestickDelta) * candlestickDelta;
            this.mousePosition.x = this.xToPixelCoords(this.xMouseHover);
            this.draw();
        }
        else this.draw();
    }



    this.canvas.mouseOut = function (e) {
        this.b_drawMouseOverlay = false;
        this.draw();
    }

    this.canvas.draw = function () {
        // clear background
        this.context.clearRect(0, 0, this.width, this.height);

        this.calculateYRange();
        this.calculateXRange();

        this.drawGrid();

        this.candleWidth = this.xPixelRange / this.candlesticks.length;
        this.candleWidth--;
        if (this.candleWidth % 2 == 0) this.candleWidth--;

        for (var i = 0; i < this.candlesticks.length; ++i) {
            var color = (this.candlesticks[i].close > this.candlesticks[i].open) ? this.greenColor : this.redColor;

            if (i == this.hoveredCandlestickID) {
                if (color == this.greenColor) color = this.greenHoverColor;
                else if (color == this.redColor) color = this.redHoverColor;
            }
            // draw the wick
            this.drawLine(this.xToPixelCoords(this.candlesticks[i].timestamp), this.yToPixelCoords(this.candlesticks[i].low), this.xToPixelCoords(this.candlesticks[i].timestamp), this.yToPixelCoords(this.candlesticks[i].high), color);
            
            // draw the candle
            this.fillRect(this.xToPixelCoords(this.candlesticks[i].timestamp) - Math.floor(this.candleWidth / 2), this.yToPixelCoords(this.candlesticks[i].open), this.candleWidth, this.yToPixelCoords(this.candlesticks[i].close) - this.yToPixelCoords(this.candlesticks[i].open), color);
            
        }

        // draw mouse hover
        if (this.b_drawMouseOverlay) {
            // price line
            this.context.setLineDash([5, 5]);
            this.drawLine(0, this.mousePosition.y, this.width, this.mousePosition.y, this.mouseHoverBackgroundColor);
            this.context.setLineDash([]);
            var str = this.roundPriceValue(this.yMouseHover);
            var textWidth = this.context.measureText(str).width;
            this.fillRect(this.width - 70, this.mousePosition.y - 10, 70, 20, this.mouseHoverBackgroundColor);
            this.context.fillStyle = this.mouseHoverTextColor;
            this.context.fillText(str, this.width - textWidth - 5, this.mousePosition.y + 5);

            // time line
            this.context.setLineDash([5, 5]);
            this.drawLine(this.mousePosition.x, 0, this.mousePosition.x, this.height, this.mouseHoverBackgroundColor);
            this.context.setLineDash([]);
            str = this.formatDate(new Date(this.xMouseHover));
            textWidth = this.context.measureText(str).width;
            this.fillRect(this.mousePosition.x - textWidth / 2 - 5, this.height - 20, textWidth + 10, 20, this.mouseHoverBackgroundColor);
            this.context.fillStyle = this.mouseHoverTextColor;
            this.context.fillText(str, this.mousePosition.x - textWidth / 2, this.height - 5);

            // data
            var yPos = this.mousePosition.y - 95;
            if (yPos < 0) yPos = this.mousePosition.y + 15;

            this.fillRect(this.mousePosition.x + 15, yPos, 100, 80, this.mouseHoverBackgroundColor);            
            try{
            var color = (this.candlesticks[this.hoveredCandlestickID].close > this.candlesticks[this.hoveredCandlestickID].open) ? this.greenColor : this.redColor;
            this.fillRect(this.mousePosition.x + 15, yPos, 10, 80, color);
            this.context.lineWidth = 2;
            this.drawRect(this.mousePosition.x + 15, yPos, 100, 80, color);
            this.context.lineWidth = 1;

            this.context.fillStyle = this.mouseHoverTextColor;
            this.context.fillText("O: " + this.candlesticks[this.hoveredCandlestickID].open, this.mousePosition.x + 30, yPos + 15);
            this.context.fillText("C: " + this.candlesticks[this.hoveredCandlestickID].close, this.mousePosition.x + 30, yPos + 35);
            this.context.fillText("H: " + this.candlesticks[this.hoveredCandlestickID].high, this.mousePosition.x + 30, yPos + 55);
            this.context.fillText("L: " + this.candlesticks[this.hoveredCandlestickID].low, this.mousePosition.x + 30, yPos + 75);
            }
            catch{
                this.fillRect(this.mousePosition.x + 15, yPos, 10, 80, color);
                this.context.lineWidth = 2;
                this.drawRect(this.mousePosition.x + 15, yPos, 100, 80, color);
                this.context.lineWidth = 1;
            }
        }
    }



    this.canvas.drawGrid = function () {
        // roughly divide the yRange into cells
        var yGridSize = (this.yRange) / this.yGridCells;

        // try to find a nice number to round to
        var niceNumber = Math.pow(10, Math.ceil(Math.log10(yGridSize)));
        if (yGridSize < 0.25 * niceNumber) niceNumber = 0.25 * niceNumber;
        else if (yGridSize < 0.5 * niceNumber) niceNumber = 0.5 * niceNumber;

        // find next largest nice number above yStart
        var yStartRoundNumber = Math.ceil(this.yStart / niceNumber) * niceNumber;
        // find next lowest nice number below yEnd
        var yEndRoundNumber = Math.floor(this.yEnd / niceNumber) * niceNumber;

        for (var y = yStartRoundNumber; y <= yEndRoundNumber; y += niceNumber) {
            this.drawLine(0, this.yToPixelCoords(y), this.width, this.yToPixelCoords(y), this.gridColor);
            var textWidth = this.context.measureText(this.roundPriceValue(y)).width;
            this.context.fillStyle = this.gridTextColor;
            this.context.fillText(this.roundPriceValue(y), this.width - textWidth - 5, this.yToPixelCoords(y) - 5);
        }

        // roughly divide the xRange into cells
        var xGridSize = (this.xRange) / this.xGridCells;

        // try to find a nice number to round to
        niceNumber = Math.pow(10, Math.ceil(Math.log10(xGridSize)));
        if (xGridSize < 0.25 * niceNumber) niceNumber = 0.25 * niceNumber;
        else if (xGridSize < 0.5 * niceNumber) niceNumber = 0.5 * niceNumber;

        // find next largest nice number above yStart
        var xStartRoundNumber = Math.ceil(this.xStart / niceNumber) * niceNumber;
        // find next lowest nice number below yEnd
        var xEndRoundNumber = Math.floor(this.xEnd / niceNumber) * niceNumber;

        // if the total x range is more than 5 days, format the timestamp as date instead of hours
        var b_formatAsDate = false;
        if (this.xRange > 60 * 60 * 24 * 1000 * 5) b_formatAsDate = true;

        for (var x = xStartRoundNumber; x <= xEndRoundNumber; x += niceNumber) {
            this.drawLine(this.xToPixelCoords(x), 0, this.xToPixelCoords(x), this.height, this.gridColor);
            var date = new Date(x);
            var dateStr = "";
            if (b_formatAsDate) {
                var day = date.getDate();
                if (day < 10) day = "0" + day;
                var month = date.getMonth() + 1;
                if (month < 10) month = "0" + month;
                dateStr = day + "." + month;
            }
            else {
                var minutes = date.getMinutes();
                if (minutes < 10) minutes = "0" + minutes;
                dateStr = date.getHours() + ":" + minutes;
            }
            this.context.fillStyle = this.gridTextColor;
            this.context.fillText(dateStr, this.xToPixelCoords(x) + 5, this.height - 5);
        }
    }



    this.canvas.calculateYRange = function () {
        for (var i = 0; i < this.candlesticks.length; ++i) {
            if (i == 0) {
                this.yStart = this.candlesticks[i].low;
                this.yEnd = this.candlesticks[i].high;
            }
            else {
                if (this.candlesticks[i].low < this.yStart) {
                    this.yStart = this.candlesticks[i].low;
                }
                if (this.candlesticks[i].high > this.yEnd) {
                    this.yEnd = this.candlesticks[i].high;
                }
            }
        }
        this.yRange = this.yEnd - this.yStart;
    }



    this.canvas.calculateXRange = function () {
        this.xStart = this.candlesticks[0].timestamp;
        this.xEnd = this.candlesticks[this.candlesticks.length - 1].timestamp;
        this.xRange = this.xEnd - this.xStart;
    }



    this.canvas.yToPixelCoords = function (y) {
        return this.height - this.marginBottom - (y - this.yStart) * this.yPixelRange / this.yRange;
    }



    this.canvas.xToPixelCoords = function (x) {
        return this.marginLeft + (x - this.xStart) * this.xPixelRange / this.xRange;
    }



    this.canvas.yToValueCoords = function (y) {
        return this.yStart + (this.height - this.marginBottom - y) * this.yRange / this.yPixelRange;
    }



    this.canvas.xToValueCoords = function (x) {
        return this.xStart + (x - this.marginLeft) * this.xRange / this.xPixelRange;
    }



    this.canvas.drawLine = function (xStart, yStart, xEnd, yEnd, color) {        
        this.context.beginPath();
        // to get a crisp 1 pixel wide line, we need to add 0.5 to the coords
        this.context.moveTo(xStart + 0.5, yStart + 0.5);
        this.context.lineTo(xEnd + 0.5, yEnd + 0.5);
        this.context.strokeStyle = color;
        this.context.stroke();
    }



    this.canvas.fillRect = function (x, y, width, height, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.rect(x, y, width, height);
        this.context.fill();
    }



    this.canvas.drawRect = function (x, y, width, height, color) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.rect(x, y, width, height);
        this.context.stroke();
    }



    this.canvas.formatDate = function (date) {
        var day = date.getDate();
        if (day < 10) day = "0" + day;
        var month = date.getMonth() + 1;
        if (month < 10) month = "0" + month;
        var hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        var minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        return day + "." + month + "." + date.getFullYear() + " - " + hours + ":" + minutes;
    }



    this.canvas.roundPriceValue = function (value) {
        if (value > 1.0) return Math.round(value * 100) / 100;
        if (value > 0.001) return Math.round(value * 1000) / 1000;
        if (value > 0.00001) return Math.round(value * 100000) / 100000;
        if (value > 0.0000001) return Math.round(value * 10000000) / 10000000;
        else return Math.round(value * 1000000000) / 1000000000;
    }
    this.canvas.draw()

    return this.canvas;
}
