
import { CheckCircle, FileText, Star, Target } from 'lucide-react';
import { siteImages } from '@/lib/images';
import type { Activity, TeamMember } from './types';

export const initialActivities: Activity[] = [
  {
    icon: Target,
    title: "Project Alpha Milestone",
    description: "You completed the 'Initial Scoping' phase. - 2 hours ago"
  },
  {
    icon: FileText,
    title: "Performance Review",
    description: "Your self-assessment has been submitted. - 1 day ago"
  },
  {
    icon: Star,
    title: "New Training Module",
    description: "You've been assigned 'Advanced AI Ethics'. - 3 days ago"
  }
];

export const teamUpdates = [
    {
        author: 'Jane Smith',
        avatar: siteImages.teamMember2.src,
        hint: siteImages.teamMember2.hint,
        update: 'Hey team, just a reminder that the Q3 planning documents are due by EOD Friday. Let\'s get it done!',
        timestamp: '2h ago'
    },
    {
        author: 'John Doe',
        avatar: siteImages.teamMember1.src,
        hint: siteImages.teamMember1.hint,
        update: 'Great work on the Project Alpha launch! The client is thrilled with the results. Well done everyone.',
        timestamp: '1d ago'
    }
];

export const teamMembers: TeamMember[] = [
  { name: 'John Doe', title: 'Founder & CEO', image: siteImages.teamMember1, linkedinUrl: '#' },
  { name: 'Jane Smith', title: 'Chief Technology Officer', image: siteImages.teamMember2, linkedinUrl: '#' },
  { name: 'Peter Jones', title: 'Head of Solutions', image: siteImages.teamMember3, linkedinUrl: '#' },
];

export const chartData = [
  { month: 'January', progress: 65 },
  { month: 'February', progress: 72 },
  { month: 'March', progress: 85 },
];
