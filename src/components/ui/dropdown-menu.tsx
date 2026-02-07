import * as React from 'react'
import { Menu } from '@base-ui/react/menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getRenderElement } from '@/components/ui/render'
import {
  menuCheckboxItemClass,
  menuContentClass,
  menuDestructiveItemClass,
  menuItemClass,
  menuLabelClass,
  menuRadioItemClass,
  menuSeparatorClass,
  menuSubContentClass,
  menuSubTriggerClass,
} from '@/components/base-ui/menu-styles'

function DropdownMenu({ ...props }: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root data-slot='dropdown-menu' {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof Menu.Portal>) {
  return <Menu.Portal data-slot='dropdown-menu-portal' {...props} />
}

function DropdownMenuTrigger({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof Menu.Trigger> & { asChild?: boolean }) {
  const render = getRenderElement(asChild, children)
  return (
    <Menu.Trigger
      data-slot='dropdown-menu-trigger'
      render={render}
      {...props}
      nativeButton={render ? (props.nativeButton ?? true) : props.nativeButton}
    >
      {render ? null : children}
    </Menu.Trigger>
  )
}

function DropdownMenuContent({
  className,
  side,
  align,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Menu.Popup>) {
  return (
    <Menu.Portal>
      <Menu.Positioner side={side} align={align} sideOffset={sideOffset}>
        <Menu.Popup
          data-slot='dropdown-menu-content'
          className={cn(menuContentClass, className)}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof Menu.Group>) {
  return <Menu.Group data-slot='dropdown-menu-group' {...props} />
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof Menu.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
  asChild?: boolean
}) {
  const render = getRenderElement(asChild, children)
  return (
    <Menu.Item
      data-slot='dropdown-menu-item'
      data-inset={inset}
      data-variant={variant}
      className={cn(
        menuItemClass,
        menuDestructiveItemClass,
        'data-[inset]:ps-8',
        className
      )}
      render={render}
      {...props}
    >
      {render ? null : children}
    </Menu.Item>
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof Menu.CheckboxItem>) {
  return (
    <Menu.CheckboxItem
      data-slot='dropdown-menu-checkbox-item'
      className={cn(menuCheckboxItemClass, className)}
      checked={checked}
      {...props}
    >
      <span className='pointer-events-none absolute start-2 flex size-3.5 items-center justify-center'>
        <Menu.CheckboxItemIndicator>
          <CheckIcon className='size-4' />
        </Menu.CheckboxItemIndicator>
      </span>
      {children}
    </Menu.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof Menu.RadioGroup>) {
  return <Menu.RadioGroup data-slot='dropdown-menu-radio-group' {...props} />
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Menu.RadioItem>) {
  return (
    <Menu.RadioItem
      data-slot='dropdown-menu-radio-item'
      className={cn(menuRadioItemClass, className)}
      {...props}
    >
      <span className='pointer-events-none absolute start-2 flex size-3.5 items-center justify-center'>
        <Menu.RadioItemIndicator>
          <CircleIcon className='size-2 fill-current' />
        </Menu.RadioItemIndicator>
      </span>
      {children}
    </Menu.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<'div'> & {
  inset?: boolean
}) {
  return (
    <div
      data-slot='dropdown-menu-label'
      data-inset={inset}
      className={cn(menuLabelClass, 'data-[inset]:ps-8', className)}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Separator>) {
  return (
    <Menu.Separator
      data-slot='dropdown-menu-separator'
      className={cn(menuSeparatorClass, className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='dropdown-menu-shortcut'
      className={cn(
        'ms-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof Menu.SubmenuRoot>) {
  return <Menu.SubmenuRoot data-slot='dropdown-menu-sub' {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  asChild,
  ...props
}: React.ComponentProps<typeof Menu.SubmenuTrigger> & {
  inset?: boolean
  asChild?: boolean
}) {
  const render = getRenderElement(asChild, children)
  return (
    <Menu.SubmenuTrigger
      data-slot='dropdown-menu-sub-trigger'
      data-inset={inset}
      className={cn(menuSubTriggerClass, 'data-[inset]:ps-8', className)}
      render={render}
      {...props}
    >
      {render ? null : (
        <>
          {children}
          <ChevronRightIcon className='ms-auto size-4' />
        </>
      )}
    </Menu.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Popup>) {
  return (
    <Menu.Portal>
      <Menu.Positioner>
        <Menu.Popup
          data-slot='dropdown-menu-sub-content'
          className={cn(menuSubContentClass, className)}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
