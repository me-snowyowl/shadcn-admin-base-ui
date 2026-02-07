import * as React from 'react'
import { cn } from '@/lib/utils'

type SlotProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

function mergeHandlers<
  TEvent extends React.SyntheticEvent | Event,
  THandler extends ((event: TEvent) => void) | undefined,
>(parentHandler: THandler, childHandler: THandler) {
  if (!parentHandler) return childHandler
  if (!childHandler) return parentHandler
  return (event: TEvent) => {
    childHandler(event)
    if (!event.defaultPrevented) {
      parentHandler(event)
    }
  }
}

function Slot({ children, className, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    return null
  }

  const child = children as React.ReactElement<{
    className?: string
    style?: React.CSSProperties
    onClick?: (event: React.MouseEvent) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
  }>

  const mergedProps = {
    ...props,
    className: cn(child.props.className, className),
    style: { ...props.style, ...child.props.style },
    onClick: mergeHandlers(props.onClick, child.props.onClick),
    onKeyDown: mergeHandlers(props.onKeyDown, child.props.onKeyDown),
  }

  return React.cloneElement(child, mergedProps)
}

export { Slot }
