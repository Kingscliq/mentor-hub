import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> My Project
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Schedule Meeting
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}