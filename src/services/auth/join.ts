import { createClient } from "@/utils/supabase/server";

export async function signUpWithEmail(email: string, password: string, name: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
      },
    },
  });
  console.log(data);
  if (error && process.env.NODE_ENV === "development") console.error(error);
}
