export class Cookify {
    constructor() {
        this.name = "cookify";
        this.expire = 365;
        this.support = true;
        this.view = {
            "info": {
                "header": "We use Cookies",
                "text": 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
                "position": "modal-dialog modal-dialog-centered fixed-top",
                "button": {
                    "settings": {
                        "text": "Manage",
                        "background-color": "btn-secondary",
                        "position" : "col-sm-12 col-md mb-1",
                    },
                    "accept": {
                        "text": "Accept all",
                        "background-color": "btn-primary",
                        "position" : "col-sm-12 col-md mb-1",
                    },
                },
            },
            "settings": {
                "header": "Manage Cookies",
                "text": 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
                "position": "modal-dialog modal-dialog-centered fixed-top",
                "button": {
                    "accept": {
                        "text": "Accept all",
                        "background-color": "btn-secondary",
                        "position" : "col-sm-12 col-md mb-1",
                    },
                    "save": {
                        "text": "Save",
                        "background-color": "btn-primary",
                        "position" : "col-sm-12 col-md mb-1",
                    },
                },
            },
            "button": {
                "dimension": "25px",
                "background-color": "#007bff",
                "color": "black",
                "svg": '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="stroke: black;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g id="Groß"><g><path d="M969.635,333.847c-38.408,-69.046 -82.482,-135.762 -134.394,-192.886" style="fill:none;stroke-width:37.5px;"/><path d="M96.652,777.23c-3.504,-23.042 -6.352,-45.952 -8.418,-68.563" style="fill:none;stroke-width:37.5px;"/><path d="M194.789,879.877c-65.696,-278.949 -57.582,-592.278 266.881,-674.378" style="fill:none;stroke-width:37.5px;"/><path d="M291.038,946.484c-85.568,-271.25 -109.687,-598.361 223.941,-681.959c205.693,-51.54 326.036,136.416 389.424,299.25c10.586,27.194 26.46,83.235 52.052,144.892" style="fill:none;stroke-width:37.5px;"/><path d="M386.13,985.155c-96.441,-254.92 -143.566,-563.394 145.321,-641.013c188.843,-50.738 268.2,176.448 322.586,317.095c10.626,27.479 27.451,76.67 53.806,130.615" style="fill:none;stroke-width:37.5px;"/><path d="M478.77,1000.73c-91.239,-224.009 -149.329,-491.168 44.445,-570.105c163.376,-66.555 241.42,230.468 274.541,311.603c8.481,20.775 25.307,65.304 52.495,115.631" style="fill:none;stroke-width:37.5px;"/><path d="M647.361,975.018c-45.633,-90.697 -95.854,-213.361 -81.592,-349.472c0,0 56.413,167.817 159.108,327.938" style="fill:none;stroke-width:37.5px;"/><path d="M565.769,992.444c-81.464,-177.409 -135.416,-371.667 -37.063,-456.123c115.489,-99.171 100.69,121.112 266.304,377.493" style="fill:none;stroke-width:37.5px;"/><path d="M896.526,544.142c0,0 -210.468,-498.084 -502.474,-403.16c-105.646,34.343 -201.42,96.096 -268.656,192.865" style="fill:none;stroke-width:37.5px;"/><path d="M994.756,581.846c-30.094,-77.751 -60.531,-156.994 -98.23,-218.875c-83.534,-137.116 -271.971,-412.563 -584.622,-282.388c-229.544,95.573 -278.591,344.179 -286.573,492.615" style="fill:none;stroke-width:37.5px;"/></g></g></svg>',
                "text": "Manage cookies",
                "font-size": "1rem",
                "line-height": "1rem",
            },
        };
        this.cookies = {
            "necessary" : {
                "name": "Necessary",
                "desc": "",
            },
        };
        this.powered = 'Created with <a href="https://github.com/Jersyfi/Cookify" target="_blank">Cookify</a>'
        this.type = new Array;
        this.viewed = "viewed";
        this.caValues = this.type.concat(this.viewed);
    }

    getViewed() {
        return this.viewed;
    }

    getType() {
        return this.type;
    }

