import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    console.log('clearing google translate div')
    document.querySelector('#google_translate_element').innerHTML = ''
    console.log('cleared')
  }

  render() {
    return (
      <>
        <div id="google_translate_element" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }`,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </>
    )
  }
}
