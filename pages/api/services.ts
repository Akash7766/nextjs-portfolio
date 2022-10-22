import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../Data/services";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(services);
}
