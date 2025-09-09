
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import { useEffect, useState } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

interface Activity {
  title: string;
  description: string;
}

const initialActivities: Activity[] = [
  {
    title: "Project Alpha Milestone",
    description: "You completed the 'Initial Scoping' phase. - 2 hours ago"
  },
  {
    title: "Performance Review",
    description: "Your self-assessment has been submitted. - 1 day ago"
  },
  {
    title: "New Training Module",
    description: "You've been assigned 'Advanced AI Ethics'. - 3 days ago"
  }
];

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

const NewTaskForm = ({ onTaskAdd }: { onTaskAdd: (task: Activity) => void }) => {
  const [open, setOpen] = useState(false);
  const taskSchema = z.object({
    taskTitle: z.string().min(1, 'Task title is required.'),
  });
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: { taskTitle: string }) => {
    onTaskAdd({
      title: data.taskTitle,
      description: `You added a new task. - Just now`,
    });
    toast.success('New task added!');
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a New Task</DialogTitle>
          <DialogDescription>
            Enter the details for your new task below. It will be added to your recent activity.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} id="new-task-form" className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskTitle" className="text-right">
              Task
            </Label>
            <div className="col-span-3">
              <Input id="taskTitle" {...register("taskTitle")} placeholder="e.g. Complete project proposal" />
              {errors.taskTitle && <p className="text-destructive text-sm mt-1">{`${errors.taskTitle.message}`}</p>}
            </div>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="new-task-form">Add Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


const SettingsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>
          This is a placeholder for your settings. Functionality can be added here in the future.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);


export default function EmployeeDashboardPage() {
  const router = useRouter();
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  
  const handleAddTask = (task: Activity) => {
    setActivities(prev => [task, ...prev]);
  };

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
                  <NewTaskForm onTaskAdd={handleAddTask} />
                  <SettingsDialog />
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
                {activities.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    title={activity.title}
                    description={activity.description}
                  />
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
