export class Cookify {
    _name = 'cookify';
    _expire = 365;
    _support = true;
    _svg = {
        'fingerprint': '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="stroke: black;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g id="Groß"><g><path d="M969.635,333.847c-38.408,-69.046 -82.482,-135.762 -134.394,-192.886" style="fill:none;stroke-width:37.5px;"/><path d="M96.652,777.23c-3.504,-23.042 -6.352,-45.952 -8.418,-68.563" style="fill:none;stroke-width:37.5px;"/><path d="M194.789,879.877c-65.696,-278.949 -57.582,-592.278 266.881,-674.378" style="fill:none;stroke-width:37.5px;"/><path d="M291.038,946.484c-85.568,-271.25 -109.687,-598.361 223.941,-681.959c205.693,-51.54 326.036,136.416 389.424,299.25c10.586,27.194 26.46,83.235 52.052,144.892" style="fill:none;stroke-width:37.5px;"/><path d="M386.13,985.155c-96.441,-254.92 -143.566,-563.394 145.321,-641.013c188.843,-50.738 268.2,176.448 322.586,317.095c10.626,27.479 27.451,76.67 53.806,130.615" style="fill:none;stroke-width:37.5px;"/><path d="M478.77,1000.73c-91.239,-224.009 -149.329,-491.168 44.445,-570.105c163.376,-66.555 241.42,230.468 274.541,311.603c8.481,20.775 25.307,65.304 52.495,115.631" style="fill:none;stroke-width:37.5px;"/><path d="M647.361,975.018c-45.633,-90.697 -95.854,-213.361 -81.592,-349.472c0,0 56.413,167.817 159.108,327.938" style="fill:none;stroke-width:37.5px;"/><path d="M565.769,992.444c-81.464,-177.409 -135.416,-371.667 -37.063,-456.123c115.489,-99.171 100.69,121.112 266.304,377.493" style="fill:none;stroke-width:37.5px;"/><path d="M896.526,544.142c0,0 -210.468,-498.084 -502.474,-403.16c-105.646,34.343 -201.42,96.096 -268.656,192.865" style="fill:none;stroke-width:37.5px;"/><path d="M994.756,581.846c-30.094,-77.751 -60.531,-156.994 -98.23,-218.875c-83.534,-137.116 -271.971,-412.563 -584.622,-282.388c-229.544,95.573 -278.591,344.179 -286.573,492.615" style="fill:none;stroke-width:37.5px;"/></g></g></svg>',
        'cookie': '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M902.56,452.648C928.738,473.507 961.887,485.977 997.926,485.977C1006.55,485.977 1015.01,485.263 1023.24,483.892C1023.74,493.183 1024,502.562 1024,512C1024,794.58 794.58,1024 512,1024C229.42,1024 0,794.58 0,512C0,229.42 229.42,0 512,0L512.581,0.001C516.358,51.633 538.35,98.245 572.146,133.418C566.083,148.479 562.745,164.933 562.745,182.16C562.745,253.068 619.306,310.87 689.74,312.871C684.604,326.882 681.799,342.023 681.799,357.814C681.799,429.986 740.393,488.579 812.564,488.579C847.423,488.579 879.114,474.91 902.56,452.648Z" style="fill:rgb(164,123,75);"/><path d="M902.56,452.648C928.738,473.507 961.887,485.977 997.926,485.977C1006.55,485.977 1015.01,485.263 1023.24,483.892C1023.74,493.183 1024,502.562 1024,512C1024,794.58 794.58,1024 512,1024C229.42,1024 0,794.58 0,512C0,229.42 229.42,0 512,0L512.581,0.001C516.358,51.633 538.35,98.245 572.146,133.418C566.083,148.479 562.745,164.933 562.745,182.16C562.745,253.068 619.306,310.87 689.74,312.871C684.604,326.882 681.799,342.023 681.799,357.814C681.799,429.986 740.393,488.579 812.564,488.579C847.423,488.579 879.114,474.91 902.56,452.648ZM473.915,47.379C234.429,66.758 45.833,267.528 45.833,512C45.833,769.284 254.716,978.167 512,978.167C762.981,978.167 967.902,779.394 977.79,530.792C951.546,528.158 926.798,520.411 904.552,508.562C877.758,524.96 846.256,534.413 812.564,534.413C715.097,534.413 635.966,455.282 635.966,357.814C635.966,354.93 636.035,352.062 636.179,349.211C566.815,325.39 516.911,259.559 516.911,182.16C516.911,169.146 518.326,156.459 521.007,144.247C499.077,116.003 482.807,83.142 473.915,47.379Z"/><g transform="matrix(2.30328,0,0,2.30328,-1062.33,-223.122)"><path d="M786.968,131.266C804.49,131.266 818.716,145.492 818.716,163.014C818.716,180.536 804.49,194.762 786.968,194.762C769.446,194.762 755.22,180.536 755.22,163.014C755.22,145.492 769.446,131.266 786.968,131.266ZM786.968,151.165C793.508,151.165 798.817,156.474 798.817,163.014C798.817,169.553 793.508,174.863 786.968,174.863C780.429,174.863 775.12,169.553 775.12,163.014C775.12,156.474 780.429,151.165 786.968,151.165Z"/></g><g transform="matrix(1.22746,0,0,1.22746,-142.571,144.17)"><path d="M786.968,131.266C804.49,131.266 818.716,145.492 818.716,163.014C818.716,180.536 804.49,194.762 786.968,194.762C769.446,194.762 755.22,180.536 755.22,163.014C755.22,145.492 769.446,131.266 786.968,131.266ZM786.968,168.606C783.882,168.606 781.376,166.1 781.376,163.014C781.376,159.928 783.882,157.422 786.968,157.422C790.055,157.422 792.56,159.928 792.56,163.014C792.56,166.1 790.055,168.606 786.968,168.606Z"/></g><g transform="matrix(1,0,0,1,-96.5692,-27.9542)"><circle cx="369.005" cy="607.533" r="124.523" style="fill:rgb(130,76,45);"/><path d="M369.005,483.01C437.731,483.01 493.528,538.807 493.528,607.533C493.528,676.26 437.731,732.057 369.005,732.057C300.278,732.057 244.481,676.26 244.481,607.533C244.481,538.807 300.278,483.01 369.005,483.01ZM369.005,528.843C412.435,528.843 447.695,564.103 447.695,607.533C447.695,650.963 412.435,686.223 369.005,686.223C325.574,686.223 290.314,650.963 290.314,607.533C290.314,564.103 325.574,528.843 369.005,528.843Z"/></g><g transform="matrix(1,0,0,1,-53.9873,-53.3672)"><circle cx="649.182" cy="814.013" r="81.957" style="fill:rgb(130,76,45);"/><path d="M649.182,732.057C694.415,732.057 731.139,768.78 731.139,814.013C731.139,859.247 694.415,895.97 649.182,895.97C603.949,895.97 567.226,859.247 567.226,814.013C567.226,768.78 603.949,732.057 649.182,732.057ZM649.182,777.89C669.119,777.89 685.306,794.076 685.306,814.013C685.306,833.95 669.119,850.137 649.182,850.137C629.245,850.137 613.059,833.95 613.059,814.013C613.059,794.076 629.245,777.89 649.182,777.89Z"/></g><g transform="matrix(1,0,0,1,-88.8579,-49.8887)"><circle cx="485.817" cy="394.152" r="88.858" style="fill:rgb(130,76,45);"/><path d="M485.817,305.294C534.859,305.294 574.675,345.11 574.675,394.152C574.675,443.194 534.859,483.01 485.817,483.01C436.775,483.01 396.959,443.194 396.959,394.152C396.959,345.11 436.775,305.294 485.817,305.294ZM485.817,351.127C509.563,351.127 528.841,370.406 528.841,394.152C528.841,417.898 509.563,437.176 485.817,437.176C462.071,437.176 442.792,417.898 442.792,394.152C442.792,370.406 462.071,351.127 485.817,351.127Z"/></g></svg>',
    };
    _view = {
        'info': {
            'header': 'We use Cookies',
            'text': 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
            'button': {
                'manage': 'Manage',
                'accept': 'Accept all',
            },
        },
        'manage': {
            'header': 'Manage Cookies',
            'text': 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
            'button': {
                'accept': 'Accept all',
                'save': 'Save',
            },
        },
        'button': {
            'svg': this._svg.cookie,
            'text': 'Manage cookies',
        },
    };
    _cookies = {
        'necessary' : {
            'name': 'Necessary',
            'desc': '',
        },
    };
    _powered = 'Created with <a href="https://github.com/Jersyfi/Cookify" target="_blank">Cookify</a>'
    _type = new Array;
    _viewed = 'viewed';
    _caValues = this._type.concat(this._viewed);
    
