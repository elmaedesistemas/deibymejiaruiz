import React, { Component } from 'react';
import Link from 'next/link';

class BuyMeACoffe extends React.Component {
        constructor(props) {
            super(props)
            let script = document.createElement("script");
            script.setAttribute('data-name', 'BMC-Widget')
            script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
            script.setAttribute('data-name', 'bmc-button');
            script.setAttribute('data-slug', 'cometacos');
            script.setAttribute('data-color', "#79D6B5")
            script.setAttribute('data-font', "Cookie")
            script.setAttribute('data-description', 'Thank you for your support!');
            script.setAttribute('data-text', 'Buy me a coffee')
            script.setAttribute('data-outline-color', '#000000')
            script.setAttribute('data-font-color', '#ffffff')
            script.setAttribute('data-coffee-color', '#FFDD00')
            script.async = true
                //Call window on load to show the image
            script.onload = function() {
                var evt = document.createEvent('Event');
                evt.initEvent('load', false, false);
                window.dispatchEvent(evt);
            }
            this.script = script
        }

        componentDidMount() {
            document.head.appendChild(this.script)
        }

        componentWillUnmount() {
            document.head.removeChild(this.script);
            document.body.removeChild(document.getElementById("bmc-wbtn"))
        }

        render() {
            return ( <script></script>)
            }
        }

        export default BuyMeACoffe;