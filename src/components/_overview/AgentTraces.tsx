import { LiveIndicator } from "./KpiCard"

export type TraceEvent = {
    id: string
    time: string
    title: string
    detail: string
}

export const traceEvents: TraceEvent[] = [
    { id: "research-complete", time: "14:27:03", title: "Research complete", detail: "84 sources · 18.2k tokens" },
    { id: "index-built", time: "14:27:11", title: "Index built", detail: "12 steps done" },
    { id: "notes-merged", time: "14:27:19", title: "Notes merged", detail: "18.2k tokens" },
    { id: "draft-ready", time: "14:27:27", title: "Draft ready", detail: "84 sources" },
    { id: "checks-passed", time: "14:27:35", title: "Checks passed", detail: "12 steps" },
    { id: "report-saved", time: "14:27:43", title: "Report saved", detail: "18.2k tokens" },
    { id: "trace-closed", time: "14:27:51", title: "Trace closed", detail: "84 sources" },
]

type AgentTracesProps = {
    events?: TraceEvent[]
}

export function AgentTraces({ events = traceEvents }: AgentTracesProps) {
    return (
        <section className="flex h-full min-w-0 flex-col gap-4 overflow-clip rounded-[10px] border border-neutral-800 bg-neutral-900 shadow-[0_0_0_1.5px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex min-w-0 flex-col justify-center gap-0.5">
                    <h2 className="text-base font-semibold leading-[normal] tracking-[-0.32px] text-neutral-200">
                        Agent Traces
                    </h2>
                    <p className="text-sm font-medium leading-[normal] tracking-[-0.28px] text-neutral-500">
                        Live execution stream
                    </p>
                </div>
                <LiveIndicator label="Streaming" />
            </div>

            <ol className="flex flex-1 flex-col px-4 pb-4">
                {events.map((event) => (
                    <li key={event.id} className="group relative flex min-h-16 flex-1 items-center">
                        <time
                            dateTime={event.time}
                            className="w-16 shrink-0 text-sm font-medium leading-[normal] tracking-[-0.28px] text-neutral-200 tabular-nums"
                        >
                            {event.time}
                        </time>

                        <div className="relative w-8 shrink-0 self-stretch">
                            <span className="absolute left-3 top-1/2 h-full w-px -translate-x-1/2 bg-green-500 group-last:hidden" />
                            <span className="absolute left-3 top-1/2 z-10 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500" />
                        </div>

                        <div className="flex min-w-0 flex-col gap-1 py-1.5 pr-2">
                            <p className="text-sm font-medium leading-[normal] tracking-[-0.28px] text-neutral-200">
                                {event.title}
                            </p>
                            <p className="text-xs font-medium leading-[normal] tracking-[-0.24px] text-neutral-400">
                                {event.detail}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}