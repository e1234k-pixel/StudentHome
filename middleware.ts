import { NextResponse, type NextRequest } from "next/server"

import { updateSupabaseSession } from "@/lib/supabase/middleware"

function redirectWithCookies(
  response: NextResponse,
  request: NextRequest,
  pathname: string
) {
  const redirectResponse = NextResponse.redirect(new URL(pathname, request.url))

  response.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie.name, cookie.value)
  })

  return redirectResponse
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { response, user } = await updateSupabaseSession(request)

  const isProtectedRoute =
    pathname === "/dashboard" || pathname.startsWith("/students")
  const isLoginRoute = pathname === "/login"

  if (isProtectedRoute && !user) {
    const loginUrl = new URL("/login", request.url)

    if (pathname !== "/dashboard") {
      loginUrl.searchParams.set("next", pathname)
    }

    return redirectWithCookies(response, request, loginUrl.pathname + loginUrl.search)
  }

  if (isLoginRoute && user) {
    return redirectWithCookies(response, request, "/dashboard")
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/students/:path*", "/login"],
}
