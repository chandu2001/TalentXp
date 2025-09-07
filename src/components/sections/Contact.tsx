'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'AI/ML Consulting',
    'Talent Acquisition',
    'GenAI Solutions',
    'Talent Analytics',
    'Training & Development',
    'Strategic Consulting',
    'Custom Solution'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'chandu.cm200124@gmail.com',
      href: 'mailto:chandu.cm200124@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      info: '123 Business Ave, Tech City',
      href: '#'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceInterest: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        toast.error('EmailJS is not configured. Please add credentials to .env.local');
        return;
    }
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'chandu.cm200124@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          company: formData.company || 'Not specified',
          service_interest: formData.serviceInterest || 'General Inquiry',
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent! We\'ll be in touch soon.');
      setFormData({ fullName: '', email: '', company: '', serviceInterest: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Ready to transform your talent strategy with AI? Let's discuss how TalentXp can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-card p-8 rounded-xl border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-headline">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corporation" />
                </div>
                <div>
                  <Label htmlFor="serviceInterest">Service Interest</Label>
                   <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
                    <SelectTrigger id="serviceInterest">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."></Textarea>
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="mr-2 h-4 w-4" /> Send Message</>
                )}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.title} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-headline">{contact.title}</h4>
                      <a href={contact.href} className="text-gray-600 hover:text-primary transition-colors font-body">{contact.info}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
