import React, { useEffect, useState } from 'react'

const SlideShow = ({ children, interval = 3000, ...rest }) => {
  const lastChildIndex = React.Children.count(children) - 1
  const [active, setActive] = useState(0)

  useEffect(() => {
    const toid = setTimeout(() => setActive(active === lastChildIndex
      ? 0
      : active + 1
    ), interval)

    return () => clearTimeout(toid)
  }, [active])

  return (
    <div {...rest}>
      {React.Children.map(children, (child, i) =>
        (i === active) ? child : null
      )}
    </div>
  )
}

export default SlideShow
