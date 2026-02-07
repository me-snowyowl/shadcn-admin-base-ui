import * as React from 'react'

export function getRenderElement(
  asChild: boolean | undefined,
  children: React.ReactNode
) {
  if (asChild && React.isValidElement(children)) {
    return children
  }
  return undefined
}
