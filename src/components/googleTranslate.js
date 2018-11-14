import React, { Component } from 'react'

export default class GoogleTranslate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    if (
      document.body.contains(
        document.querySelector('#google_translate_element')
      )
    ) {
      window.google && window.googleTranslateElementInit()
    }

    // const googleTranslateElementInit = () => {
    //   console.log('google loaded', window.google)
    //   new window.google.translate.TranslateElement(
    //     { pageLanguage: 'en' },
    //     'google_translate_element'
    //   )
    // }
    // window.googleTranslateElementInit = googleTranslateElementInit
  }

  render() {
    return (
      // <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  console.log('google translate is loading')
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  console.log('google translate has loaded')
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

        `,
        }}
      />
      // <div id="google_translate_element" />
      // <script
      //   type="text/javascript"
      //   src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      // />
      // </>
    )
  }
}
