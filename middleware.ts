import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const username = process.env.ADMIN_DASHBOARD_USERNAME || "admin";
  const password = process.env.ADMIN_DASHBOARD_PASSWORD;

  if (!password) {
    return new NextResponse("Admin dashboard is disabled. Set ADMIN_DASHBOARD_PASSWORD in Vercel.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const authorization = request.headers.get("authorization");
  if (authorization?.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(":");
      const suppliedUser = decoded.slice(0, separator);
      const suppliedPassword = decoded.slice(separator + 1);
      if (suppliedUser === username && suppliedPassword === password) {
        return NextResponse.next();
      }
    } catch {
      // Fall through to the authentication challenge.
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="CopyReply Growth Dashboard"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = { matcher: ["/admin/:path*"] };
