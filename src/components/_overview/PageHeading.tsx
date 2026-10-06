"use client"
import { CaretDownIcon, ClockIcon } from "@phosphor-icons/react"
import type { ReactNode } from "react"

type PageHeadingProps = {
    title: string
    description?: string
    actions?: ReactNode
}

export function PageHeading({ title, description, actions }: PageHeadingProps) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 flex-col justify-center gap-0.5">
                <h1 className="text-base font-semibold leading-[normal] tracking-[-0.32px] text-neutral-200">
                    {title}
                </h1>
                {description && (
                    <p className="text-sm font-medium leading-[normal] tracking-[-0.28px] text-neutral-500">
                        {description}
                    </p>
                )}
            </div>
            {actions && <div className="flex shrink-0">{actions}</div>}
        </div>
    )
}

export function TimeRangeButton({ label = "Last 24 hours" }: { label?: string }) {
    return (
        <button
            type="button"
            className="flex items-center gap-1.5 rounded-[10px] bg-neutral-800 p-2 text-xs font-medium leading-[normal] tracking-[-0.24px] text-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(161,161,161,0.25)] outline-none hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-500"
        >
            <ClockIcon size={14} weight="bold" />
            {label}
            <CaretDownIcon size={14} weight="bold" />
        </button>
    )
}