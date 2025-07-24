import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { StatusCards } from "@/features/dashboard/components/StatusCard"
import { GroupInfo } from "@/features/dashboard/components/GroupInfo"
import { RecentActivity } from "@/features/dashboard/components/RecentActivity"
import { QuickActions } from "@/features/dashboard/components/QuickActions"

export default function MenteeDashboard() {
  return (
    <div className="min-h-screen bg-muted">
      <DashboardHeader />
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold mb-1">Welcome back, Michael Adams!</h2>
        <p className="text-muted-foreground mb-6">Here&apos;s what&apos;s happening in your mentorship journey.</p>
        <StatusCards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <GroupInfo />
          <RecentActivity />
        </div>
        <QuickActions />
      </div>
    </div>
  )
}