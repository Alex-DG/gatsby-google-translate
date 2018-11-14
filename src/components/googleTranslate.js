import React, { Component } from 'react'

const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time))

const googleTranslateElementInit = () => {
  console.log('google loaded', window.google)
  new window.google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )
}
window.googleTranslateElementInit = googleTranslateElementInit

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  async componentDidMount() {
    // await wait(5000)
    // console.log('triggered')
    // console.log(window)
    // new window.google.translate.TranslateElement(
    //   { pageLanguage: 'en' },
    //   'google_translate_element'
    // )
  }

  render() {
    return (
      <>
        <div id="google_translate_element" />
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
          `,
          }}
        />
      </>
    )
  }
}
