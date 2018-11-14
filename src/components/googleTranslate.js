import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  componentDidMount() {
    // console.log('clearing google translate div')
    // document.querySelector('#google_translate_element').innerHTML = ''
    // console.log('cleared')
    window.googleTranslateElementInit = this.googleTranslateElementInit

    const googleTranslateScript = document.createElement('script')
    googleTranslateScript.type = 'text/javascript'
    googleTranslateScript.async = true
    googleTranslateScript.src =
      'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    ;(
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(googleTranslateScript)

    console.log(googleTranslateScript)
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
    return <div id="google_translate_element" />
  }
}
