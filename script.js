'use strict';




function DomElement(selector, height, width, bg, fontSize) {



    this.selector = selector || '';
    this.height = height || '';
    this.width = width || '';
    this.bg = bg || '';
    this.fontSize = fontSize || '';
    this.elem = '';


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
            font-size : ${this.fontSize}px ; transition: 0.05s`;


            this.elem = divClass;
            document.addEventListener('DOMContentLoaded', () => {

                document.body.append(this.elem);

            });



            break;
        case '#':
            let pId = document.createElement('p');
            pId.id = `${this.selector}`;
            pId.style.cssText =
                `height : ${this.height}px; 
                width : ${this.width}px ; 
            background : ${this.bg};
            font-size : ${this.fontSize}px`;

            this.elem = pId;

            document.addEventListener('DOMContentLoaded', () => {

                document.body.append(this.elem);
            });
            break;

    }


    document.addEventListener('keydown', (e) => {
        let div = this.elem;
    
        switch (e.key) {
            case 'ArrowUp':
                if (parseInt(getComputedStyle(div).top) < 1) { break; }
                div.style.top = parseInt(getComputedStyle(div).top) - 10 + 'px';
                break;
            case 'ArrowDown':
                div.style.top = parseInt(getComputedStyle(div).top) + 10 + 'px';
                break;
            case 'ArrowLeft':
                if (parseInt(getComputedStyle(div).left) < 1) { break; }
                div.style.left = parseInt(getComputedStyle(div).left) - 10 + 'px';
                break;
            case 'ArrowRight':
                div.style.left = parseInt(getComputedStyle(div).left) + 10 + 'px';
                break;
    
    
    
    
        }
    
    });



};



let block = new DomElement('.block', 100, 100, 'purple', 25);
block.create();

block.elem.style.position = 'absolute';






