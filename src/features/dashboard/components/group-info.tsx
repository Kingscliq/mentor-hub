import Box from '@/components/ui/box';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function GroupInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Box className="mb-2">
          <Box as="span" className="text-muted-foreground">
            Group Name:
          </Box>{' '}
          <Box as="span" className="font-medium">
            AI Research Group 1
          </Box>
        </Box>
        <Box className="mb-2">
          <Box as="span" className="text-muted-foreground">
            Mentor:
          </Box>{' '}
          <Box as="span" className="font-medium">
            Dr. Musa Ibrahim
          </Box>
        </Box>
        <Box>
          <Box as="span" className="text-muted-foreground">
            Members:
          </Box>{' '}
          <Box as="span" className="font-medium">
            3 Students
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
