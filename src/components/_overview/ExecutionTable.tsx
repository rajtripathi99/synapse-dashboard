"use client"
import { CaretDownIcon, CheckIcon, DotsThreeIcon } from "@phosphor-icons/react"
import { useState } from "react"

export type AgentStatus = "running" | "rate-limited" | "failed"

export type AgentExecution = {
    id: string
    agent: string
    task: string
    status: AgentStatus
    contextUsage: number
}

export const executions: AgentExecution[] = [
    { id: "nova-scout", agent: "Nova Scout", task: "Scan competitor signals", status: "running", contextUsage: 55 },
    { id: "echo-analyst", agent: "Echo Analyst", task: "Summarize support trends", status: "rate-limited", contextUsage: 44 },
    { id: "orion-planner", agent: "Orion Planner", task: "Draft weekly briefing", status: "running", contextUsage: 74 },
    { id: "delta-writer", agent: "Delta Writer", task: "Audit campaign metrics", status: "running", contextUsage: 50 },
    { id: "pixel-auditor", agent: "Pixel Auditor", task: "Review pricing changes", status: "failed", contextUsage: 25 },
    { id: "sage-monitor", agent: "Sage Monitor", task: "Monitor brand mentions", status: "running", contextUsage: 54 },
    { id: "vector-ops", agent: "Vector Ops", task: "Classify inbound leads", status: "rate-limited", contextUsage: 30 },
    { id: "luna-research", agent: "Luna Research", task: "Map customer feedback", status: "rate-limited", contextUsage: 89 },
    { id: "atlas-review", agent: "Atlas Review", task: "Validate CRM records", status: "failed", contextUsage: 46 },
    { id: "nimbus-agent", agent: "Nimbus Agent", task: "Prepare launch insights", status: "running", contextUsage: 66 },
    { id: "ember-labs", agent: "Ember Labs", task: "Flag churn indicators", status: "failed", contextUsage: 57 },
]

const statusStyles: Record<AgentStatus, { label: string; badge: string; dot: string }> = {
    running: { label: "Running", badge: "bg-green-950 text-green-500", dot: "bg-green-500" },
    "rate-limited": { label: "Rate Limited", badge: "bg-yellow-950 text-yellow-500", dot: "bg-yellow-500" },
    failed: { label: "Failed", badge: "bg-red-950 text-red-500", dot: "bg-red-500" },
}

const headCell =
    "h-8 border-b border-neutral-700 bg-neutral-900 px-4 py-2 text-left text-xs font-medium leading-[normal] tracking-[-0.24px] whitespace-nowrap text-neutral-500"

const bodyCell =
    "h-10 border-b border-neutral-700 px-4 py-2 text-sm font-medium leading-[normal] tracking-[-0.28px] whitespace-nowrap text-neutral-200"

function TableCheckbox({
    checked,
    onChange,
    label,
}: {
    checked: boolean
    onChange: () => void
    label: string
}) {
    return (
        <span className="relative inline-flex size-4 shrink-0">
            <input
                type="checkbox"
                aria-label={label}
                checked={checked}
                onChange={onChange}
                className="peer size-4 cursor-pointer appearance-none rounded-[5px] border border-neutral-700 bg-neutral-800 outline-none checked:border-purple-700 checked:bg-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500/60"
            />
            <CheckIcon
                size={10}
                weight="bold"
                className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
            />
        </span>
    )
}

function StatusBadge({ status }: { status: AgentStatus }) {
    const { label, badge, dot } = statusStyles[status]
    return (
        <span
            className={`inline-flex h-6 items-center gap-1.5 rounded-[40px] px-2 py-1 text-xs font-medium leading-[normal] tracking-[-0.24px] ${badge}`}
        >
            <span className={`size-1 rounded-full ${dot}`} />
            {label}
        </span>
    )
}

function ContextBar({ value, label }: { value: number; label: string }) {
    const width = Math.min(100, Math.max(0, value))
    return (
        <div
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={width}
            className="h-2.5 w-full rounded-[4px] bg-purple-950 p-px"
        >
            <div
                className="h-2 rounded-[3px] bg-linear-to-b from-purple-500 to-purple-700 shadow-[0_0_0_1px_var(--color-purple-700),inset_0_0.5px_0_0_rgba(233,212,255,0.35)]"
                style={{ width: `${width}%` }}
            />
        </div>
    )
}

type ExecutionTableProps = {
    rows?: AgentExecution[]
}

export function ExecutionTable({ rows = executions }: ExecutionTableProps) {
    const [selected, setSelected] = useState<Set<string>>(new Set())

    const allSelected = rows.length > 0 && selected.size === rows.length

    const toggleAll = () => {
        setSelected(allSelected ? new Set() : new Set(rows.map((row) => row.id)))
    }

    const toggleRow = (id: string) => {
        setSelected((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <section className="flex min-w-0 flex-col gap-1 overflow-clip rounded-[10px] border border-neutral-800 bg-neutral-900 shadow-[0_0_0_1.5px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex min-w-0 flex-col justify-center gap-0.5">
                    <h2 className="text-base font-semibold leading-[normal] tracking-[-0.32px] text-neutral-200">
                        Real-time Execution
                    </h2>
                    <p className="text-sm font-medium leading-[normal] tracking-[-0.28px] text-neutral-500">
                        Live agent workload across this cluster
                    </p>
                </div>
                <button
                    type="button"
                    className="flex shrink-0 items-center gap-2 rounded-[10px] bg-neutral-800 p-2 text-xs font-medium leading-[normal] tracking-[-0.24px] text-white shadow-[0_0_0_1px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(161,161,161,0.25)] outline-none hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-500"
                >
                    View all
                    <CaretDownIcon size={14} weight="bold" />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[690px]">
                    <thead>
                        <tr>
                            <th scope="col" className={`${headCell} w-[148px]`}>
                                <div className="flex items-center gap-1.5">
                                    <TableCheckbox
                                        checked={allSelected}
                                        onChange={toggleAll}
                                        label="Select all agents"
                                    />
                                    Agent
                                </div>
                            </th>
                            <th scope="col" className={`${headCell} w-[192px]`}>
                                Assigned Task
                            </th>
                            <th scope="col" className={`${headCell} w-[119px]`}>
                                Status
                            </th>
                            <th scope="col" className={headCell}>
                                Context Usage
                            </th>
                            <th scope="col" className={`${headCell} w-12 text-center`}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr:last-child>td]:border-b-0">
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td className={bodyCell}>
                                    <div className="flex items-center gap-2.5">
                                        <TableCheckbox
                                            checked={selected.has(row.id)}
                                            onChange={() => toggleRow(row.id)}
                                            label={`Select ${row.agent}`}
                                        />
                                        {row.agent}
                                    </div>
                                </td>
                                <td className={bodyCell}>{row.task}</td>
                                <td className={bodyCell}>
                                    <StatusBadge status={row.status} />
                                </td>
                                <td className={bodyCell}>
                                    <ContextBar
                                        value={row.contextUsage}
                                        label={`${row.agent} context usage`}
                                    />
                                </td>
                                <td className={`${bodyCell} text-center`}>
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${row.agent}`}
                                        className="inline-flex items-center justify-center rounded-md text-neutral-400 outline-none hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-neutral-500"
                                    >
                                        <DotsThreeIcon size={14} weight="bold" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}