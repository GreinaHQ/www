import request from 'got'
import { escape } from 'querystring'
import uuid from 'uuid/v4'

const pageView = (location, ip, userAgent, referer) => {
  return request('https://www.google-analytics.com/collect?v=1' +
    '&t=pageview' +
    '&tid=UA-24905421-3' +
    '&aip=1' +
    `&dl=${escape(location)}` +
    `&cid=${escape(uuid())}` +
    `&dr=${escape(referer)}` +
    `$uip=${escape(ip)}`,
    {
      headers: {
        'User-Agent': userAgent,
      },
      method: 'POST',
    }
  )
}

export { pageView }
