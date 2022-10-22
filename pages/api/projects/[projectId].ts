import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../Data/projects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId } = req.query;
  const project = projects.find((project) => project._id == Number(projectId));
  res.status(200).json(project);
}
