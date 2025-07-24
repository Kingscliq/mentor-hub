import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function GroupInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <span className="text-muted-foreground">Group Name:</span> <span className="font-medium">AI Research Group 1</span>
        </div>
        <div className="mb-2">
          <span className="text-muted-foreground">Mentor:</span> <span className="font-medium">Dr. Musa Ibrahim</span>
        </div>
        <div>
          <span className="text-muted-foreground">Members:</span> <span className="font-medium">3 Students</span>
        </div>
      </CardContent>
    </Card>
  )
}