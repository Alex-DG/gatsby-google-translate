import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class GoogleTranslate extends Component {
  componentDidMount() {
    // console.log('clearing google translate div')
    // document.querySelector('#google_translate_element').innerHTML = ''
    // console.log('cleared')
    window.googleTranslateElementInit = this.googleTranslateElementInit

    const languageSelector = document.querySelector(
      '#google_translate_element .skiptranslate'
    )
    if (window.google && !document.body.contains(languageSelector)) {
      console.log('manually loading google translate')
      this.googleTranslateElementInit()
    }

    // const googleTranslateScript = document.createElement('script')
    // googleTranslateScript.type = 'text/javascript'
    // googleTranslateScript.async = true
    // googleTranslateScript.src =
    //   '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    // ;(
    //   document.getElementsByTagName('head')[0] ||
    //   document.getElementsByTagName('body')[0]
    // ).appendChild(googleTranslateScript)

    // console.log(googleTranslateScript)
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
        <Helmet>
          <script
            type="text/javascript"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          />
        </Helmet>
      </>
    )
  }
}
