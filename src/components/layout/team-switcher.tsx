import * as React from 'react'
import { Menu as BaseMenu } from '@base-ui/react/menu'
import { ChevronsUpDown, Plus } from 'lucide-react'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  menuContentClass,
  menuItemClass,
  menuLabelClass,
  menuSeparatorClass,
  menuShortcutClass,
} from '@/components/base-ui/menu-styles'

type TeamSwitcherProps = {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <BaseMenu.Root>
          <BaseMenu.Trigger
            render={
              <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
              />
            }
          >
            <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
              <activeTeam.logo className='size-4' />
            </div>
            <div className='grid flex-1 text-start text-sm leading-tight'>
              <span className='truncate font-semibold'>{activeTeam.name}</span>
              <span className='truncate text-xs'>{activeTeam.plan}</span>
            </div>
            <ChevronsUpDown className='ms-auto' />
          </BaseMenu.Trigger>
          <BaseMenu.Portal>
            <BaseMenu.Positioner
              align='start'
              side={isMobile ? 'bottom' : 'right'}
              sideOffset={4}
            >
              <BaseMenu.Popup
                className={`${menuContentClass} w-[var(--anchor-width)] min-w-56 rounded-lg`}
              >
                <div
                  className={`${menuLabelClass} text-xs text-muted-foreground`}
                >
                  Teams
                </div>
                {teams.map((team, index) => (
                  <BaseMenu.Item
                    key={team.name}
                    onClick={() => setActiveTeam(team)}
                    className={`${menuItemClass} gap-2 p-2`}
                  >
                    <div className='flex size-6 items-center justify-center rounded-sm border'>
                      <team.logo className='size-4 shrink-0' />
                    </div>
                    {team.name}
                    <span className={menuShortcutClass}>⌘{index + 1}</span>
                  </BaseMenu.Item>
                ))}
                <BaseMenu.Separator className={menuSeparatorClass} />
                <BaseMenu.Item className={`${menuItemClass} gap-2 p-2`}>
                  <div className='flex size-6 items-center justify-center rounded-md border bg-background'>
                    <Plus className='size-4' />
                  </div>
                  <div className='font-medium text-muted-foreground'>
                    Add team
                  </div>
                </BaseMenu.Item>
              </BaseMenu.Popup>
            </BaseMenu.Positioner>
          </BaseMenu.Portal>
        </BaseMenu.Root>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
