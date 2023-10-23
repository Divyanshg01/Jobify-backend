import { nanoid } from "nanoid";
import JobModel from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
//GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find({});

  res.status(StatusCodes.OK).json({ jobs });
};

//CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await JobModel.create({ company, position });

  res.status(StatusCodes.CREATED).json({ job });
};

// GET JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id);

  if (!job) {
    throw new NotFoundError("No job with the current id");
  }
  res.status(StatusCodes.OK).json({ job });
};

//UPDATE JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(404).json({ msg: "no job with this id" });
  }
  res.status(StatusCodes.OK).json({ msg: "job modified", updatedJob });
};

//DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id);

  if (!removedJob) {
    return res.status(404).json({ msg: "no job with this id" });
  }

  res.status(StatusCodes.OK).json({ msg: "job deleted", removedJob });
};
