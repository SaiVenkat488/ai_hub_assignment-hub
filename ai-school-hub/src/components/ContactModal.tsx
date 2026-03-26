import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
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
      subject: (formData.get("subject") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
    };

    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      toast({ title: "Validation error", description: result.error.errors[0].message, variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: result.data.name,
        email: result.data.email,
        subject: result.data.subject || null,
        message: result.data.message,
      });
      if (error) throw error;

      toast({ title: "Message Sent!", description: "We've received your message and will get back to you shortly." });
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

        <h2 className="text-xl font-bold text-foreground mb-1">Contact Us</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Have a question or feedback? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cont-name">Name *</Label>
            <Input id="cont-name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cont-email">Email *</Label>
            <Input id="cont-email" name="email" type="email" placeholder="you@school.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cont-subject">Subject</Label>
            <Input id="cont-subject" name="subject" placeholder="What's this about?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cont-message">Message *</Label>
            <Textarea id="cont-message" name="message" placeholder="Type your message here..." rows={4} required />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
