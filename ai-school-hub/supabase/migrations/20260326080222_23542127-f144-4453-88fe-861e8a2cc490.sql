
CREATE TABLE public.schedule_calls (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  school_name TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);


ALTER TABLE public.schedule_calls ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Anyone can submit a call request"
  ON public.schedule_calls
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);


CREATE POLICY "Authenticated users can view call requests"
  ON public.schedule_calls
  FOR SELECT
  TO authenticated
  USING (true);