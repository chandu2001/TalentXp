
import { Briefcase, CheckCircle, Target } from 'lucide-react';
import StatCard from './StatCard';

const DashboardStats = () => (
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
);

export default DashboardStats;
