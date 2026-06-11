import { createServerSupabase } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createServerSupabase();

  const { data, error } = await supabase
    .from("stores")
    .select("*")
    .order("name");

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json(data);
}
