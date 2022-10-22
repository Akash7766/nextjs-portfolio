import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../Data/projects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
