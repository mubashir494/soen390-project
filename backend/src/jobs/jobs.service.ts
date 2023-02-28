import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "src/models/job.entity";
import { Skill } from "src/models/skill.entity";
import { User } from "src/models/user.entity";
import { Recruiter } from "src/models/user_types/recruiter.entity";
import { Repository } from "typeorm";
import { Jobs } from "./jobs.types";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Recruiter)
    private readonly recruiterRepository: Repository<Recruiter>,
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>
  ) {}

  
  async createJob(data: Jobs.AddJobRequest, recruiter: Recruiter) {
    const job = new Job();
    Object.assign(job, data);
   
    const skills: Skill[] = [];
    data.skills
      .split(",")
      .filter((s) => s !== "")
      .forEach((s: string, i: number): void => {
        skills[i] = new Skill();
        skills[i].title = s;
      });

    if (skills.length === 0) return;

    job.skills = [...skills];

    recruiter.jobs = [...recruiter.jobs, job];

    await this.recruiterRepository.save(recruiter);
  
  }
}
