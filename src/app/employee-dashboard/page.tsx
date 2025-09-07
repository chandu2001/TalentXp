import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Briefcase, CheckCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) => (
  <Card className="border">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const ActivityItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <CheckCircle className="h-5 w-5 text-green-500" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function EmployeeDashboardPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground font-headline">Welcome Back, Employee</h1>
          <p className="mt-2 text-lg text-muted-foreground font-body">Here's a snapshot of your current progress and activities.</p>
        </header>

        <main className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6 font-headline">Your Performance Metrics</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard icon={BarChart} title="Quarterly Goals" value="75%" />
              <StatCard icon={Briefcase} title="Active Projects" value="4" />
              <StatCard icon={CheckCircle} title="Tasks Completed" value="128" />
            </div>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="font-headline">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ActivityItem
                    title="Project Alpha Milestone"
                    description="You completed the 'Initial Scoping' phase. - 2 hours ago"
                  />
                  <ActivityItem
                    title="Performance Review"
                    description="Your self-assessment has been submitted. - 1 day ago"
                  />
                   <ActivityItem
                    title="New Training Module"
                    description="You've been assigned 'Advanced AI Ethics'. - 3 days ago"
                  />
                </CardContent>
              </Card>
              <Card className="border">
                <CardHeader>
                  <CardTitle className="font-headline">Team Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No new updates from the team at the moment. Check back later!</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
