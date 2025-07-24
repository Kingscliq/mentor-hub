import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-8">
        <span className="font-semibold text-lg">Dashboard</span>
        <span className="text-muted-foreground cursor-pointer">Messages</span>
      </div>
      <div className="flex items-center gap-6">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Michael Adams</div>
            <Badge variant="secondary" className="text-xs">Mentee</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}