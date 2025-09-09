
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
} from 'recharts';
import { chartData } from '@/lib/data';

const chartConfig = {
  progress: {
    label: 'Progress',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const DashboardChart = () => (
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
);

export default DashboardChart;
