import { ChevronRight } from "lucide-react";
import InputControl from "./InputControl";
import { useForm } from "react-hook-form";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ResumeData } from "../context/ResumeData";
import { ImageThumbnail, readImage } from "./ImageThumbnail";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BasicInfo = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { updatePersonal, resume }: any = useContext(ResumeData);
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const storedResumeLocal = localStorage.getItem("resumeLocal");
    if (storedResumeLocal) {
      const resumeLocalData = JSON.parse(storedResumeLocal);
      const storedThumbnailUrl = resumeLocalData.personal?.profile;
      if (storedThumbnailUrl) {
        setThumbnailUrl(storedThumbnailUrl);
      }
    }
  }, []);

  const uploadDetails = async (data) => {
    if (file && session?.user?.email) {
      const formData = new FormData();
      formData.append("file", file);

      const sessionEmail = session.user.email;
      try {
        const response = await axios.post("/api/S3/S3-profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: sessionEmail,
          },
        });
        const uploadedImageUrl = response.data.fileName;
        if (response.data.success) {
          const url = `https://brillo-data.s3.ap-south-1.amazonaws.com/${uploadedImageUrl}`;

          updatePersonal({
            ...resume.personal,
            profile: url,
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            introduction: data.introduction,
            city: data.city,
            resume: data.resume,

            country: data.country,
          });
          activeIndex === 6
            ? setactiveIndex(0)
            : setactiveIndex(activeIndex + 1);
          return response.data.fileName;
        } else {
          throw new Error("File upload failed.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file.");
      }
    } else {
      activeIndex === 6 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    }
  };

  const PersonalSubmit = async (data: any) => {
    updatePersonal(data);

    await toast.promise(uploadDetails(data), {
      loading: "Uploading Image",
      success: "Success",
      error: "Error while submitting",
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select an image file (PNG or JPG).");
        return;
      }
      try {
        const thumbnailUrl = await readImage(selectedFile);
        setThumbnailUrl(thumbnailUrl);
        setFile(selectedFile);
      } catch (error) {
        console.error("Error reading image:", error);
      }
    }
  };

  return (
    <form
      className="mt-2 md:mx-3 px-4 md:w-full min-w-sm"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <div className="font-semibold text-base mt-4 text-[#646d8c]">
        Enter profile picture
      </div>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-4 pb-2">
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
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          name="profile"
          {...register("profile")}
          onChange={handleFileChange}
        />
      </label>
      <ImageThumbnail thumbnailUrl={thumbnailUrl} />

      <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
        <InputControl
          type="text"
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          register={register("firstName")}
          defaultValue={resume?.personal?.firstName || ""}
          detail={undefined}
        />

        <InputControl
          type="text"
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name"
          register={register("lastName")}
          defaultValue={resume?.personal?.lastName || ""}
          detail={undefined}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="text"
          label="Designation"
          placeholder="eg. Software Developer"
          register={register("designation")}
          defaultValue={resume?.personal?.designation || ""}
          detail={undefined}
        />
        <InputControl
          type="text"
          label="Resume Link"
          placeholder="enter link of your resume"
          register={register("resume")}
          defaultValue={resume?.personal?.resume || ""}
          detail={undefined}
        />
      </div>

      <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
        <InputControl
          type="text"
          label="City"
          name="city"
          placeholder="Enter your City"
          register={register("city")}
          defaultValue={resume?.personal?.city || ""}
          detail={undefined}
        />

        <InputControl
          type="text"
          label="Country"
          name="country"
          placeholder="Enter your Country"
          register={register("country")}
          defaultValue={resume?.personal?.country || ""}
          detail={undefined}
        />
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-row gap-2">
          <InputControl
            type="text"
            label="one line introduction"
            placeholder="2nd year BCA student"
            register={register("introduction_short")}
            defaultValue={resume?.personal?.introduction_short || ""}
            detail={true}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row gap-2">
          <InputControl
            type="text"
            label="Introduction about yourself"
            placeholder="2nd year BCA student"
            register={register("introduction")}
            defaultValue={resume?.personal?.introduction || ""}
            detail={true}
          />
        </div>
      </div>
      <div className="sm:gap-4 flex justify-end m-4">
        <button
          className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
          type="submit"
        >

          <p className="flex items-center justify-center">Next</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
    </form>
  );
};

export default BasicInfo;
