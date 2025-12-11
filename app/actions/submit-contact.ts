"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  message: string
}) {
  const cookieStore = await cookies()

  const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {}
      },
    },
  })

  try {
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message || null,
        },
      ])
      .select()

    if (error) {
      console.error("[v0] Supabase error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error: any) {
    console.error("[v0] Server action error:", error)
    return { success: false, error: error.message || "Ошибка сервера" }
  }
}
