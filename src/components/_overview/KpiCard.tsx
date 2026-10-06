"use client"
import type { Icon } from "@phosphor-icons/react"

type Tone = "green" | "yellow" | "purple" | "sky"
type DetailTone = "muted" | "positive" | "negative"

export type KpiDetail = {
    text: string
    tone?: DetailTone
}

export type KpiCardProps = {
    label: string
    value: string
    icon: Icon
    tone: Tone
    live?: boolean
    details: KpiDetail[]
}

const iconTones: Record<Tone, string> = {
    green: "from-green-500 to-green-600 shadow-[0_4px_4px_0_rgba(0,193,76,0.25),0_0_0_1px_var(--color-green-800)]",
    yellow: "from-yellow-500 to-yellow-600 shadow-[0_4px_4px_0_rgba(235,171,0,0.25),0_0_0_1px_var(--color-yellow-800)]",
    purple: "from-purple-500 to-purple-600 shadow-[0_4px_4px_0_rgba(170,63,254,0.25),0_0_0_1px_var(--color-purple-800)]",
    sky: "from-sky-500 to-sky-600 shadow-[0_4px_4px_0_rgba(1,162,240,0.25),0_0_0_1px_var(--color-sky-800)]",
}

const detailTones: Record<DetailTone, string> = {
    muted: "text-neutral-400",
    positive: "text-green-500",
    negative: "text-red-500",
}

export function LiveIndicator({ label = "Live" }: { label?: string }) {
    return (
        <div className="flex shrink-0 items-center gap-1">
            <span className="size-1 rounded-full bg-green-500" />
            <span className="text-xs font-medium leading-[normal] tracking-[-0.12px] text-green-500">
                {label}
            </span>
        </div>
    )
}

export function KpiCard({
    label,
    value,
    icon: IconComponent,
    tone,
    live = true,
    details,
}: KpiCardProps) {
    return (
        <div className="flex min-w-0 flex-col gap-3 overflow-clip rounded-[10px] border border-neutral-800 bg-neutral-900 p-3 shadow-[0_0_0_1.5px_rgba(0,0,0,0.25)]">
            <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                    <div
                        className={`flex size-[30px] shrink-0 items-center justify-center rounded-[10px] border border-white/25 bg-linear-to-b p-2 text-white ${iconTones[tone]}`}
                    >
                        <IconComponent size={14} weight="bold" />
                    </div>
                    <p className="truncate text-xs font-semibold leading-[normal] tracking-[-0.24px] text-neutral-400">
                        {label}
                    </p>
                </div>
                {live && <LiveIndicator />}
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold leading-[normal] tracking-[-0.36px] text-neutral-200">
                    {value}
                </p>
                <p className="text-xs font-medium leading-[normal]">
                    {details.map((detail, index) => (
                        <span key={index} className={detailTones[detail.tone ?? "muted"]}>
                            {detail.text}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}