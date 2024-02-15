import { NextResponse, type NextRequest } from "next/server";

import { analytics } from "@/utils/analytics";

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname === "/") {
    try {
      analytics.track("pageview", { page: "/", country: request.geo?.country });
    } catch (error) {
      console.error(error);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
