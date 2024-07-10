import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { ResumeData } from "../context/ResumeData";
import { useForm } from "react-hook-form";
import { ImageThumbnail, readImage } from "./ImageThumbnail";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Projects = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    projectCount,
    setProjectCount,
    deleteProjectItem,
    updateProject,
    resume,
  }: any = useContext(ResumeData);
  const [file, setFile] = useState([]);

  const { data: session } = useSession();

  resume.project = resume.project || [];

  const [thumbnailUrls, setThumbnailUrls] = useState<(string | null)[]>(
    resume.project.map((project: any) => project.thumbnailUrl || null)
  );

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        const thumbnailUrl = await readImage(selectedFile);
        setThumbnailUrls((prev) => {
          const newThumbnails = [...prev];
          newThumbnails[index] = thumbnailUrl;

          return newThumbnails;
        });
        setFile((prevFiles) => {
          const newFiles = [...prevFiles];
          newFiles[index] = selectedFile;
          return newFiles;
        });
      } catch (error) {
        console.error("Error reading image:", error);
      }
    }
  };

  const { register, handleSubmit, reset } = useForm();

  const uploadImage = async (file: File, projectNumber: number) => {
    if (file && session?.user?.email) {
      const formData = new FormData();
      formData.append("file", file);
      const sessionEmail = session.user.email;
      const fileName = `${sessionEmail}/${projectNumber}/projectImage`;
      formData.append("fileName", fileName);

      try {
        const response = await axios.post(
          "/api/S3/S3-project",
          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: sessionEmail,
            },
          }
        );

        if (response.data.success) {
          return `https://brillo-data.s3.ap-south-1.amazonaws.com/${fileName}`;
        } else {
          throw new Error("File upload failed.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file.");
      }
    } else {
      throw new Error("No file or session available.");
    }
  };

  const projectSubmit = async (data: any) => {
    try {
      const projects = await Promise.all(
        Array.from({ length: projectCount }).map(async (_, i) => {
          const fileInput = document.getElementById(
            `dropzone-file-${i}`
          ) as HTMLInputElement;
          const file = fileInput?.files?.[0];
          const thumbnailUrl = file
            ? await uploadImage(file, i + 1)
            : thumbnailUrls[i];

          return {
            title: data[`title${i}`],
            techStacks: data[`techStacks${i}`],
            deployedLink: data[`deployedLink${i}`],
            githubLink: data[`githubLink${i}`],
            description: data[`description${i}`],
            thumbnailUrl,
          };
        })
      );

      updateProject(projects);
      setactiveIndex(activeIndex + 1);
    } catch (error) {
      console.error("Error during project submission:", error);
      toast.error("Submission failed");
    }
  };
  const onSubmit = (data: any) => {
    toast.promise(projectSubmit(data), {
      loading: "Submitting...",
      success: "Submitted successfully!",
      error: "Submission failed",
    });
  };

  useEffect(() => {
    reset(
      resume.project.reduce((acc: any, project: any, index: number) => {
        acc[`title${index}`] = project.title || "";
        acc[`techStacks${index}`] = project.techStacks || "";
        acc[`deployedLink${index}`] = project.deployedLink || "";
        acc[`githubLink${index}`] = project.githubLink || "";
        acc[`description${index}`] = project.description || "";
        return acc;
      }, {})
    );

    setThumbnailUrls(
      resume.project.map((project: any) => project.thumbnailUrl || null)
    );
  }, [resume.project, reset]);

  useEffect(() => {
    if (projectCount > thumbnailUrls.length) {
      setThumbnailUrls((prev) => [
        ...prev,
        ...Array(projectCount - prev.length).fill(null),
      ]);
    } else if (projectCount < thumbnailUrls.length) {
      setThumbnailUrls((prev) => prev.slice(0, projectCount));
    }
  }, [projectCount]);

  const handleDelete = (index: number) => {
    setThumbnailUrls((prev) => {
      const newThumbnails = [...prev];
      newThumbnails[index] = null;
      return newThumbnails;
    });
    setFile((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = null;
      return newFiles;
    });
    updateProject(
      resume.project.map((project: any, i: number) =>
        i === index ? { ...project, thumbnailUrl: null } : project
      )
    );
  };

  const handleRetake = (index: number) => {
    setThumbnailUrls((prev) => {
      const newThumbnails = [...prev];
      newThumbnails[index] = null;
      return newThumbnails;
    });
    setFile((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = null;
      return newFiles;
    });
  };

  return (
    <form
      className=""
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
      </div>
      <div className="mx-6 ">
        {Array.from({
          length: projectCount,
        }).map((_, i) => {
          return (
            <div key={i}>
              {projectCount > 1 ? (
                <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                  Project {i + 1}
                </h1>
              ) : (
                ""
              )}
              <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
                <InputControl
                  label="Project Title"
                  placeholder="Enter title"
                  register={register(`title${i}`)}
                  defaultValue={resume?.project[i]?.title || ""}
                  detail={undefined}
                />
                <InputControl
                  label="Tech Stacks/Software used"
                  placeholder="eg. ReactJS, Adobe, MYSQL"
                  register={register(`techStacks${i}`)}
                  defaultValue={resume?.project[i]?.techStacks || ""}
                  detail={undefined}
                />
              </div>
              <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
                <InputControl
                  label="Live Link"
                  placeholder="Enter deployed link of project"
                  register={register(`deployedLink${i}`)}
                  defaultValue={resume?.project[i]?.deployedLink || ""}
                  detail={undefined}
                />
                <InputControl
                  label="Github Link"
                  placeholder="Enter github link of project"
                  register={register(`githubLink${i}`)}
                  defaultValue={resume?.project[i]?.githubLink || ""}
                  detail={undefined}
                />
              </div>

              <div className="font-semibold text-base mt-4 text-[#646d8c]">
                Enter Project description
              </div>
              <div className="flex mb-8 flex-col">
                <div className="flex flex-col gap-2">
                  <InputControl
                    placeholder="One liner description for it"
                    detail={true}
                    register={register(`description${i}`)}
                    defaultValue={resume?.project[i]?.description || ""}
                    label={undefined}
                  />
                </div>
              </div>
              <div className="font-semibold text-base mt-4 text-[#646d8c]">
                Enter Project Image
              </div>
              <ImageThumbnail thumbnailUrl={thumbnailUrls[i]} />
              {thumbnailUrls[i] && (
                <div className="mt-2 flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleDelete(i)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRetake(i)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Retake
                  </button>
                </div>
              )}

              <input
                id={`dropzone-file-${i}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, i)}
                className="hidden"
              />
              <label
                htmlFor={`dropzone-file-${i}`}
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mb-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-4-4 4 4 0 014-4h2a4 4 0 004 4v2a4 4 0 01-4 4H7zM7 16v5M7 21h5M17 7a4 4 0 014 4v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2a4 4 0 014-4h2zM17 7V2M17 2h-5"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              </label>
              {i < projectCount - 1 && (
                <hr className="my-8 border-t border-gray-300" />
              )}
            </div>
          );
        })}

        {projectCount > 1 && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => {
                setProjectCount(Math.max(1, projectCount - 1));
                setThumbnailUrls((prev) => prev.slice(0, -1));
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-md transition duration-300 ease-out hover:text-white"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-red-600 text-white duration-300 group-hover:translate-x-0">
                <Trash className="h-5 w-5" />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-red-600 transition-all duration-300 group-hover:translate-x-full">
                Delete
              </span>
              <span className="invisible relative">Delete</span>
            </button>
          </div>
        )}
        {projectCount < 5 && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => {
                setProjectCount(projectCount + 1);
                setThumbnailUrls((prev) => [...prev, null]);
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-md transition duration-300 ease-out hover:text-white"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-600 text-white duration-300 group-hover:translate-x-0">
                <Plus className="h-5 w-5" />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-blue-600 transition-all duration-300 group-hover:translate-x-full">
                Add Project
              </span>
              <span className="invisible relative">Add Project</span>
            </button>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setactiveIndex(activeIndex - 1)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Projects;
