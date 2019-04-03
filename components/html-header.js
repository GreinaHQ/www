import Head from 'next/head'
import React from 'react'

import {
  defaultDescription,
  defaultPreviewImageAlt,
  defaultPreviewImageUrl,
  defaultTitle,
  defaultUrl,
} from '../config'

const HtmlHeader = ({
  description = defaultDescription,
  previewImageUrl = defaultPreviewImageUrl,
  previewImageAlt = defaultPreviewImageAlt,
  title = defaultTitle,
  url = defaultUrl,
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={previewImageUrl} />
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:description" content={description}></meta>
    <meta name="twitter:image" content={previewImageUrl}></meta>
    <meta name="twitter:image:alt" content={previewImageAlt}></meta>
    <meta name="twitter:site" content="@GreinaHQ"></meta>
    <link rel="shortcut icon" type="image/ico" href="/static/images/favicon.ico"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css" />
  </Head>
)

export default HtmlHeader
