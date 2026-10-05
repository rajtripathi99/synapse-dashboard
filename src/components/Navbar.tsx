"use client"
import {
    BellIcon,
    CaretRightIcon,
    CommandIcon,
    MagnifyingGlassIcon,
    PlusIcon,
} from "@phosphor-icons/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { Button } from "./ui/button"

export default function Navbar() {
    return (
        <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-neutral-950 bg-neutral-900 px-4 py-3.5 text-neutral-200 shadow-[0_1.2px_0_0_var(--color-neutral-800)]">
            <Breadcrumb>
                <BreadcrumbList className="gap-2 text-sm font-medium tracking-[-0.28px] text-neutral-500 sm:gap-2">
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            render={<a href="/operations" />}
                            className="text-neutral-500 hover:text-neutral-200"
                        >
                            Operations
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-neutral-500">
                        <CaretRightIcon size={14} weight="bold" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-neutral-200">Overview</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex w-[444px] items-center gap-2">
                <label className="flex h-[30px] min-w-0 flex-1 items-center justify-between gap-2.5 rounded-[10px] border border-neutral-700 bg-neutral-800 px-2 focus-within:border-neutral-500">
                    <div className="flex min-w-0 flex-1 items-center gap-2.5">
                        <MagnifyingGlassIcon size={14} weight="bold" className="shrink-0 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search agents"
                            className="min-w-0 flex-1 bg-transparent text-sm font-medium tracking-[-0.28px] text-neutral-200 outline-none placeholder:text-neutral-400"
                        />
                    </div>
                    <kbd className="flex shrink-0 items-center rounded-[4px] border border-neutral-600 bg-neutral-700 px-0.5 text-[10px] tracking-[-0.2px] text-neutral-400">
                        <CommandIcon size={10} weight="bold" />
                        <span>+ K</span>
                    </kbd>
                </label>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Notifications"
                        className="size-[30px] shrink-0 rounded-[10px] bg-neutral-800 p-2 text-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(161,161,161,0.25)] hover:bg-neutral-700 hover:text-neutral-200 [&_svg]:size-3.5"
                    >
                        <BellIcon size={14} weight="bold" />
                    </Button>
                    <button
                        type="button"
                        className="flex h-[30px] items-center gap-1 rounded-[10px] bg-linear-to-b from-purple-500 to-purple-700 p-2 text-sm font-medium tracking-[-0.28px] text-neutral-200 shadow-[0_0_0_1px_var(--color-purple-700),inset_0_1px_0_0_rgba(233,212,255,0.35)] hover:brightness-110 cursor-pointer"
                    >
                        <PlusIcon size={14} weight="bold" />
                        Deploy New Agent
                    </button>
                </div>
            </div>
        </div>
    )
}