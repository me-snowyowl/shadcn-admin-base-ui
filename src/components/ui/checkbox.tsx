import * as React from 'react'
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { CheckIcon, MinusIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type CheckboxProps = Omit<
  React.ComponentProps<typeof CheckboxPrimitive.Root>,
  'checked' | 'indeterminate'
> & {
  checked?: boolean | 'indeterminate'
}

function Checkbox(allProps: CheckboxProps) {
  const { className, ...props } = allProps
  const rootProps = (() => {
    if (!('checked' in allProps)) return props

    if (allProps.checked === 'indeterminate') {
      return { ...props, checked: false, indeterminate: true }
    }

    return {
      ...props,
      checked: allProps.checked ?? false,
      indeterminate: false,
    }
  })()

  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'peer relative inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-background shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[indeterminate]:border-primary data-[indeterminate]:bg-primary data-[indeterminate]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[checked]:bg-primary dark:data-[indeterminate]:bg-primary',
        className
      )}
      {...rootProps}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='absolute inset-0 flex items-center justify-center text-current transition-none data-[unchecked]:hidden [&[data-checked]_.checkbox-minus]:hidden [&[data-indeterminate]_.checkbox-check]:hidden'
      >
        <CheckIcon className='checkbox-check size-3.5' />
        <MinusIcon className='checkbox-minus size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
