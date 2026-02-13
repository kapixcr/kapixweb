import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const upstream = await fetch("https://cohete.kapix.co.cr/api/noticias", {
      headers: { accept: "application/json" },
      cache: "no-store",
    })

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: "upstream_error", status: upstream.status })
      return
    }

    const data = await upstream.json()
    res.status(200).json(Array.isArray(data) ? data : [])
  } catch {
    res.status(200).json([])
  }
}

