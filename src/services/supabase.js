import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mvdjekfduqswokzjagzi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12ZGpla2ZkdXFzd29remphZ3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1OTIyMjYsImV4cCI6MjA3ODE2ODIyNn0.2FnAFzf6nS5I00cbMcsXmby8Q9yjJUErBHUjgKluvSY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
