import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    const googleTranslateElementInit = () => {
      console.log('google loaded', window.google)
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      )
    }
    window.googleTranslateElementInit = googleTranslateElementInit
    console.log('works')
    window.google && googleTranslateElementInit()
  }

  render() {
    return (
      <>
        <div id="google_translate_element" />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </>
    )
  }
}
