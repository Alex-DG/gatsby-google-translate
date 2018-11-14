import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  componentDidMount() {
    // console.log('clearing google translate div')
    // document.querySelector('#google_translate_element').innerHTML = ''
    // console.log('cleared')

    window.googleTranslateElementInit = this.googleTranslateElementInit

    const scriptLoaded = document.querySelector('#gtranslate-script')
    if (scriptLoaded) scriptLoaded.remove()

    const googleTranslateScript = document.createElement('script')
    googleTranslateScript.id = 'gtranslate-script'
    googleTranslateScript.type = 'text/javascript'
    googleTranslateScript.async = true
    googleTranslateScript.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    ;(
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(googleTranslateScript)
  }

  googleTranslateElementInit() {
    /* eslint-disable no-new */
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
      },
      'google_translate_element'
    )
  }

  render() {
    return (
      <>
        <div id="google_translate_element" />
        {/* <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        /> */}
      </>
    )
  }
}
