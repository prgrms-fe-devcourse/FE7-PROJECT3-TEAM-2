import { Database } from "@/utils/supabase/supabase";

export type CategoryType = Database["public"]["Tables"]["category"]["Row"];
