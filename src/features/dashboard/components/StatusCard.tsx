import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, MessageSquare, Clock } from "lucide-react"

export function StatusCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <CardTitle className="text-base">Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">In Progress</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <CardTitle className="text-base">Group Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">3</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          <CardTitle className="text-base">Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">3</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          <CardTitle className="text-base">Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">2/5</div>
        </CardContent>
      </Card>
    </div>
  )
}