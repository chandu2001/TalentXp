
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { PlusCircle, Settings, CheckCircle } from 'lucide-react';
import type { Activity } from '@/lib/types';

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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      icon: CheckCircle,
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

const QuickActions = ({ onTaskAdd }: { onTaskAdd: (task: Activity) => void }) => (
  <Card>
    <CardHeader>
      <CardTitle className="font-headline">Quick Actions</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-2 gap-4">
      <NewTaskForm onTaskAdd={onTaskAdd} />
      <SettingsDialog />
    </CardContent>
  </Card>
);

export default QuickActions;
