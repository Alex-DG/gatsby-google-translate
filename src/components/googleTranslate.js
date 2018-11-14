import React, { Component } from 'react'
export default class GoogleTranslate extends Component {
  constructor() {
    super()

    this.mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        console.log('MUTATION > ', mutation)
        const iframeGoogle = document.querySelector('.goog-te-banner-frame')
        // Check if translation is in progress
        if (iframeGoogle) {
          console.log('iframe')
          const innerDoc =
            iframeGoogle.contentDocument || iframeGoogle.contentWindow.document
          const translateCloseBtn = innerDoc.querySelector('.goog-close-link')

          if (translateCloseBtn) {
            translateCloseBtn.addEventListener('click', () => {
              console.log('cclickk!!')
              window.location.reload()
            })
          }
        }
      })
    })
  }

  componentWillUnmount() {
    if (this.mutationObserver) this.mutationObserver.disconnect()
  }

  componentDidMount() {
    // const iframeGoogle = document.querySelector('.goog-te-banner-frame')
    // console.log('did mount > iframeGoogle', iframeGoogle)
    // if (iframeGoogle) {
    //   const innerDoc =
    //     iframeGoogle.contentDocument || iframeGoogle.contentWindow.document
    //   const translateCloseBtn = innerDoc.querySelector('.goog-close-link')
    //   if (translateCloseBtn) {
    //     translateCloseBtn.addEventListener('click', () => {
    //       console.log('cclickk!!')
    //       //window.location.reload()
    //       document.querySelector('.goog-te-banner-frame').remove()
    //     })
    //   }
    // }

    // window.googleTranslateElementInit = this.googleTranslateElementInit
    if (!window.googleTranslateElementInit)
      window.googleTranslateElementInit = this.googleTranslateElementInit.bind(
        this
      )

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

    this.mutationObserver.observe(document.documentElement, {
      attributes: true,
    })

    //   attributes: true,
    //   characterData: true,
    //   childList: true,
    //   subtree: true,
    //   attributeOldValue: true,
    //   characterDataOldValue: true,
  }

  googleTranslateElementInit() {
    // Load script only if no translation is in progress
    if (!document.querySelector('.goog-te-banner-frame')) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
        },
        'google_translate_element'
      )
    }
  }

  render() {
    return <div id="google_translate_element" />
  }
}
