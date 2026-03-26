import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  school_name: z.string().trim().max(200).optional(),
  message: z.string().trim().max(1000).optional(),
});

interface ScheduleCallModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ScheduleCallModal({ open, onClose }: ScheduleCallModalProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      school_name: (formData.get("school_name") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
    };

    const result = formSchema.safeParse(raw);
    if (!result.success) {
      toast({ title: "Validation error", description: result.error.errors[0].message, variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("schedule_calls").insert({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        school_name: result.data.school_name || null,
        message: result.data.message || null,
      });
      if (error) throw error;

      toast({ title: "Thank you!", description: "We'll get back to you soon to schedule your call." });
      onClose();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      toast({ title: "Error", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md mx-4 bg-card rounded-2xl border border-border shadow-xl p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-foreground mb-1">Schedule a Call</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Fill in your details and we'll reach out to book a free demo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sc-name">Name *</Label>
            <Input id="sc-name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sc-email">Email *</Label>
            <Input id="sc-email" name="email" type="email" placeholder="you@school.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sc-phone">Phone</Label>
            <Input id="sc-phone" name="phone" type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sc-school">School Name</Label>
            <Input id="sc-school" name="school_name" placeholder="Your school" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sc-message">Message</Label>
            <Textarea id="sc-message" name="message" placeholder="Tell us about your needs..." rows={3} />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </div>
  );
}
