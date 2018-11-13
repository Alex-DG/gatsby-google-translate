import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends React.Component {
  // componentDidMount() {
  //   const s = document.createElement('script')
  //   s.type = 'text/javascript'
  //   s.async = true
  //   s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //   s.innerHTML = "document.write('This is output by document.write()!')"
  //   this.instance.appendChild(s)
  // }

  render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div id="google_translate_element"></div><script type="text/javascript">
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
              }
              console.log('triggered');
              </script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
          `,
          }}
        />
      </Layout>
    )
  }
}
// const IndexPage = () => (
//   <Layout>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//     <div ref={el => (this.instance = el)}>
//       <div id="google_translate_element" />
//     </div>
//   </Layout>
// )

export default IndexPage

{
  /* <div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */
}
