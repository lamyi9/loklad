import type { APIRoute } from "astro";
import { createMediaHandler } from "next-tinacms-s3/dist/handlers";
import { isAuthorized } from "@tinacms/auth";

const handler = createMediaHandler({
  config: {
    credentials: {
      accessKeyId: import.meta.env.S3_ACCESS_KEY || "",
      secretAccessKey: import.meta.env.S3_SECRET_KEY || "",
    },
    region: import.meta.env.S3_REGION,
  },
  bucket: import.meta.env.S3_BUCKET || "",
  authorized: async (req, _res) => {
    if (import.meta.env.DEV) {
      return true;
    }
    try {
      const user = await isAuthorized(req);
      return user && user.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});

// Convert Astro request to Express-like req/res
function toExpressReq(request: Request) {
  const url = new URL(request.url);
  const query: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    query[key] = value;
  });
  return {
    query,
    method: request.method,
    headers: Object.fromEntries(request.headers),
    body: request.body,
  };
}

function toExpressRes() {
  let statusCode = 200;
  let responseBody: any = null;
  let responseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const res: any = {
    status(code: number) {
      statusCode = code;
      return res;
    },
    json(body: any) {
      responseBody = body;
      return res;
    },
    setHeader(key: string, value: string) {
      responseHeaders[key] = value;
      return res;
    },
    getResponse() {
      return new Response(JSON.stringify(responseBody), {
        status: statusCode,
        headers: responseHeaders,
      });
    },
  };
  return res;
}

async function handleRequest(request: Request): Promise<Response> {
  const req = toExpressReq(request);
  const res = toExpressRes();
  await handler(req, res);
  return res.getResponse();
}

export const GET: APIRoute = ({ request }) => handleRequest(request);
export const POST: APIRoute = ({ request }) => handleRequest(request);
export const DELETE: APIRoute = ({ request }) => handleRequest(request);