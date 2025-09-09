
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamUpdates } from '@/lib/data';
import { MessageSquare, User } from 'lucide-react';

const TeamUpdates = () => (
  <Card>
    <CardHeader>
      <CardTitle className="font-headline flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
        Team Updates
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {teamUpdates.map((update, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={update.avatar} alt={update.author} data-ai-hint={update.hint} />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">{update.author} <span className="text-xs text-muted-foreground font-normal ml-1">{update.timestamp}</span></p>
              <p className="text-sm text-muted-foreground">{update.update}</p>
            </div>
          </div>
      ))}
    </CardContent>
  </Card>
);

export default TeamUpdates;
