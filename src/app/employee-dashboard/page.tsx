
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { LogOut } from 'lucide-react';
import type { Activity } from '@/lib/types';

import { Button } from '@/components/ui/button';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardChart from '@/components/dashboard/DashboardChart';
import QuickActions from '@/components/dashboard/QuickActions';
import TeamUpdates from '@/components/dashboard/TeamUpdates';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { initialActivities } from '@/lib/data';

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
          <DashboardStats />
          
          <section className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <DashboardChart />
            </div>
            <div className="md:col-span-2 space-y-8">
              <QuickActions onTaskAdd={handleAddTask} />
              <TeamUpdates />
            </div>
          </section>

          <RecentActivity activities={activities} />
        </main>
      </div>
    </div>
  );
}
