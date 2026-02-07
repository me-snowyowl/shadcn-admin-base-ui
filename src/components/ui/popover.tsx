import * as React from 'react'
import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import { cn } from '@/lib/utils'
import { getRenderElement } from '@/components/ui/render'

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot='popover' {...props} />
}

function PopoverTrigger({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger> & {
  asChild?: boolean
}) {
  const render = getRenderElement(asChild, children)
  return (
    <PopoverPrimitive.Trigger
      data-slot='popover-trigger'
      render={render}
      {...props}
      nativeButton={render ? (props.nativeButton ?? true) : props.nativeButton}
    >
      {render ? null : children}
    </PopoverPrimitive.Trigger>
  )
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Popup>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner align={align} sideOffset={sideOffset}>
        <PopoverPrimitive.Popup
          data-slot='popover-content'
          className={cn(
            'z-50 w-72 origin-[var(--transform-origin)] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot='popover-anchor' {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
