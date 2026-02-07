import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible'
import { getRenderElement } from '@/components/ui/render'

function Collapsible({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root> & {
  asChild?: boolean
}) {
  const render = getRenderElement(asChild, children)
  return (
    <CollapsiblePrimitive.Root
      data-slot='collapsible'
      render={render}
      {...props}
    >
      {render ? null : children}
    </CollapsiblePrimitive.Root>
  )
}

function CollapsibleTrigger({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger> & {
  asChild?: boolean
}) {
  const render = getRenderElement(asChild, children)
  return (
    <CollapsiblePrimitive.Trigger
      data-slot='collapsible-trigger'
      render={render}
      {...props}
    >
      {render ? null : children}
    </CollapsiblePrimitive.Trigger>
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) {
  return (
    <CollapsiblePrimitive.Panel data-slot='collapsible-content' {...props} />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
