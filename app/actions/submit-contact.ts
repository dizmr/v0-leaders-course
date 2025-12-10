"use server"

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  message: string
}) {
  console.log("[v0] submitContactForm called with:", formData)

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("[v0] Supabase URL:", supabaseUrl ? "exists" : "missing")
  console.log("[v0] Supabase Key:", supabaseKey ? "exists" : "missing")

  if (!supabaseUrl || !supabaseKey) {
    console.log("[v0] Database configuration missing")
    return { success: false, error: "Database configuration missing" }
  }

  try {
    const requestUrl = `${supabaseUrl}/rest/v1/users`
    console.log("[v0] Making request to:", requestUrl)

    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message || null,
      }),
    })

    console.log("[v0] Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Error response:", errorText)
      try {
        const errorData = JSON.parse(errorText)
        return { success: false, error: errorData.message || errorData.error || "Database error" }
      } catch {
        return { success: false, error: `HTTP ${response.status}: ${errorText}` }
      }
    }

    const data = await response.json()
    console.log("[v0] Success! Data:", data)
    return { success: true, data }
  } catch (error: any) {
    console.log("[v0] Catch error:", error)
    return { success: false, error: error.message || "Request failed" }
  }
}