    constructor(obj = false) {
        if (Object.keys(obj).indexOf('init') != -1) {
            this.init(obj.init);
        }

        if (Object.keys(obj).indexOf('run') != -1 && obj.run === true) {
            this.run();
        }
    }

    /**
     * getViewed()
     * 
     * return the variable viewed
     */
    getViewed() {
        return this._viewed;
    }

    /**
     * getType()
     * 
     * return the variable type
     */
    getType() {
        return this._type;
    }

    /**
     * getOnlyNecassary()
     * 
     * return if only necessary is selected
     * 
     * @return {boolean}
     */
    getOnlyNecassary() {
        var size = 0;

        for (const key in this._cookies) {
            if (this._cookies.hasOwnProperty(key)) {
                size++;
            }
        }
        
        if (size > 1) {
            return false;
        }

        return true;
    }

    /**
     * init()
     * 
     * For initializing cookify with custom values
     * 
     * @param {any} obj 
     */
    init(obj) {
        try {
            for (const type in obj) {
                const element = obj[type];
                
                switch (type) {
                    case 'name':
                        this.initName(element, type);
                        break;

                    case 'expire':
                        this.initExpire(element, type);
                        break;

                    case 'support':
                        this.initExpire(element, type);
                        break;

                    case 'view':
                        this.checkType('object', element, type);

                        for (const viewType in element) {
                            const content = element[viewType];
                            
                            switch (viewType) {
                                case 'info':
                                    this.initViewInfo(content, viewType);
                                    break;

                                case 'manage':
                                    this.initViewManage(content, viewType);
                                    break;

                                case 'button':
                                    this.initViewButton(content, viewType);
                                    break;
                            
                                default:
                                    throw 'Unknown Property Name -> \'' + viewType + '\'';
                                    break;
                            }
                        }
                        break;

                    case 'cookies':
                        this.initCookies(element, type);
                        
                        break;

                    default:
                        throw 'Unknown Property Name -> \'' + type + '\'';
                        break;
                }
            }
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initName()
     * 
     * For initializing cookify name with custom values
     * 
     * @param {any} string
     * @param {any} type
     */
    initName(string, type = 'name') {
        try {
            this._name = this.checkType('string', string, type);
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initExpire()
     * 
     * For initializing cookify expire with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initExpire(string, type = 'expire') {
        try {
            this._expire = this.checkType('number', string, type);
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initName()
     * 
     * For initializing cookify support with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initSupport(string, type = 'support') {
        try {
            this._support = this.checkType('boolean', string, type);
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initViewInfo()
     * 
     * For initializing cookify info with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initViewInfo(obj, type = 'info') {
        try {
            if (obj === false) {
                this._view.info = false;
            } else {
                this.checkType('object', obj, type);

                for (const infoType in obj) {
                    const infoContent = obj[infoType];
                    
                    switch (infoType) {
                        case 'header':
                            this._view.info.header = infoContent;
                            break;
        
                        case 'text':
                            this._view.info.text = infoContent;
                            break;
        
                        case 'button':
                            this.checkType('object', infoContent, infoType);
        
                            this._view.info.button = new Object;
        
                            for (const buttonType in infoContent) {
                                const buttonContent = infoContent[buttonType];
                                
                                if (['manage', 'accept', 'reject'].indexOf(buttonType) != -1) {
                                    this._view.info.button[buttonType] = this.checkType('string', buttonContent, buttonType);
                                } else {
                                    throw 'Unknown Property Name -> \'' + buttonType + '\'\n`manage´, `accept´ or `reject´ is expected';
                                }
                            }
                            break;
                    
                        default:
                            throw 'Unknown Property Name -> \'' + infoType + '\'';
                            break;
                    }
                }
            }
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initViewManage()
     * 
     * For initializing cookify manage with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initViewManage(obj, type = 'manage') {
        try {
            if (obj === false) {
                this._view.manage = false;
            } else {
                this.checkType('object', obj, type);

                for (const manageType in obj) {
                    const manageContent = obj[manageType];
                    
                    switch (manageType) {
                        case 'header':
                            this._view.manage.header = manageContent;
                            break;
        
                        case 'text':
                            this._view.manage.text = manageContent;
                            break;
        
                        case 'button':
                            this.checkType('object', manageContent, manageType);
        
                            this._view.manage.button = new Object;
        
                            for (const buttonType in manageContent) {
                                const buttonContent = manageContent[buttonType];
        
                                if (['accept', 'reject', 'save'].indexOf(buttonType) != -1) {
                                    this._view.manage.button[buttonType] = this.checkType('string', buttonContent, buttonType);
                                } else {
                                    throw 'Unknown Property Name -> \'' + buttonType + '\'\n`accept´, `reject´ or `save´ is expected';
                                }
                            }
                            break;
                    
                        default:
                            throw 'Unknown Property Name -> \'' + manageType + '\'';
                            break;
                    }
                }
            }
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initViewButton()
     * 
     * For initializing cookify button with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initViewButton(obj, type = 'button') {
        try {
            if (obj === false) {
                this._view.button = false;
            } else {
                this.checkType('object', obj, type);

                for (const buttonType in obj) {
                    const buttonContent = obj[buttonType];
                    
                    switch (buttonType) {                
                        case 'svg':
                            switch (buttonContent) {
                                case 'cookie':
                                    this._view.button.svg = this._svg.cookie;
                                    break;
        
                                case 'fingerprint':
                                    this._view.button.svg = this._svg.fingerprint;
                                    break;
                            
                                default:
                                    this._view.button.svg = this.checkType('string', buttonContent, buttonType);
                                    break;
                            }
                            break;
        
                        case 'text':
                            this._view.button.text = this.checkType('string', buttonContent, buttonType);
                            break;
                    
                        default:
                            throw 'Unknown Property Name -> \'' + buttonType + '\'';
                            break;
                    }
                }
            }
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * initCookies()
     * 
     * For initializing cookify button with custom values
     * 
     * @param {any} obj
     * @param {any} type
     */
    initCookies(obj, type = 'cookies') {
        try {
            this.checkType('object', obj, type);

            for (const cookiesType in obj) {
                const content = obj[cookiesType];

                this._cookies[cookiesType] = new Object;
                this.checkType('object', content, cookiesType);

                for (const contentType in content) {
                    const value = content[contentType];

                    switch (contentType) {
                        case 'name':
                            this._cookies[cookiesType].name = this.checkType('string', value, contentType);
                            break;

                        case 'desc':
                            this._cookies[cookiesType].desc = this.checkType('string', value, contentType);
                            break;
                    
                        default:
                            throw 'Unknown Property Name -> \'' + contentType + '\'';
                            break;
                    }
                }
            }

            for (const cookiesType in this._cookies) {
                if (cookiesType != 'necessary') {
                    this._type.push(cookiesType);
                }
            }

            this._caValues = this._type.concat(this._viewed);
        } catch (error) {
            console.log('An Error occured in your initialization\n' + error);
        }
    }

    /**
     * checkType()
     * 
     * checking the type of an value and throws an error if incorrect
     * 
     * @param {typeof} typeof
     * @param {any} value
     * @param {any} type
     * @returns {value}
     * @throws {error}
     */
    checkType(typeOf, value, type) {
        if (typeof value == typeOf) {
            return value;
        } else {
            throw 'Wrong Property Value -> \'' + type + '\': ' + value + '\n`' + typeOf + '´ is expected';
        }
    }

    /**
     * run()
     * 
     * start the application
     */
    run() {
        this.htmlButton();
        this.htmlModalInfo();
        this.htmlModalManage();
        this.htmlEvents();

        this.checkCookie();

        // When not viewd jet show cookie info and create cookies for that
        if (this.getCookieState(this._viewed)) {
            if (!this.getOnlyNecassary()) {
                this._type.forEach(element => {
                    if (this.getCookieState(element)) {
                        this.changeScriptType(element, "js");
                        document.getElementById("cookieCheck" + this.ucfirst(element)).checked = "checked";
                    }
                });
            }
        } else {
            this.modalChange("cookieModalInfo", "show");
        }
    }

    /**
     * htmlButton()
     * 
     * create the cookie button
     */
    htmlButton() {
        if (this._view.button === false) {
            return false;
        }

        var button = document.createElement("button"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        span = document.createElement("span");

        button.className = "cookify btn btn-lg shadow rounded-pill fixed-bottom float-left m-3 p-1 d-flex align-items-center";
        button.style.backgroundColor = '#007bff';
        button.style.lineHeight = '1rem';
        button.id = "cookieButton";
        button.style.color = '#000000';
        button.style.fontSize = '1rem';

        if (this._view.button.svg != '') {
            div1.style.width = '25px';
            div1.style.height = 'auto';
            div1.style.lineHeight = "0";
            div1.innerHTML = this._view.button.svg;

            button.appendChild(div1);
        }

        if (this._view.button.svg != "" && this._view.button.text != "") {
            div2.className = "cookie-btn-text d-none";
            span.className = "mx-2 ";
        }

        if (this._view.button.text != '') {
            div2.style.lineHeight = '1rem';
            span.innerText = this._view.button.text;

            div2.appendChild(span);
            button.appendChild(div2);
        }

        document.body.appendChild(button);
    }

    /**
     * htmlModalInfo()
     * 
     * create the cookie modal info
     */
    htmlModalInfo() {
        if (this._view.info === false) {
            return false;
        }

        var div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        div4 = document.createElement("div"),
        div5 = document.createElement("div"),
        div6 = document.createElement("div"),
        div6 = document.createElement("div"),
        div7 = document.createElement("div"),
        div8 = document.createElement("div"),
        h4 = document.createElement("h4"),
        p1 = document.createElement("p"),
        p2 = document.createElement("p");

        div1.className = "cookify modal d-none";
        div1.id = "cookieModalInfo";
        div2.className = 'modal-dialog';
        div3.className = "modal-content";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = this._view.info.header;
        div5.className = "modal-body py-0";
        p1.innerHTML = this._view.info.text;
        div6.className = "modal-footer border-0";
        div7.className = "container-fluid px-0";
        div8.className = "row";

        // Buttons
        for (const buttonType in this._view.info.button) {
            if (this._view.info.button.hasOwnProperty(buttonType)) {
                var buttonDiv = document.createElement("div"),
                button = document.createElement("button");

                buttonDiv.className = 'col-sm-12 col-md mb-1';
                button.type = "button";
                button.className = "btn btn-block btn-secondary";
                button.id = "cookieButtonInfo" + this.ucfirst(buttonType);
                button.innerText = this._view.info.button[buttonType];

                buttonDiv.appendChild(button);
                div8.appendChild(buttonDiv);
            }
        }
        
        div7.appendChild(div8);
        div6.appendChild(div7);

        if (this._support) {
            p2.innerHTML = '<small>' + this._powered + '</small>';
            div6.appendChild(p2);
        }

        div5.appendChild(p1);
        div4.appendChild(h4);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        document.body.appendChild(div1);
    }

    /**
     * htmlModalManage()
     * 
     * create the cookie modal manage
     */
    htmlModalManage() {
        if (this._view.manage === false) {
            return false;
        }

        var div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        div4 = document.createElement("div"),
        div5 = document.createElement("div"),
        div6 = document.createElement("div"),
        div7 = document.createElement("div"),
        div8 = document.createElement("div"),
        h4 = document.createElement("h4"),
        p1 = document.createElement("p"),
        p2 = document.createElement("p"),
        button = document.createElement("button");

        div1.className = "cookify modal d-none";
        div1.id = "cookieModalManage";
        div2.className = 'modal-dialog';
        div3.className = "modal-content";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = this._view.manage.header;
        div5.className = "modal-body py-0";
        p1.innerHTML = this._view.manage.text;

        div4.appendChild(h4);
        div3.appendChild(div4);
        div5.appendChild(p1);

        // Checkboxes
        for (const setting in this._cookies) {
            if (this._cookies.hasOwnProperty(setting)) {
                const settingValue = this._cookies[setting];
                var divCheckbox = document.createElement("div"),
                inputCheckbox = document.createElement("input"),
                labelCheckbox = document.createElement("label"),
                h5Checkbox = document.createElement("h5"),
                pCheckbox = document.createElement("p");

                divCheckbox.className = "custom-control custom-checkbox";
                inputCheckbox.className = "custom-control-input";
                inputCheckbox.type = "checkbox";
                inputCheckbox.value = "";
                inputCheckbox.id = "cookieCheck" + this.ucfirst(setting);
                labelCheckbox.className = "custom-control-label";
                labelCheckbox.htmlFor = "cookieCheck" + this.ucfirst(setting);
                h5Checkbox.className = "text-dark";
                pCheckbox.className = "text-dark";
                pCheckbox.innerText = "";

                if (setting == "necessary") {
                    inputCheckbox.disabled = "disabled";
                    inputCheckbox.checked = "checked";
                }

                for (const inner in settingValue) {
                    if (settingValue.hasOwnProperty(inner)) {
                        const value = settingValue[inner];
                        
                        switch (inner) {
                            case 'name':
                                h5Checkbox.innerText = value;
                                break;

                            case 'desc':
                                pCheckbox.innerText = value;
                                break;
                        
                            default:
                                break;
                        }
                    }
                }

                labelCheckbox.appendChild(h5Checkbox);

                if (pCheckbox.innerText != '') {
                    labelCheckbox.appendChild(pCheckbox);
                }
                
                divCheckbox.appendChild(inputCheckbox);
                divCheckbox.appendChild(labelCheckbox);
                div5.appendChild(divCheckbox);
            }
        }

        div6.className = "modal-footer border-0 float-left";
        div7.className = "container-fluid px-0";
        div8.className = "row";

        for (const buttonType in this._view.manage.button) {
            if (this._view.manage.button.hasOwnProperty(buttonType)) {
                var buttonDiv = document.createElement("div"),
                button = document.createElement("button");

                buttonDiv.className = 'col-sm-12 col-md mb-1';
                button.type = 'button';
                button.className = 'btn btn-block btn-secondary';
                button.id = 'cookieButtonManage' + this.ucfirst(buttonType);
                button.innerText = this._view.manage.button[buttonType];

                buttonDiv.appendChild(button);
                div8.appendChild(buttonDiv);
            }
        }

        div7.appendChild(div8);
        div6.appendChild(div7);

        if (this._support) {
            p2.innerHTML = '<small>' + this._powered + '</small>';
            div6.appendChild(p2);
        }
        
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        document.body.appendChild(div1);
    }

    /**
     * htmlEvents()
     * 
     * create the cookie button events
     * Events need to rework (inline events are necessary)
     */
    htmlEvents() {
        // Open Modal
        if (document.getElementById("cookieButton")) {
            document.getElementById("cookieButton").addEventListener("click", function() {
                cookify.modalChange("cookieModalManage", "show");
            });
        }

        // Checkboxes
        if (this.getOnlyNecassary() === false) {
            this._type.forEach(element => {
                if (document.getElementById("cookieCheck" + this.ucfirst(element))) {
                    document.getElementById("cookieCheck" + this.ucfirst(element)).addEventListener("click", function() {
                        if (cookify.getCookieState(element)) {
                            cookify.changeCookieState(element, "false");
                        } else {
                            cookify.changeCookieState(element, "true");
                        }
                    });  
                }
            });
        }

        // Buttons
        ["Info", "Manage"].forEach(element => {
            if (document.getElementById("cookieButton" + element + "Manage")) {
                document.getElementById("cookieButton" + element + "Manage").addEventListener("click", function() {
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalManage", "show");
                });
            }
    
            if (document.getElementById("cookieButton" + element + "Accept")) {
                document.getElementById("cookieButton" + element + "Accept").addEventListener("click", function() {                    
                    cookify.changeCookieState(cookify.getViewed(), "true");
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalManage", "hide");
    
                    if (cookify.getOnlyNecassary() === false) {
                        cookify.getType().forEach(type => {
                            document.getElementById("cookieCheck" + cookify.ucfirst(type)).checked = "checked";
                            cookify.changeCookieState(type, "true");
                            cookify.changeScriptType(type, "js");
                        });
                    }
                });
            }
    
            if (document.getElementById("cookieButton" + element + "Reject")) {
                document.getElementById("cookieButton" + element + "Reject").addEventListener("click", function() {                    
                    cookify.changeCookieState(cookify.getViewed(), "true");
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalManage", "hide");
    
                    if (cookify.getOnlyNecassary() === false) {
                        cookify.getType().forEach(type => {
                            document.getElementById("cookieCheck" + cookify.ucfirst(type)).checked = false;
                            cookify.changeCookieState(type, "false");
                            cookify.changeScriptType(type, "plain");
                        });
                    }
                });
            }
    
            if (document.getElementById("cookieButton" + element + "Save")) {
                document.getElementById("cookieButton" + element + "Save").addEventListener("click", function() {
                    cookify.changeCookieState(cookify.getViewed(), "true");
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalManage", "hide");
            
                    if (cookify.getOnlyNecassary() === false) {
                        cookify.getType().forEach(element => {
                            if (cookify.getCookieState(element)) {
                                cookify.changeScriptType(element, "js");
                            } else {
                                cookify.changeScriptType(element, "plain");
                            }
                        });
                    }
                });
            }
        });
    }

    /**
     * setCookie()
     * 
     * cookies can be set here
     * 
     * @param {any} cookieValue
     */
    setCookie(cookieValue) {
        var d = new Date();

        d.setTime(d.getTime() + (this._expire * 24 * 60 * 60 * 1000));

        var expires = "expires=" + d.toUTCString();

        document.cookie = this._name + "=" + btoa(JSON.stringify(cookieValue)) + ";" + expires + ";path=/" + ";SameSite=Lax";
    }

    /**
     * getCookie()
     * 
     * cookies can be get here
     * 
     * @param {any} cookieName 
     */
    getCookie() {
        var name = this._name + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return JSON.parse(atob(c.substring(name.length, c.length)));
            }
        }
        return "";
    }

    /**
     * createCookie()
     * 
     * create the cookie for cookify
     */
    createCookie() {
        var ca = {};

        this._caValues.forEach(value => {
            ca[value] = false;
        });

        this.setCookie(ca);
    }

    /**
     * checkCookie()
     * 
     * For checking if the cookie is set correct
     */
    checkCookie() {
        var cookie = this.getCookie();

        if (cookie != '' && typeof cookie == 'object') {
            this._caValues.forEach(value => {
                if (Object.keys(cookie).indexOf(value) == -1) {
                    this.createCookie();
                }
            });
        } else {
            this.createCookie();
        }
    }

    /**
     * changeCookieState()
     * 
     * A cookie state can be changed to false or true
     * 
     * @param {any} type 
     * @param {["true", "false"]} value
     */
    changeCookieState(type, value) {
        var ca = this.getCookie();

        for (const key in ca) {
            if (ca.hasOwnProperty(key)) {
                if (key == type) {
                    if (value == "true") {
                        ca[key] = true;
                    } else {
                        ca[key] = false;
                    }
                }
            }
        }

        this.setCookie(ca);
    }
    
    /**
     * getCookieState()
     * 
     * read a cookie state
     * 
     * @param {any} type 
     */
    getCookieState(type) {
        var ca = this.getCookie();

        for (const key in ca) {
            if (ca.hasOwnProperty(key)) {
                if (key == type) {
                    if (ca[key] === true) {
                        return true;
                    } else {
                        return false;
                    }
                    
                }
            }
        }
    }

    /**
     * changeScriptType()
     * 
     * Any Script type can be changed from text/plain
     * and text/javascript and back
     * 
     * @param {any} cookieType
     * @param {["js", "plain"]} type
     */
    changeScriptType(cookieType, type) {
        var elements = document.getElementsByTagName("script");

        for (const i in elements) {
            if (elements.hasOwnProperty(i)) {
                const element = elements[i];

                if (element.hasAttribute(this._name)) {
                    if (element.getAttribute(this._name) == cookieType) {
                        if (element.hasAttribute("type")) {
                            if (type == "js") {
                                var tmp = document.createElement('script');
                                for (var j = 0; j< element.attributes.length; j++) {
                                    tmp.setAttribute(element.attributes[j].name, element.attributes[j].value);
                                }
                                var parent = element.parentNode;
                                element.remove();
                                tmp.setAttribute("type", "text/javascript");
                                parent.appendChild(tmp)
                            } else {
                                element.setAttribute("type", "text/plain");
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * modalChange()
     * 
     * modal visibility can be changed
     * 
     * @param {any} id 
     * @param {["hide", "show"]} mode
     */
    modalChange(id, mode) {
        switch (mode) {
            case "show":
                document.getElementById(id).classList.add("d-block");
                document.getElementById(id).classList.remove("d-none");
                document.getElementById(id).classList.add("show");
                break;

            case "hide":
                document.getElementById(id).classList.remove("show");
                document.getElementById(id).classList.remove("d-block");
                document.getElementById(id).classList.add("d-none");
                break;

            default:
                break;
        }
    }

    /**
     * ucfirst()
     * 
     * Uppercase the first letter of any string
     * 
     * @param {any} string
     */
    ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
