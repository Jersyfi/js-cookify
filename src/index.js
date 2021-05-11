export default class Cookify {
    constructor(cookieDefault) {
        this.dataName = 'cookify'
        this.query = 'data-c-'
        this.cookieDefault = cookieDefault ?? 'necessary'
        this.stateViewed = 'viewed'

        this.init()
    }

    init() {
        this.initData()

        this.initCheckboxes()

        this.initListeners()
    }

    /**
     * Check the data for integrity
     */
    initData() {
        if (!this.getData()) {
            var typeElements = document.querySelectorAll(this.getQueryDataBrackets('check')),
                data = new Object

            for (const typeElement of typeElements) {
                if (typeElement.getAttribute(this.getQueryData('check')) == this.cookieDefault) {
                    data[typeElement.getAttribute(this.getQueryData('check'))] = true
                } else {
                    data[typeElement.getAttribute(this.getQueryData('check'))] = false
                }
                
            }

            data[this.stateViewed] = false
            this.setData(data)
        }
    }

    /**
     * Initialize the checkboxes
     */
    initCheckboxes() {
        var typeElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check'))

        for (const typeElement of typeElements) {
            var type = typeElement.getAttribute(this.getQueryData('check'))

            if (this.getCookieState(type)) {
                var checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type))

                for (const checkboxElement of checkboxElements) {
                    checkboxElement.checked = 'checked'
                }

                this.changeScriptType(type, 'js')
            }
        }
    }

    /**
     * Initialize the Listeners
     */
    initListeners() {
        var typeElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check'))

        for (const typeElement of typeElements) {
            typeElement.addEventListener('click', this.onMouseClick)
        }
    }

    /**
     * Get the query name for selecting elements
     * 
     * @param {string} type 
     * @param {string} element 
     * @returns {string}
     */
    getQueryData(type, element = '') {
        return element == '' ? `${this.query}${type}` : `${this.query}${type}="${element}"`
    }

    /**
     * Get the query name with brackets for selecting elements
     * 
     * @param {string} type 
     * @param {string} element 
     * @returns {string}
     */
    getQueryDataBrackets(type, element = '') {
        return '[' + this.getQueryData(type, element) + ']'
    }

    /**
     * Read the saved data
     * 
     * @returns data
     */
    getData() {
        // Get from Cookies
        var name = this.dataName + '=',
            ca = document.cookie.split(';')

        for(var i = 0; i < ca.length; i++) {
            var c = ca[i]

            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return JSON.parse(atob(c.substring(name.length, c.length)))
            }
        }

        return false
    }

    /**
     * Set the data
     * 
     * @param data
     */
    setData(data) {
        // Verschlüsselung
        data = btoa(JSON.stringify(data))

        // Save in cookies
        var date = new Date(),
            expire = 365,
            expires = ''

        date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000))
        expires = 'expires=' + date.toUTCString()
        document.cookie = this.dataName + '=' + data + ';' + expires + ';path=/;secure'
    }

    /**
     * Get a cookie state
     * 
     * @param {string} type 
     */
    getCookieState(type) {
        var data = this.getData()

        for (const key in data) {
            if (key == type) {
                return data[key] === true
            }
        }

        return false
    }

    /**
     * Changes the cookie state and saves the data
     * 
     * @param {string} type 
     * @param {boolean} value 
     */
    changeCookieState(type, value) {
        var data = this.getData()

        for (const key in data) {
            if (key == type) {
                data[key] = value
            }
        }

        this.setData(data)

        // Call Event to let the user track activity
    }

    /**
     * Any Script type can be changed from text/plain
     * and text/javascript and back
     * 
     * @param {string} script 
     * @param {string} type 
     */
    changeScriptType(script, type) {
        var scriptElements = document.querySelectorAll('script' + this.getQueryDataBrackets('script'))

        for (const scriptElement of scriptElements) {
            if (scriptElement.getAttribute(this.getQueryData('script')) == script) {
                if (type == 'js') {
                    scriptElement.setAttribute('type', 'text/javascript')

                    if (scriptElement.hasAttribute("src")) {
                        scriptElement.setAttribute("src", element.getAttribute("src"))
                    } else {
                        scriptElement.innerHTML = scriptElement.innerHTML
                    }
                } else {
                    scriptElement.setAttribute('type', 'text/plain')
                }
            }
        }
    }

    /**
     * Event Listeners
     */

    /**
     * Event on mouse click
     * 
     * @param {event} e 
     */
    onMouseClick = e => {
        var type = e.target.getAttribute(this.getQueryData('check')),
            checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type)),
            cookieState = this.getCookieState(type)

        cookieState ? this.changeScriptType(type, 'plain') : this.changeScriptType(type, 'js')
        this.changeCookieState(type, !cookieState)

        for (const checkboxElement of checkboxElements) {
            cookieState ? checkboxElement.checked = false : checkboxElement.checked = 'checked'
        }
    }
}
