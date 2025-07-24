import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
            Chapter 1 approved by mentor
          </li>
          <li className="flex items-center gap-2 text-orange-500">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
            Deadline approaching for Chapter 2
          </li>
          <li className="flex items-center gap-2 text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            New message from Dr. Ibrahim
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}