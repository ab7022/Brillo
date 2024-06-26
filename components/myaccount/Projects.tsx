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
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(projectSubmit)}
    >
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

            <label
              htmlFor={`dropzone-file-${i}`}
              className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-4 pb-4">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id={`dropzone-file-${i}`}
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, i)}
              />
            </label>
          </div>
        );
      })}

      {projectCount > 1 && (
        <div className="sm:flex sm:gap-4 mt-4">
          <div
            className="rounded-xl bg-[white] text-red-500 w-24 p-4 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary justify-center items-center hover:text-red-700"
            onClick={() => deleteProjectItem(projectCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </div>
        </div>
      )}
      {projectCount < 5 && (
        <div
          className="flex mt-8 gap-2 cursor-pointer bg-gray-100 py-2 rounded-lg flex-row md:w-2/5 justify-center"
          onClick={() =>
            projectCount < 5
              ? setProjectCount((prev: number) => prev + 1)
              : null
          }
        >
          <Plus className="bg-primary bg-blue-500 hover:text-blue-700 text-white bg rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1 hover:text-blue-700">
            Add one more projects
          </span>
        </div>
      )}

      <div className="flex flex-row justify-between my-4">
        <div className="sm:flex flex-row justify-center items-center sm:gap-4">
          <button
            type="button"
            className="md:px-4 px-4 md:py-3 py-2 flex text-base items-center justify-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition hover:rotate-2 hover:bg-gray-100 hover:text-blue-700"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className="sm:flex sm:gap-4">
          <button
            className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
            type="submit"
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Projects;
