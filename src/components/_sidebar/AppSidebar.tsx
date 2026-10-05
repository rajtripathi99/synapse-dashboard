"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {
    ClockCounterClockwiseIcon,
    FlowArrowIcon,
    Info,
    KeyIcon,
    Layout,
    MoonIcon,
    Robot,
    SlidersHorizontalIcon,
    User,
} from "@phosphor-icons/react"
import Image from "next/image"

const mainItems = [
    { label: "Overview", icon: Layout, active: true },
    { label: "Active Agents", icon: Robot },
    { label: "Workflow Canvas", icon: FlowArrowIcon },
    { label: "API Keys", icon: KeyIcon },
    { label: "Audit Logs", icon: ClockCounterClockwiseIcon },
    { label: "Settings", icon: SlidersHorizontalIcon },
]

const footerItems = [
    { label: "Dark Mode", icon: MoonIcon },
    { label: "Profile", icon: User },
    { label: "Help & Support", icon: Info },
]

const itemBase =
    "h-[30px] gap-2 rounded-[10px] px-2 py-1.5 text-sm font-medium tracking-[-0.28px]"

const itemInactive =
    "text-neutral-500 hover:bg-neutral-800/60 hover:text-neutral-200"

const itemActive =
    "bg-neutral-800 text-neutral-200 shadow-[0_4px_4px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.25),inset_0_0.8px_0_0_rgba(161,161,161,0.18)] hover:bg-neutral-800 hover:text-neutral-200"

export function AppSidebar() {
    return (
        <Sidebar
            collapsible="icon"
            className="border-neutral-950 text-neutral-200 shadow-[1px_0_0_0_var(--color-neutral-800)] [--sidebar:var(--color-neutral-900)] [--sidebar-foreground:var(--color-neutral-200)]"
        >
            <SidebarHeader
                className="group/header h-[60px] shrink-0 flex-row items-center justify-between border-b border-neutral-950 px-3.5 py-0 shadow-[0_1.2px_0_0_var(--color-neutral-800)]
                           group-data-[collapsible=icon]:justify-center
                           group-data-[collapsible=icon]:gap-0
                           group-data-[collapsible=icon]:px-2"
            >
                <div className="flex items-center gap-2 group-data-[collapsible=icon]:group-hover/header:hidden">
                    <Image
                        src="/logo.svg"
                        alt="Synapse Logo"
                        width={30}
                        height={30}
                        className="shrink-0"
                    />
                    <span className="whitespace-nowrap text-base font-semibold tracking-[-0.32px] text-neutral-200 group-data-[collapsible=icon]:hidden">
                        Synapse OS
                    </span>
                </div>

                <SidebarTrigger
                    className="size-[30px] shrink-0 rounded-[10px] bg-neutral-800 p-2 text-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(161,161,161,0.25)] hover:bg-neutral-700 hover:text-neutral-200 [&_svg]:size-3.5
                               group-data-[collapsible=icon]:hidden
                               group-data-[collapsible=icon]:group-hover/header:inline-flex!"
                />
            </SidebarHeader>

            <SidebarContent className="p-3.5 group-data-[collapsible=icon]:p-2">
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {mainItems.map(({ label, icon: Icon, active }) => (
                                <SidebarMenuItem key={label}>
                                    <SidebarMenuButton
                                        tooltip={label}
                                        aria-current={active ? "page" : undefined}
                                        className={`${itemBase} ${active ? itemActive : itemInactive}`}
                                    >
                                        <Icon size={14} weight="bold" />
                                        <span>{label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-neutral-800 p-3.5 shadow-[0_-1.2px_0_0_var(--color-neutral-950)] group-data-[collapsible=icon]:p-2">
                <SidebarMenu className="gap-1">
                    {footerItems.map(({ label, icon: Icon }) => (
                        <SidebarMenuItem key={label}>
                            <SidebarMenuButton
                                tooltip={label}
                                className={`${itemBase} ${itemInactive}`}
                            >
                                <Icon size={14} weight="bold" />
                                <span>{label}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}