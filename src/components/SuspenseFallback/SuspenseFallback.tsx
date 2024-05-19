import React from 'react'

import Spinner from '../Spinner'

interface SuspenseFallbackProps {}

export const SuspenseFallback: React.FunctionComponent<
  SuspenseFallbackProps
> = () => {
  return (
    <>
      <Spinner />
    </>
  )
}
