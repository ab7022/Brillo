import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateBasicInfo(userId: number, personal: any) {
  const existingBasicInfo = await prisma.basicInfo.findUnique({
    where: { userId: userId },
  });

  if (existingBasicInfo) {
    await prisma.basicInfo.update({
      where: { userId: userId },
      data: {
        first_name: personal.firstName,
        profile: personal.profile,
        last_name: personal.lastName,
        designation: personal.designation,
        intro: personal.introduction,
        shortintro: personal.introduction_short,
        city: personal.city,
        country: personal.country,
        resume: personal.resume,
      },
    });
  } else {
    await prisma.basicInfo.create({
      data: {
        userId: userId,
        first_name: personal.firstName,
        profile: personal.profile || "",
        last_name: personal.lastName,
        designation: personal.designation,
        intro: personal.introduction,
        city: personal.city,
        country: personal.country,
        resume: personal.resume,
      },
    });
  }
}

async function updateAchievement(userId: number, achievement: any) {
  const existingAchievement = await prisma.achievement.findUnique({
    where: { userId: userId },
  });

  if (existingAchievement) {
    await prisma.achievement.update({
      where: { userId: userId },
      data: {
        achievement1: achievement?.achievement1,
        achievement2: achievement?.achievement2,
        achievement3: achievement?.achievement3,
        achievement4: achievement?.achievement4,
        achievement5: achievement?.achievement5,
        achievement6: achievement?.achievement6,
      },
    });
  } else {
    await prisma.achievement.create({
      data: {
        userId: userId,
        achievement1: achievement?.achievement1,
        achievement2: achievement?.achievement2,
        achievement3: achievement?.achievement3,
        achievement4: achievement?.achievement4,
        achievement5: achievement?.achievement5,
        achievement6: achievement?.achievement6,
      },
    });
  }
}

async function updateSocials(userId: number, socialProfiles: any) {
  try {
    const existingSocial = await prisma.socialProfiles.findUnique({
      where: { userId },
    });

    if (existingSocial) {
      await prisma.socialProfiles.update({
        where: { userId },
        data: {
          twitter: socialProfiles.twitter || existingSocial.twitter,
          linkedin: socialProfiles.linkedin || existingSocial.linkedin,
          github: socialProfiles.github || existingSocial.github,
          email: socialProfiles.email || existingSocial.email,
          phone: socialProfiles.phone || existingSocial.phone,
        },
      });
    } else {
      await prisma.socialProfiles.create({
        data: {
          userId,
          twitter: socialProfiles.twitter || "",
          linkedin: socialProfiles.linkedin || "",
          github: socialProfiles.github || "",
          email: socialProfiles.email || "",
          phone: socialProfiles.phone || "",
        },
      });
    }
  } catch (error) {
    console.error("Error updating social profiles:", error);
    throw error;
  }
}
async function updateEducation(userId: number, education: any) {
  const existingEducation = await prisma.education.findMany({
    where: { userId: userId },
  });

  if (existingEducation) {
    await prisma.education.deleteMany({
      where: { userId: userId },
    });
  }

  for (const edu of education) {
    await prisma.education.create({
      data: {
        degree: edu.title,
        college: edu.college,
        duration: edu.duration,
        location: edu.location,
        percentage: edu.percentage,
        userId,
      },
    });
  }
}

async function updateExperience(userId: number, experience: any) {
  const existingExperience = await prisma.experience.findMany({
    where: { userId: userId },
  });

  if (existingExperience.length > 0) {
    await prisma.experience.deleteMany({
      where: { userId: userId },
    });
  }

  for (const exp of experience) {
    await prisma.experience.create({
      data: {
        company_name: exp.company_Name,
        designation: exp.designation,
        duration: exp.duration,
        location: exp.location,
        description1: exp.description1,
        description2: exp.description2,
        description3: exp.description3,
        userId,
      },
    });
  }
}

async function updateSkills(userId: number, skills: any) {
  const existingSkills = await prisma.skill.findUnique({
    where: { userId: userId },
  });

  if (existingSkills) {
    await prisma.skill.update({
      where: { userId },
      data: {
        language_soft_skills: skills.language_soft_skills || "",
        programming_technical_skills: skills.programming_technical_skills,
        software_proficiency: skills.software_proficiency || "",
        interests_others_skills: skills.interests_others_skills || "",
        business_administrative_skills:
          skills.business_administrative_skills || "",
      },
    });
  } else {
    await prisma.skill.create({
      data: {
        userId: userId,
        language_soft_skills: skills.language_soft_skills || "",
        programming_technical_skills: skills.programming_technical_skills,
        software_proficiency: skills.software_proficiency || "",
        interests_others_skills: skills.interests_others_skills || "",
        business_administrative_skills:
          skills.business_administrative_skills || "",
      },
    });
  }
}

async function updateProject(userId: number, project: any) {
  const existingProject = await prisma.project.findMany({
    where: { userId },
  });
  if (existingProject) {
    await prisma.project.deleteMany({
      where: { userId: userId },
    });
  }
  for (const proj of project) {
    await prisma.project.create({
      data: {
        userId: userId as any, // Update the type of userId to be compatible
        title: proj.title,
        techstack: proj.techStacks,
        description: proj.description,
        deployed_url: proj.deployedLink,
        github_url: proj.githubLink,
        image: proj.thumbnailUrl || "",
      },
    });
  }
}

export {
  updateBasicInfo,
  updateAchievement,
  updateEducation,
  updateExperience,
  updateSkills,
  updateProject,
  updateSocials,
};
