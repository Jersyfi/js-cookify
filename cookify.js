/**
 * @author Jérôme Bastian Winkel
 * @version 3.2
 */
class Cookify {
    constructor() {
        this.name = "cookify";
        this.expire = 365;
        this.modal = new Object;
        this.bootstrap = false;
        this.settings = {
            "necessary" : {
                "name": "Necessary",
                "desc": "",
            },
        };
        this.type = new Array;
        
        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
                if (key != "necessary") {
                    this.type.push(key);
                }
            }
        }

        this.view = "viewed";
        this.caValues = this.type.concat(this.view);
    }

    getView() {
        return this.view;
    }

    getType() {
        return this.type;
    }

    getOnlyNecassary() {
        var size = 0;

        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
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
     * @param {*} obj 
     */
    init(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                
                switch (key) {
                    case "name":
                        this.name = element;
                        break;

                    case "expire":
                        this.expire = element;
                        break;

                    case "modal":
                        this.modal = element;
                        break;

                    case "bootstrap":
                        this.bootstrap = element;
                        break;

                    case "settings":
                        this.settings = element;
                        break;

                    default:
                        console.log("Cookify: wrong init value '" + key + "'");
                        break;
                }
            }
        }

        if (this.bootstrap) {
            this.HTMLBootstrap();
        }

        this.HtmlButton();
        this.HtmlModalInfo();
        this.HTMLModalSettings();

        // When Cookie is set Wrong create new
        if (!this.isCookieSetCorrect()) {
            this.createCookie();
        }

        // When not viewd jet show cookie info and create cookies for that
        if (this.getCookieState(this.view)) {
            if (!this.getOnlyNecassary()) {
                this.type.forEach(element => {
                    if (this.getCookieState(element)) {
                        this.changeScriptType(element, "js");
                        document.getElementById("cookieCheck" + this.ucfirst(element)).checked = true;
                    }
                });
            }
        } else {
            this.modalChange("cookieModalInfo", "show");
        }
    }

    HTMLBootstrap() {
        var link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
        link.integrity = "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z";
        link.crossOrigin = "anonymous";

        document.head.appendChild(link);
    }

    HtmlButton() {
        var button = document.createElement("button"),
        img = document.createElement("img");

        button.className = "btn btn-primary btn-lg shadow rounded-pill fixed-bottom float-left m-3 p-1";
        button.id = "cookieButton";
        button.innerHTML = '<svg width="35px" height="35px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g id="Groß"><g><path d="M969.635,333.847c-38.408,-69.046 -82.482,-135.762 -134.394,-192.886" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M96.652,777.23c-3.504,-23.042 -6.352,-45.952 -8.418,-68.563" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M194.789,879.877c-65.696,-278.949 -57.582,-592.278 266.881,-674.378" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M291.038,946.484c-85.568,-271.25 -109.687,-598.361 223.941,-681.959c205.693,-51.54 326.036,136.416 389.424,299.25c10.586,27.194 26.46,83.235 52.052,144.892" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M386.13,985.155c-96.441,-254.92 -143.566,-563.394 145.321,-641.013c188.843,-50.738 268.2,176.448 322.586,317.095c10.626,27.479 27.451,76.67 53.806,130.615" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M478.77,1000.73c-91.239,-224.009 -149.329,-491.168 44.445,-570.105c163.376,-66.555 241.42,230.468 274.541,311.603c8.481,20.775 25.307,65.304 52.495,115.631" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M647.361,975.018c-45.633,-90.697 -95.854,-213.361 -81.592,-349.472c0,0 56.413,167.817 159.108,327.938" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M565.769,992.444c-81.464,-177.409 -135.416,-371.667 -37.063,-456.123c115.489,-99.171 100.69,121.112 266.304,377.493" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M896.526,544.142c0,0 -210.468,-498.084 -502.474,-403.16c-105.646,34.343 -201.42,96.096 -268.656,192.865" style="fill:none;stroke:#000;stroke-width:37.5px;"/><path d="M994.756,581.846c-30.094,-77.751 -60.531,-156.994 -98.23,-218.875c-83.534,-137.116 -271.971,-412.563 -584.622,-282.388c-229.544,95.573 -278.591,344.179 -286.573,492.615" style="fill:none;stroke:#000;stroke-width:37.5px;"/></g></g></svg>'
        document.body.appendChild(button);

        // Button Events
        document.getElementById("cookieButton").addEventListener("click", function() {
            cookify.modalChange("cookieModalSettings", "show");
        });
    }

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
        div9 = document.createElement("div"),
        div10 = document.createElement("div"),
        h4 = document.createElement("h4"),
        p = document.createElement("p"),
        button1 = document.createElement("button"),
        button2 = document.createElement("button");

        div1.className = "modal d-none";
        div1.id = "cookieModalInfo";
        div2.className = "modal-dialog fixed-top modal-dialog-centered";
        div3.className = "modal-content shadow border-0 p-3";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = "Wir verwenden Cookies";
        div5.className = "modal-body py-0";
        p.innerText = "Diese können wir zur Analyse von Besuchern einsetzen, um Inhalte personlaisiert anzuzeigen und unsere Website für ein besseres Erlebnis zu optimieren. Unter Einstellungen können Sie die verwendeten Cookies anpassen und weitere Informationen erhalten.";
        div6.className = "modal-footer border-0";
        div7.className = "container";
        div8.className = "row";
        div9.className = "col-sm-12 col-md-6 px-0 pb-1 pb-md-0 pr-md-1 pl-md-0";
        button1.type = "button";
        button1.className = "btn btn-secondary btn-block";
        button1.id = "cookieButtonInfoSettings";
        button1.innerText = "Einstellungen";
        div10.className = "col-sm-12 col-md-6 px-0 pt-1 pt-md-0 pl-md-1 pr-md-0";
        button2.type = "button";
        button2.className = "btn btn-primary btn-block";
        button2.id = "cookieButtonInfoSave";
        button2.innerText = "Nur Notwendige";

        div10.appendChild(button2);
        div9.appendChild(button1);
        div8.appendChild(div9);
        div8.appendChild(div10);
        div7.appendChild(div8);
        div6.appendChild(div7);
        div5.appendChild(p);
        div4.appendChild(h4);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        document.body.appendChild(div1);

        // Info Events
        document.getElementById("cookieButtonInfoSettings").addEventListener("click", function() {
            cookify.modalChange("cookieModalInfo", "hide");
            cookify.modalChange("cookieModalSettings", "show");
        });

        document.getElementById("cookieButtonInfoSave").addEventListener("click", function() {
            cookify.changeCookieState(cookify.getView(), "true");
            cookify.modalChange("cookieModalInfo", "hide");
        });

        /* document.getElementById("cookieButtonInfoSave").addEventListener("click", function() {
            cookify.changeCookieState(cookify.getView(), "true");
            cookify.modalChange("cookieModalInfo", "hide");

            if (!cookify.getOnlyNecassary()) {
                cookify.getType().forEach(element => {
                    cookify.changeCookieState(element, "true");
                    cookify.changeScriptType(element, "js");
                });
            }
        }); */
    }

    HTMLModalSettings() {
        var div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        div4 = document.createElement("div"),
        div5 = document.createElement("div"),
        div6 = document.createElement("div"),
        div7 = document.createElement("div"),
        h4 = document.createElement("h3"),
        p = document.createElement("p"),
        button = document.createElement("button");

        div1.className = "modal d-none";
        div1.id = "cookieModalSettings";
        div2.className = "modal-dialog fixed-top modal-dialog-centered";
        div3.className = "modal-content shadow border-0 p-3";
        div4.className = "modal-header border-0";
        h4.className = "modal-title";
        h4.id = "cookieModalLabel";
        h4.innerText = "Cookie Einstellungen";
        div5.className = "modal-body py-0";
        p.innerHTML = 'Genauere Informationen über unsere Nutzung bezüglich Cookies finden sie unter <a href="#">Datenschutz</a>.';

        div4.appendChild(h4);
        div3.appendChild(div4);
        div5.appendChild(p);

        // Checkboxes
        for (const setting in this.settings) {
            if (this.settings.hasOwnProperty(setting)) {
                const settingValue = this.settings[setting];
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
                labelCheckbox.setAttribute("for", "cookieCheck" + this.ucfirst(setting));
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

        

        
        labelCheckbox.appendChild(h5Checkbox);
        labelCheckbox.appendChild(pCheckbox);
        divCheckbox.appendChild(inputCheckbox);
        divCheckbox.appendChild(labelCheckbox);
        div5.appendChild(divCheckbox);

        div6.className = "modal-footer border-0 float-left";
        div7.className = "col p-0";
        button.type = "button";
        button.className = "btn btn-primary";
        button.id = "cookieButtonSettingsSave";
        button.innerText = "Speichern";

        div7.appendChild(button);
        div6.appendChild(div7);
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        document.body.appendChild(div1);

        // Settings Events
        /* if (this.getOnlyNecassary() === false) {
            this.type.forEach(element => {
                document.getElementById("cookieCheck" + this.ucfirst(element)).addEventListener("click", function() {
                    if (cookify.getCookieState(element)) {
                        cookify.changeCookieState(element, "false");
                    } else {
                        cookify.changeCookieState(element, "true");
                    }
                });          
            });
        } */

        document.getElementById("cookieButtonSettingsSave").addEventListener("click", function() {
            cookify.changeCookieState(cookify.getView(), "true");
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

    /**
     * setCookie()
     * 
     * cookies can be set here
     * 
     * @param {any} cookieName
     * @param {any} cookieValue
     */
    setCookie(cookieValue) {
        var d = new Date();

        d.setTime(d.getTime() + (this.expire * 24 * 60 * 60 * 1000));

        var expires = "expires=" + d.toUTCString();

        document.cookie = this.name + "=" + btoa(JSON.stringify(cookieValue)) + ";" + expires + ";path=/";
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
     * @param {js, plain} type
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
     * @param {show, hide} mode
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

cookify = new Cookify();