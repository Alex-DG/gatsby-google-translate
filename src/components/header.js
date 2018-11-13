import React from 'react'
import { Link } from 'gatsby'
import { runInThisContext } from 'vm'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { test: 0 }
  }
  componentDidMount() {
    console.log('did mount')
    this.setState({ test: Math.random() })
  }
  render() {
    const { siteTitle } = this.props
    console.log('state', this.state.test)
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>

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
          </h1>
        </div>
      </div>
    )
  }
}
// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>

//         <div
//           dangerouslySetInnerHTML={{
//             __html: `
//               <div id="google_translate_element"></div><script type="text/javascript">
//               function googleTranslateElementInit() {
//                 new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//               }
//               console.log('triggered');
//               </script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
//           `,
//           }}
//         />
//       </h1>
//     </div>
//   </div>
// )

export default Header
