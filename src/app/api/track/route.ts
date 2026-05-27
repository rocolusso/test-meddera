import { logger } from '@/lib/logger';
import { getRequestContext } from '@/lib/track';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const context = await getRequestContext();

    logger.info({
      event: body.event,
      route: body.route,
      context,
    });

    return Response.json({ ok: true });
  } catch (error) {
    logger.error({
      error,
    });

    return Response.json(
      { ok: false },
      { status: 500 }
    );
  }
}
