import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "frotend" },
  { id: nanoid(), company: "apple", position: "frotend" },
];

//GET ALL JOBS
export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

//CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide position and company" });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);

  res.status(201).json({ job });
};

// GET JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "no job with this id" });
  }
  res.status(200).json({ job });
};

//UPDATE JOB
export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "Please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "no job with this id" });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
};

//DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "no job with this id" });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job modified", job });
};