import * as React from 'react'
import { Radio } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'
import { cn } from '@/lib/utils'

function RadioGroup(
  allProps: React.ComponentProps<typeof RadioGroupPrimitive>
) {
  const { className, ...rest } = allProps
  const props =
    'value' in allProps ? { ...rest, value: allProps.value ?? '' } : rest

  return (
    <RadioGroupPrimitive
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof Radio.Root>) {
  return (
    <Radio.Root
      data-slot='radio-group-item'
      className={cn(
        'relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    >
      <Radio.Indicator
        data-slot='radio-group-indicator'
        className='absolute inset-0 flex items-center justify-center'
      >
        <span className='block size-2 rounded-full bg-primary' />
      </Radio.Indicator>
    </Radio.Root>
  )
}

export { RadioGroup, RadioGroupItem }
