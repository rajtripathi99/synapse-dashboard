import { AgentTraces } from "@/components/_overview/AgentTraces"
import { ExecutionTable } from "@/components/_overview/ExecutionTable"
import { KpiCards } from "@/components/_overview/KpiCards"
import { PageHeading, TimeRangeButton } from "@/components/_overview/PageHeading"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <PageHeading
        title="Command Center"
        description="Production systems are healthy across 3 active workflows."
        actions={<TimeRangeButton />}
      />
      <KpiCards />
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_282px]">
        <ExecutionTable />
        <AgentTraces />
      </div>
    </div>
  )
}