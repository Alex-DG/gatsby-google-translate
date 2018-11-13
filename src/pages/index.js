import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <h1>Google translate</h1>
      <div id="google_translate_element" />
      <script
        type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb={() => {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}}"
      />
    </div>
  </Layout>
)

export default IndexPage
