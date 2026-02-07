import { Link } from '@tanstack/react-router'
import { Menu as BaseMenu } from '@base-ui/react/menu'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  menuContentClass,
  menuItemClass,
} from '@/components/base-ui/menu-styles'

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  links: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <div className='lg:hidden'>
        <BaseMenu.Root modal={false}>
          <BaseMenu.Trigger
            render={
              <Button size='icon' variant='outline' className='md:size-7' />
            }
          >
            <Menu />
          </BaseMenu.Trigger>
          <BaseMenu.Portal>
            <BaseMenu.Positioner side='bottom' align='start'>
              <BaseMenu.Popup className={menuContentClass}>
                {links.map(({ title, href, isActive, disabled }) => (
                  <BaseMenu.Item
                    key={`${title}-${href}`}
                    className={menuItemClass}
                    disabled={disabled}
                    render={
                      <Link
                        to={href}
                        className={!isActive ? 'text-muted-foreground' : ''}
                        disabled={disabled}
                      >
                        {title}
                      </Link>
                    }
                  />
                ))}
              </BaseMenu.Popup>
            </BaseMenu.Positioner>
          </BaseMenu.Portal>
        </BaseMenu.Root>
      </div>

      <nav
        className={cn(
          'hidden items-center space-x-4 lg:flex lg:space-x-4 xl:space-x-6',
          className
        )}
        {...props}
      >
        {links.map(({ title, href, isActive, disabled }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            disabled={disabled}
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? '' : 'text-muted-foreground'}`}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
