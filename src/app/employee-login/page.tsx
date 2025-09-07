import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function EmployeeLoginPage() {
  return (
    <div className="flex items-center justify-center py-20 bg-background min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-md mx-4 border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold font-headline">Employee Login</CardTitle>
          <CardDescription className="font-body">Access your employee dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 font-body">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="employee@talentxp.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