    getOnlyNecassary() {
        var size = 0;

        for (const key in this.cookies) {
            if (this.cookies.hasOwnProperty(key)) {
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
        for (const type in obj) {
            if (obj.hasOwnProperty(type)) {
                const element = obj[type];
                
                switch (type) {
                    case "name":
                        this.name = element;
                        break;

                    case "expire":
                        this.expire = element;
                        break;

                    case "support":
                        this.support = element;

                    case "view":
                        for (const viewType in element) {
                            if (element.hasOwnProperty(viewType)) {
                                const content = element[viewType];
                                
                                switch (viewType) {
                                    case "info":
                                        for (const infoType in content) {
                                            if (content.hasOwnProperty(infoType)) {
                                                const infoContent = content[infoType];
                                                
                                                switch (infoType) {
                                                    case "header":
                                                        this.view["info"]["header"] = infoContent;
                                                        break;

                                                    case "text":
                                                        this.view["info"]["text"] = infoContent;
                                                        break;

                                                    case "position":
                                                        switch (infoContent) {
                                                            case "top-full":
                                                                this.view["info"]["position"] = "modal-dialog modal-xl fixed-top";
                                                                break;

                                                            case "bottom-full":
                                                                this.view["info"]["position"] = "modal-dialog modal-xl fixed-bottom";
                                                                break;

                                                            case "bottom-left":
                                                                this.view["info"]["position"] = "modal-dialog modal-sm fixed-bottom float-left m-sm-2";
                                                                break;

                                                            case "middle":
                                                                this.view["info"]["position"] = "modal-dialog modal-dialog-centered fixed-top";
                                                                break;
                                                        
                                                            default:
                                                                console.log("'" + infoContent + "' no valid init");
                                                                break;
                                                        }
                                                        break;

                                                    case "button":
                                                        this.view["settings"]["button"] = new Object;

                                                        for (const buttonType in infoContent) {
                                                            if (infoContent.hasOwnProperty(buttonType)) {
                                                                const buttonContent = infoContent[buttonType];

                                                                this.view["info"]["button"][buttonType] = new Object;
                                                                
                                                                for (const buttonInnerType in buttonContent) {
                                                                    if (buttonContent.hasOwnProperty(buttonInnerType)) {
                                                                        const buttonInnerContent = buttonContent[buttonInnerType];
                                                                        
                                                                        switch (buttonInnerType) {
                                                                            case "text":
                                                                                this.view["info"]["button"][buttonType]["text"] = buttonInnerContent;
                                                                                break;

                                                                            case "background-color":
                                                                                this.view["info"]["button"][buttonType]["background-color"] = buttonInnerContent;
                                                                                break;

                                                                            case "position":
                                                                                switch (buttonInnerContent) {
                                                                                    case "full":
                                                                                        this.view["info"]["button"][buttonType]["position"] = "col-12 px-0 mb-1";
                                                                                        break;
                                                                                
                                                                                    default:
                                                                                        console.log("'" + buttonInnerContent + "' no valid init");
                                                                                        break;
                                                                                }
                                                                                break;
                                                                        
                                                                            default:
                                                                                console.log("'" + buttonInnerType + "' no valid init");
                                                                                break;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        break;
                                                
                                                    default:
                                                        console.log("'" + infoType + "' no valid init");
                                                        break;
                                                }
                                            }
                                        }
                                        break;

                                    case "settings":
                                    for (const settingsType in content) {
                                            if (content.hasOwnProperty(settingsType)) {
                                                const settingsContent = content[settingsType];
                                                
                                                switch (settingsType) {
                                                    case "header":
                                                        this.view["settings"]["header"] = settingsContent;
                                                        break;

                                                    case "text":
                                                        this.view["settings"]["text"] = settingsContent;
                                                        break;

                                                    case "position":
                                                        switch (settingsContent) {
                                                            case "top-full":
                                                                this.view["settings"]["position"] = "modal-dialog modal-xl fixed-top";
                                                                break;

                                                            case "bottom-full":
                                                                this.view["settings"]["position"] = "modal-dialog modal-xl fixed-bottom";
                                                                break;

                                                            case "bottom-left":
                                                                this.view["settings"]["position"] = "modal-dialog modal-sm fixed-bottom float-left m-sm-2";
                                                                break;

                                                            case "middle":
                                                                this.view["settings"]["position"] = "modal-dialog modal-dialog-centered fixed-top";
                                                                break;
                                                        
                                                            default:
                                                                console.log("'" + settingsContent + "' no valid init");
                                                                break;
                                                        }
                                                        break;

                                                    case "button":
                                                        this.view["settings"]["button"] = new Object;

                                                        for (const buttonType in settingsContent) {
                                                            if (settingsContent.hasOwnProperty(buttonType)) {
                                                                const buttonContent = settingsContent[buttonType];

                                                                this.view["settings"]["button"][buttonType] = new Object;
                                                                
                                                                for (const buttonInnerType in buttonContent) {
                                                                    if (buttonContent.hasOwnProperty(buttonInnerType)) {
                                                                        const buttonInnerContent = buttonContent[buttonInnerType];
                                                                        
                                                                        switch (buttonInnerType) {
                                                                            case "text":
                                                                                this.view["settings"]["button"][buttonType]["text"] = buttonInnerContent;
                                                                                break;

                                                                            case "background-color":
                                                                                this.view["settings"]["button"][buttonType]["background-color"] = buttonInnerContent;
                                                                                break;

                                                                            case "position":
                                                                                switch (buttonInnerContent) {
                                                                                    case "full":
                                                                                        this.view["settings"]["button"][buttonType]["position"] = "col-12 px-0 mb-1";
                                                                                        break;
                                                                                
                                                                                    default:
                                                                                        console.log("'" + buttonInnerContent + "' no valid init");
                                                                                        break;
                                                                                }
                                                                                break;
                                                                        
                                                                            default:
                                                                                console.log("'" + buttonInnerType + "' no valid init");
                                                                                break;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        break;
                                                
                                                    default:
                                                        console.log("'" + settingsType + "' no valid init");
                                                        break;
                                                }
                                            }
                                        }
                                        break;

                                    case "button":
                                        for (const buttonType in content) {
                                            if (content.hasOwnProperty(buttonType)) {
                                                const buttonContent = content[buttonType];
                                                
                                                switch (buttonType) {
                                                    case "dimension":
                                                        this.view["button"]["dimension"] = buttonContent;
                                                        break;
                
                                                    case "background-color":
                                                        this.view["button"]["background-color"] = buttonContent;
                                                        break;
                
                                                    case "color":
                                                        this.view["button"]["color"] = buttonContent;
                                                        break;
                
                                                    case "svg":
                                                        this.view["button"]["svg"] = buttonContent;
                                                        break;
                
                                                    case "text":
                                                        this.view["button"]["text"] = buttonContent;
                                                        break;
                
                                                    case "font-size":
                                                        this.view["button"]["font-size"] = buttonContent;
                                                        break;
                
                                                    case "line-height":
                                                        this.view["button"]["line-height"] = buttonContent;
                                                        break;
                                                
                                                    default:
                                                        console.log("'" + buttonType + "' no valid init");
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                
                                    default:
                                        console.log("'" + viewType + "' no valid init");
                                        break;
                                }
                            }
                        }
                        break;

                    case "cookies":
                        for (const cookiesType in element) {
                            if (element.hasOwnProperty(cookiesType)) {
                                const content = element[cookiesType];

                                this.cookies[cookiesType] = new Object;

                                for (const contentType in content) {
                                    if (content.hasOwnProperty(contentType)) {
                                        const value = content[contentType];
                                        
                                        this.cookies[cookiesType][contentType] = value;
                                    }
                                }
                            }
                        }

                        for (const cookiesType in this.cookies) {
                            if (this.cookies.hasOwnProperty(cookiesType)) {
                                if (cookiesType != "necessary") {
                                    this.type.push(cookiesType);
                                }
                            }
                        }

                        this.caValues = this.type.concat(this.viewed);
                        break;

                    default:
                        console.log("'" + type + "' no valid init");
                        break;
                }
            }
        }

        this.HtmlButton();
        this.HtmlModalInfo();
        this.HTMLModalSettings();
        this.HTMLModalEvents();

        // When Cookie is set Wrong create new
        if (!this.isCookieSetCorrect()) {
            this.createCookie();
        }

        // When not viewd jet show cookie info and create cookies for that
        if (this.getCookieState(this.viewed)) {
            if (!this.getOnlyNecassary()) {
                this.type.forEach(element => {
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
     * HtmlButton()
     * 
     * create the cookie button
     */
    HtmlButton() {
        var button = document.createElement("button"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        span = document.createElement("span");

        button.className = "btn btn-lg shadow rounded-pill fixed-bottom float-left m-3 p-1 d-flex align-items-center";
        button.style.backgroundColor = this.view["button"]["background-color"];
        button.style.lineHeight = this.view["button"]["line-height"];
        button.id = "cookieButton";
        button.style.color = this.view["button"]["color"];
        button.style.fontSize = this.view["button"]["font-size"];

        if (this.view["button"]["svg"] != "") {
            div1.style.width = this.view["button"]["dimension"];
            div1.style.height = "auto";
            div1.style.lineHeight = "0";
            div1.innerHTML = this.view["button"]["svg"];

            button.appendChild(div1);
        }

        if (this.view["button"]["svg"] != "" && this.view["button"]["text"] != "") {
            var style = document.createElement("style");

            div2.className = "cookie-btn-text d-none";
            span.className = "mx-2 ";
            style.innerText = "#cookieButton:hover .cookie-btn-text { display: block!important; }";

            document.head.appendChild(style);
        }

        if (this.view["button"]["text"] != "") {
            div2.style.lineHeight = this.view["button"]["line-height"];
            span.innerText = this.view["button"]["text"];

            div2.appendChild(span);
            button.appendChild(div2);
        }

        document.body.appendChild(button);
    }

    /**
     * HtmlModalInfo()
     * 
     * create the cookie modal info
     */
    HtmlModalInfo() {
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

        div1.className = "modal d-none";
        div1.id = "cookieModalInfo";
        div2.className = this.view["info"]["position"];
        div3.className = "modal-content shadow border-0 p-3";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = this.view["info"]["header"];
        div5.className = "modal-body py-0";
        p1.innerHTML = this.view["info"]["text"];
        div6.className = "modal-footer border-0";
        div7.className = "container-fluid px-0";
        div8.className = "row";

        // Buttons
        for (const buttonType in this.view["info"]["button"]) {
            if (this.view["info"]["button"].hasOwnProperty(buttonType)) {
                var buttonDiv = document.createElement("div"),
                button = document.createElement("button");

                buttonDiv.className = this.view["info"]["button"][buttonType]["position"];
                button.type = "button";
                button.className = "btn btn-block";
                button.classList.add(this.view["info"]["button"][buttonType]["background-color"]);
                button.id = "cookieButtonInfo" + this.ucfirst(buttonType);
                button.innerText = this.view["info"]["button"][buttonType]["text"];

                buttonDiv.appendChild(button);
                div8.appendChild(buttonDiv);
            }
        }
        
        div7.appendChild(div8);
        div6.appendChild(div7);

        if (this.support) {
            p2.innerHTML = "<small>" + this.powered + "</small>";
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
     * HTMLModalSettings()
     * 
     * create the cookie modal settings
     */
    HTMLModalSettings() {
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

        div1.className = "modal d-none";
        div1.id = "cookieModalSettings";
        div2.className = this.view["settings"]["position"];
        div3.className = "modal-content shadow border-0 p-3";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = this.view["settings"]["header"];
        div5.className = "modal-body py-0";
        p1.innerHTML = this.view["settings"]["text"];

        div4.appendChild(h4);
        div3.appendChild(div4);
        div5.appendChild(p1);

        // Checkboxes
        for (const setting in this.cookies) {
            if (this.cookies.hasOwnProperty(setting)) {
                const settingValue = this.cookies[setting];
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
                            case "name":
                                h5Checkbox.innerText = value;
                                break;

                            case "desc":
                                pCheckbox.innerText = value;
                                break;
                        
                            default:
                                break;
                        }
                    }
                }

                labelCheckbox.appendChild(h5Checkbox);

                if (pCheckbox.innerText != "") {
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

        for (const buttonType in this.view["settings"]["button"]) {
            if (this.view["settings"]["button"].hasOwnProperty(buttonType)) {
                var buttonDiv = document.createElement("div"),
                button = document.createElement("button");

                buttonDiv.className = this.view["settings"]["button"][buttonType]["position"];
                button.type = "button";
                button.className = "btn btn-block";
                button.classList.add(this.view["settings"]["button"][buttonType]["background-color"]);
                button.id = "cookieButtonSettings" + this.ucfirst(buttonType);
                button.innerText = this.view["settings"]["button"][buttonType]["text"];

                buttonDiv.appendChild(button);
                div8.appendChild(buttonDiv);
            }
        }

        div7.appendChild(div8);
        div6.appendChild(div7);

        if (this.support) {
            p2.innerHTML = "<small>" + this.powered + "</small>";
            div6.appendChild(p2);
        }
        
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        document.body.appendChild(div1);
    }

    /**
     * HTMLModalEvents()
     * 
     * create the cookie button events
     */
    HTMLModalEvents() {
        // Open Modal
        document.getElementById("cookieButton").addEventListener("click", function() {
            cookify.modalChange("cookieModalSettings", "show");
        });

        // Checkboxes
        if (this.getOnlyNecassary() === false) {
            this.type.forEach(element => {
                document.getElementById("cookieCheck" + this.ucfirst(element)).addEventListener("click", function() {
                    if (cookify.getCookieState(element)) {
                        cookify.changeCookieState(element, "false");
                    } else {
                        cookify.changeCookieState(element, "true");
                    }
                });          
            });
        }

        // Buttons
        ["Info", "Settings"].forEach(element => {
            if (document.getElementById("cookieButton" + element + "Settings")) {
                document.getElementById("cookieButton" + element + "Settings").addEventListener("click", function() {
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalSettings", "show");
                });
            }
    
            if (document.getElementById("cookieButton" + element + "Accept")) {
                document.getElementById("cookieButton" + element + "Accept").addEventListener("click", function() {                    
                    cookify.changeCookieState(cookify.getViewed(), "true");
                    cookify.modalChange("cookieModalInfo", "hide");
                    cookify.modalChange("cookieModalSettings", "hide");
    
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
                    cookify.modalChange("cookieModalSettings", "hide");
    
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
                    cookify.modalChange("cookieModalSettings", "hide");
            
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

        d.setTime(d.getTime() + (this.expire * 24 * 60 * 60 * 1000));

        var expires = "expires=" + d.toUTCString();

        document.cookie = this.name + "=" + btoa(JSON.stringify(cookieValue)) + ";" + expires + ";path=/" + ";SameSite=Lax" + ";Secure";
    }

    /**
     * getCookie()
     * 
     * cookies can be get here
     * 
     * @param {any} cookieName 
     */
    getCookie() {
        var name = this.name + "=";
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

        this.caValues.forEach(value => {
            ca[value] = false;
        });

        this.setCookie(ca);
    }

    /**
     * isCookieSetCorrect()
     * 
     * For checking if the set cookie is set correct
     */
    isCookieSetCorrect() {
        var ca = this.getCookie();
        var i = 0;

        if (ca != "") {
            for (const key in ca) {
                if (ca.hasOwnProperty(key)) {
                    if (key != this.caValues[i] && (ca[key] === true || ca[key] === false)) {
                        return false;
                    }

                    i++;
                }
            }

            return true;
        } else {
            return false;
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

                if (element.hasAttribute(this.name)) {
                    if (element.getAttribute(this.name) == cookieType) {
                        if (element.hasAttribute("type")) {
                            if (type == "js") {
                                element.setAttribute("type", "text/javascript");
                                var attr = element.getAttribute("src");
                                element.removeAttribute("src");
                                element.setAttribute("src", attr);
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