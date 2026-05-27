import { logger } from '@/lib/logger';
import { getRequestContext } from '@/lib/track';

export async function POST(req: Request) {
  function getKyivTime() {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Kyiv',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date());
  }

  try {
    const body = await req.json();

    const context = await getRequestContext();

    logger.info({
      event: body.event,
      route: body.route,
      context,
      time_kyiv: getKyivTime(),
    });

    return Response.json({ ok: true });
  } catch (error) {
    logger.error({
      error,
      time_kyiv: getKyivTime(),
    });

    return Response.json(
      { ok: false },
      { status: 500 }
    );
  }
}
