// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip =
      typeof forwarded === "string"
          ? forwarded.split(",")[0] // Берём первый IP, если это строка
          : req.socket.remoteAddress || ""; // Если нет, используем remoteAddress

  res.status(200).json({ ip });
}
