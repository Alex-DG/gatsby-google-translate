import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    console.log('triggered')
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    )
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
          `,
        }}
      >
        <div id="google_translate_element" />
      </div>
    )
  }
}
