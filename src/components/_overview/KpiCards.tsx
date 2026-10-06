"use client"
import {
    CpuIcon,
    CurrencyCircleDollarIcon,
    LightningIcon,
    PulseIcon,
} from "@phosphor-icons/react"
import { KpiCard, type KpiCardProps } from "./KpiCard"

const cards: KpiCardProps[] = [
    {
        label: "Active Agents",
        value: "42 / 50",
        icon: PulseIcon,
        tone: "green",
        details: [{ text: "Running now" }],
    },
    {
        label: "Token Consumption",
        value: "12.4M",
        icon: LightningIcon,
        tone: "yellow",
        details: [
            { text: "↓ 18.2%", tone: "negative" },
            { text: " vs yesterday" },
        ],
    },
    {
        label: "Average Latency",
        value: "382ms",
        icon: CpuIcon,
        tone: "purple",
        details: [
            { text: "↑ 14ms", tone: "positive" },
            { text: " improvement" },
        ],
    },
    {
        label: "Cost Run-Rate",
        value: "$1,840.50",
        icon: CurrencyCircleDollarIcon,
        tone: "sky",
        details: [
            { text: "Per month" },
            { text: " 76% budget", tone: "positive" },
        ],
    },
]

export function KpiCards() {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
                <KpiCard key={card.label} {...card} />
            ))}
        </div>
    )
}