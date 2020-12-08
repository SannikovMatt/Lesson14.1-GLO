'use strict';


function DomElement(selector, height, width, bg, fontSize) {



    this.selector = selector || '';
    this.height = height || '';
    this.width = width || '';
    this.bg = bg || '';
    this.fontSize = fontSize || '';
    this.p= '';
    this.div='';

}

DomElement.prototype.create = function () {

    switch (this.selector.substring(0, 1)) {
        case '.':
            let divClass = document.createElement('div');

            divClass.classList.add(`${this.selector.substring(1)}`);
            divClass.style.cssText =
                `height : ${this.height}px; 
                width : ${this.width}px ; 
            background : ${this.bg};
            font-size : ${this.fontSize}px`;


            document.body.append(divClass);
            this.div = divClass;



            break;
        case '#':
            let pId = document.createElement('p');
            pId.id = `${this.selector}`;
            pId.style.cssText =
                `height : ${this.height}px; 
                width : ${this.width}px ; 
            background : ${this.bg};
            font-size : ${this.fontSize}px`;
            document.body.append(pId);
            this.p = pId;
            break;

    }



};



let elem = new DomElement('.block', 100, 100, 'purple', 25);

elem.create();


elem.div.innerHTML = 'Text';