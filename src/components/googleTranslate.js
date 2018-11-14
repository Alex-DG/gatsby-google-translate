import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    // console.log('clearing google translate div')
    // document.querySelector('#google_translate_element').innerHTML = ''
    // console.log('cleared')
    window.googleTranslateElementInit = this.googleTranslateElementInit
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
