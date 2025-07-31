import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Box from '@/components/ui/box';
import { Bell } from 'lucide-react';

export function DashboardHeader() {
  return (
    <Box className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <Box className="flex items-center gap-8">
        <Box as="span" className="font-semibold text-lg">
          Dashboard
        </Box>
        <Box as="span" className="text-muted-foreground cursor-pointer">
          Messages
        </Box>
      </Box>
      <Box className="flex items-center gap-6">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <Box className="flex items-center gap-2">
          <Avatar className="w-8 h-8" src={'Hello'} fallBack="MA" />
          <Box>
            <Box as="span" className="font-medium">
              Michael Adams
            </Box>
            <Badge variant="secondary" className="text-xs">
              Mentee
            </Badge>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
