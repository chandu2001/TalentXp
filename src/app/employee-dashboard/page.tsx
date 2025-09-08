
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart,
  Briefcase,
  CheckCircle,
  LogOut,
  PlusCircle,
  Settings,
  Target,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
} from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { format } from 'date-fns';

const chartData = [
  { month: 'January', progress: 65 },
  { month: 'February', progress: 72 },
  { month: 'March', progress: 85 },
];

const chartConfig = {
  progress: {
    label: 'Progress',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const StatCard = ({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const ActivityItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 pt-1">
      <CheckCircle className="h-5 w-5 text-green-500" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function EmployeeDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.replace('/employee-login');
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    toast.success('Signed out successfully.');
    router.push('/employee-login');
  };

  return (
    <div className="py-20 bg-secondary/50 min-h-[calc(100vh-10rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-4xl font-bold text-foreground font-headline">
                Welcome Back!
              </h1>
              <p className="mt-1 text-lg text-muted-foreground font-body">
                Here's your performance snapshot for {format(new Date(), 'MMMM d, yyyy')}.
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </header>

        <main className="space-y-12">
          <section>
            <div className="grid gap-6 md:grid-cols-3">
              <StatCard
                icon={Target}
                title="Quarterly Goals Met"
                value="75%"
                description="On track to meet Q2 targets"
              />
              <StatCard
                icon={Briefcase}
                title="Active Projects"
                value="4"
                description="2 projects in final review"
              />
              <StatCard
                icon={CheckCircle}
                title="Tasks Completed (Q2)"
                value="128"
                description="+15% from last quarter"
              />
            </div>
          </section>
          
          <section className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-headline">Quarterly Goal Progress</CardTitle>
                  <CardDescription>
                    A visual summary of your goal completion this quarter.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          />
                        <YAxis />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent />}
                          />
                        <Bar
                          dataKey="progress"
                          fill="var(--color-progress)"
                          radius={8}
                          />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 space-y-8">
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> New Task</Button>
                  <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Team Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No new updates from the team at the moment. Check back later!
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Recent Activity</CardTitle>
                <CardDescription>A log of your recent accomplishments and assigned tasks.</CardDescription>
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
          </section>
        </main>
      </div>
    </div>
  );
}

    