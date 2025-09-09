
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Activity } from '@/lib/types';

const ActivityItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 pt-1 text-primary">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const RecentActivity = ({ activities }: { activities: Activity[] }) => (
  <section>
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Recent Activity</CardTitle>
        <CardDescription>A log of your recent accomplishments and assigned tasks.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </CardContent>
    </Card>
  </section>
);

export default RecentActivity;
