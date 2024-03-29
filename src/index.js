export default class Cookify {
    constructor(dataName = 'cookify', actionCallback = () => {}, trackingCallback = () => {}, saveWithChange = false, saveByDefault = false, cookieDefault = 'necessary', initCallback = () => {}) {
        this.dataName = dataName
        this.data = new Object
        this.query = 'data-c-'
        this.trackingCallback = trackingCallback
        this.saveByDefault = saveByDefault
        this.saveWithChange = saveWithChange
        this.cookieDefault = cookieDefault
        this.viewedName = 'viewed'
        this.actionCallback = actionCallback
        this.initCallback = initCallback

        //only init after load so that we definitely have all elements on the page present
        var self = this;
        window.addEventListener('load', function(event) {
            self.init()
        });
    }

    init() {
        this.initData()

        this.initCheckboxes()

        this.initListeners()

        this.initCallback(this)
    }

    /**
     * Check the data for integrity
     */
    initData() {
        if (!this.getMemoryData()) {
            var typeElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check'))
            
            for (const typeElement of typeElements) {
                if (typeElement.getAttribute(this.getQueryData('check')) == this.cookieDefault || typeElement.getAttribute(this.getQueryData('check-default')) == 'true') {
                    this.data[typeElement.getAttribute(this.getQueryData('check'))] = true
                } else {
                    this.data[typeElement.getAttribute(this.getQueryData('check'))] = false
                }
            }

            this.data[this.viewedName] = false
            this.saveByDefault ? this.setMemoryData(this.data) : null
        } else {
            this.data = this.getMemoryData()
        }
    }

    /**
     * Initialize the checkboxes
     */
    initCheckboxes() {
        var typeElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check')),
            checkChecked = new Array

        for (const typeElement of typeElements) {
            var type = typeElement.getAttribute(this.getQueryData('check'))

            if (this.getDataState(type)) {
                var checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type))

                for (const checkboxElement of checkboxElements) {
                    checkboxElement.checked = 'checked'

                    if (type == this.cookieDefault) {
                        checkboxElement.disabled = true
                    }
                }

                !checkChecked[type] && this.changeConsent(type, true)
                checkChecked[type] = true
            }
        }
    }

    /**
     * Initialize the Listeners
     */
    initListeners() {
        // Checkboxes
        var checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check'))

        for (const checkboxElement of checkboxElements) {
            checkboxElement.addEventListener('click', this.onCheckboxClick)
        }

        // Actions
        var actionElements = document.querySelectorAll(this.getQueryDataBrackets('action'))

        for (const actionElement of actionElements) {
            switch (actionElement.getAttribute(this.getQueryData('action'))) {
                case 'accept':
                    actionElement.addEventListener('click', this.onActionAcceptClick)
                    break;

                case 'necessary':
                    actionElement.addEventListener('click', this.onActionNecessaryClick)
                    break;

                case 'all':
                    actionElement.addEventListener('click', this.onActionAllClick)
                    break;
            
                default:
                    break;
            }
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
    getMemoryData() {
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
    setMemoryData(data) {
        // Callback for tracking user activity
        this.trackingCallback([
            data,
            new Date()
        ])

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
    getDataState(type) {
        for (const key in this.data) {
            if (key == type) {
                return this.data[key] === true
            }
        }

        return false
    }

    /**
     * Changes the cookie state and saves the data
     * 
     * @param {string} type 
     * @param {boolean} value 
     * @returns {boolean} 
     */
    changeDataState(type, value) {
        for (const key in this.data) {
            if (key == type) {
                this.data[key] = value
            }
        }

        this.saveWithChange ? this.setMemoryData(this.data) : null

        // Call Event to let the user track activity
        return value
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
                    var reloadScriptElement = document.createElement('script'),
                        parentScriptElement = scriptElement.parentNode

                    for (const key in scriptElement.attributes) {
                        if (scriptElement.attributes[key].value) {
                            const attribute = scriptElement.attributes[key]
                            
                            reloadScriptElement.setAttribute(attribute.name, attribute.value)
                        }
                    }

                    reloadScriptElement.setAttribute('type', 'text/javascript')
                    reloadScriptElement.innerHTML = scriptElement.innerHTML

                    scriptElement.remove()
                    parentScriptElement.appendChild(reloadScriptElement)
                } else {
                    scriptElement.setAttribute('type', 'text/plain')
                }
            }
        }
    }

    /**
     * Changes the src of html tags to either the original source or the fallback source depending on the consent
     * @param {string} tag  html tag to search for eg img or iframe
     * @param {string} category
     * @param {boolean} consentGiven
     */
    changeSource(tag, category, consentGiven) {
        var elements = document.querySelectorAll(tag + this.getQueryDataBrackets('script'))
        for (const element of elements) {
            if (element.getAttribute(this.getQueryData('script')) === category) {
                var prop = consentGiven ? 'src' : 'fallback';
                var src = element.getAttribute(this.getQueryData(prop));
                element.setAttribute('src', src);
            }
        }
    }

    /**
     * Enables or disables content on the page for a consent for a given category
     * @param {string} category
     * @param {boolean} consentGiven
     */
    changeConsent(category, consentGiven) {
        this.changeScriptType(category, consentGiven ? 'js' : 'plain')
        this.changeSource('img', category, consentGiven)
        this.changeSource('iframe', category, consentGiven)
    }

    /**
     * Event Listeners
     */

    /**
     * Event on mouse click
     * 
     * @param {event} e 
     */
    onCheckboxClick = e => {
        var type = e.target.getAttribute(this.getQueryData('check')),
            checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type)),
            cookieState = this.getDataState(type)

        cookieState = this.changeDataState(type, !cookieState)
        this.saveWithChange && this.changeConsent(type, cookieState)

        for (const checkboxElement of checkboxElements) {
            cookieState ? checkboxElement.checked = 'checked' : checkboxElement.checked = false
        }
    }

    /**
     * Event on action accept click
     */
    onActionAcceptClick = () => {
        for (const type in this.data) {
            if (type != this.viewedName) {
                this.changeConsent(type, this.data[type])
            }
        }
        
        this.data[this.viewedName] = true
        this.setMemoryData(this.data)
        this.actionCallback()
    }

    /**
     * Event action accept only necessary click
     */
    onActionNecessaryClick = () => {
        // Nur notwendig auf true
        for (const type in this.data) {
            if (type != this.cookieDefault && type != this.viewedName) {
                this.data[type] = false
                this.changeConsent(type, false)

                var checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type))

                for (const checkboxElement of checkboxElements) {
                    checkboxElement.checked = false
                }
            }
        }

        this.data[this.viewedName] = true
        this.setMemoryData(this.data)
        this.actionCallback()
    }

    /**
     * Event action accept all cick
     */
    onActionAllClick = () => {
        for (const type in this.data) {
            this.data[type] = true

            if (type != this.viewedName) {
                this.changeConsent(type, true)

                var checkboxElements = document.querySelectorAll('input' + this.getQueryDataBrackets('check', type))

                for (const checkboxElement of checkboxElements) {
                    checkboxElement.checked = 'checked'
                }
            }
        }

        this.setMemoryData(this.data)
        this.actionCallback()
    }
}
