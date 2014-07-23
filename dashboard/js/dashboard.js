/*
 * On the head set the plugin's name, version, author details and license
 * for example, for example:
 *
 * ------------------------------------------------------------------------
 *
 * jquery-plugin.js Version 0.1
 * jQuery Plugin Boilerplate code helps creating your custom jQuery plugins.
 *
 * Licensed under MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2013 Antonio Santiago
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
( function( $, window, document, undefined ) {

    /**
     * Store the plugin name in a variable. It helps you if later decide to
     * change the plugin's name
     * @type {String}
     */
    var dashboard = 'dashboard';

    /**
     * The plugin constructor
     * @param {DOM Element} element The DOM element where plugin is applied
     * @param {Object} options Options passed to the constructor
     */
    function Plugin( element, options ) {

        // Store a reference to the source element
        this.el = element;

        // Store a jQuery reference  to the source element
        this.$el = $( element );

        // Set the instance options extending the plugin defaults and
        // the options passed by the user
        this.options = $.extend( {}, $.fn.dashboard.defaults, options );

        // Initialize the plugin instance
        this.init();
    }

    /**
     * Set up your Plugin protptype with desired methods.
     * It is a good practice to implement 'init' and 'destroy' methods.
     */
    Plugin.prototype = {
        /**
         * Initialize the plugin instance.
         * Set any other attribtes, store any other element reference, register
         * listeners, etc
         *
         * When bind listerners remember to name tag it with your plugin's name.
         * Elements can have more than one listener attached to the same event
         * so you need to tag it to unbind the appropriate listener on destroy:
         *
         * @example
         * this.$someSubElement.on('click.' + dashboard, function() {
         *      // Do something
         * });
         *
         */
        init: function() {
            this.rootElement = $( '<div/>', {
                class: 'dashboard',
                title: this.options.title,
                width: this.options.width,
                height: this.options.height
            }).appendTo( this.el );

        },
        /**
         * The 'destroy' method is were you free the resources used by your plugin:
         * references, unregister listeners, etc.
         *
         * Remember to unbind for your event:
         *
         * @example
         * this.$someSubElement.off('.' + dashboard);
         *
         * Above example will remove any listener from your plugin for on the given
         * element.
         */
        destroy: function() {

            // Remove any attached data from your plugin
            this.$el.removeData();
        },
        /**
         * Write public methods within the plugin's prototype. They can
         * be called with:
         *
         * @example
         * $('#element').jqueryDashboard('somePublicMethod','Arguments', 'Here', 1001);
         *
         * @param  {[type]} foo [some parameter]
         * @param  {[type]} bar [some other parameter]
         * @return {[type]}
         */
        somePublicMethod: function( foo, bar ) {

            // This is a call to a pseudo private method
            this._pseudoPrivateMethod();

            // This is a call to a real private method. You need to use 'call' or 'apply'
            privateMethod.call( this );
        },
        /**
         * Another public method which acts as a getter method. You can call as any usual
         * public method:
         *
         * @example
         * $('#element').jqueryDashboard('someGetterMethod');
         *
         * to get some interesting info from your plugin.
         *
         * @return {[type]} Return something
         */
        someGetterMethod: function() {

        },

        title: function() {
            return this.options.title;
        },

        width: function() {
            return this.options.width;
        },

        height: function() {
            return this.options.height;
        },

        addWidget: function( options ) {
            var defaults = {
                title: 'default title',
                height: 250,
                width: 350,
                content: 'default content: if you see this you are doing it wrong'
            };
			var options = $.extend( defaults, options );
            var w = new Widget(
                    this.rootElement,
                    options.title,
                    options.height,
                    options.width,
                    options.content
                );
            w.render();
            widgets = w;
        },

        addTimer: function() {
            $( '<div/>', {
                id: 'countDown',
                class: 'widget'
            }).appendTo( this.rootElement );
            $( '#countDown' ).flipcountdown();
        },

        addClock: function() {
            var currentdate = new Date();
            var clock = $( '<div/>', {
                class: 'clock widget'
            }).appendTo( this.rootElement );
            $( '<div/>', {
                text: currentdate.getTime()
            }).appendTo( clock );
        },

        addArticle: function( options ) {
			var defaults = {
                title: 'Article Title',
                length: '2',
                numberOfParagraphs: '2'
			};
			var options = $.extend( defaults, options );
            var container = $( '<article/>', {
                class: 'widget'
            }).appendTo( this.rootElement );
            $( '<h2/>', {
                text: options.title
            }).appendTo( container );
            for( var i = 0; i < options.numberOfParagraphs; i++ ) {
                $( '<p/>', {
                    attr: { 'data-lorem': options.length + 'p' },
                    class: 'wrapword'
                }).appendTo( container );
            }
        },

        /**
         * You can use the name convention functions started with underscore are
         * private. Really calls to functions starting with underscore are
         * filtered, for example:
         *
         *  @example
         *  $('#element').jqueryDashboard('_pseudoPrivateMethod');  // Will not work
         */
        _pseudoPrivateMethod: function() {

        }
    };

    /**
     * This is a real private method. A plugin instance has access to it
     * @return {[type]}
     */
    var privateMethod = function() {
        console.log( "privateMethod" );
        console.log( this );
    };


    /**
     * This is were we register our plugin withint jQuery plugins.
     * It is a plugin wrapper around the constructor and prevents agains multiple
     * plugin instantiation (soteing a plugin reference within the element's data)
     * and avoid any function starting with an underscore to be called (emulating
     * private functions).
     *
     * @example
     * $('#element').jqueryDashboard({
     *     defaultOption: 'this options overrides a default plugin option',
     *     additionalOption: 'this is a new option'
     * });
     */
    $.fn.dashboard = function( options ) {
        var args = arguments;

        if( options === undefined || typeof options === 'object' ) {
            // Creates a new plugin instance, for each selected element, and
            // stores a reference withint the element's data
            return this.each( function() {
                if( !$.data( this, 'plugin_' + dashboard ) ) {
                    $.data( this, 'plugin_' + dashboard, new Plugin( this, options ) );
                }
            } );
        } else if( typeof options === 'string' && options[0] !== '_' && options !== 'init' ) {
            // Call a public pluguin method (not starting with an underscore) for each
            // selected element.
            if( Array.prototype.slice.call( args, 1 ).length === 0 && $.inArray( options, $.fn.dashboard.getters ) !== -1 ) {
                // If the user does not pass any arguments and the method allows to
                // work as a getter then break the chainability so we can return a value
                // instead the element reference.
                var instance = $.data( this[0], 'plugin_' + dashboard );
                return instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
            } else {
                // Invoke the speficied method on each selected element
                return this.each( function() {
                    var instance = $.data( this, 'plugin_' + dashboard );
                    if( instance instanceof Plugin && typeof instance[options] === 'function' ) {
                        instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                    }
                } );
            }
        }
    };

    /**
     * Names of the pluguin methods that can act as a getter method.
     * @type {Array}
     */
    $.fn.dashboard.getters = [ 'someGetterMethod', 'title', 'width', 'height' ];

    /**
     * Default options
     */
    $.fn.dashboard.defaults = {
        defaultOption: "I'm a default option",
        title: "jquery.dashboard v0.1",
        width: '640px',
        height: '480px'
    };

    var widgets = {};

    var Widget = function( DOMElement, title, height, width, content ) {
        this.element = DOMElement;
        this.title = title;
        this.height = height;
        this.width = width;
        this.content = content;
        this.render = function() {
            $( '<div/>', {
                class: 'widget',
                html: this.content,
                title: this.title
            }).appendTo( this.element );
        }
    };

} )( jQuery, window, document );