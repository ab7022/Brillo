import {
  Briefcase,
  ChevronRight,
  FileText,
  MapPin,
  RefreshCw,
  Trash2,
  User,
} from "lucide-react";
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
  const [showUpload, setShowUpload] = useState(true);

  useEffect(() => {
    const storedResumeLocal = localStorage.getItem("resumeLocal");
    if (storedResumeLocal) {
      const resumeLocalData = JSON.parse(storedResumeLocal);
      const storedThumbnailUrl = resumeLocalData.personal?.profile;
      if (storedThumbnailUrl) {
        setThumbnailUrl(storedThumbnailUrl);
        setShowUpload(false);
      }
    }
  }, []);

  const uploadDetails = async (data: any) => {
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

          const updatedData = {
            ...resume.personal,
            profile: url,
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            introduction: data.introduction,
            introduction_short: data.introduction_short,
            city: data.city,
            resume: data.resume,
            country: data.country,
          };

          updatePersonal(updatedData);

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

  // Ensure the data object includes the profile URL when calling updatePersonal
  const PersonalSubmit = async (data: any) => {
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
        setShowUpload(false);
      } catch (error) {
        console.error("Error reading image:", error);
      }
    }
  };

  const handleDelete = () => {
    setThumbnailUrl(null);
    setFile(null);
    setShowUpload(true);
    updatePersonal({
      ...resume.personal,
      profile: null,
    });
  };

  const handleRetake = () => {
    setShowUpload(true);
  };

  return (
    <form
      className="max-w-7xl mx-auto shadow-lg rounded-lg"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <Toaster />
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-2xl font-bold text-white">Personal Information</h2>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Picture
          </label>
          {showUpload ? (
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </label>

                <div className="flex text-sm text-gray-600">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    {...register("profile")}
                    onChange={handleFileChange}
                  />
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          ) : null}

          {thumbnailUrl && (
            <div className="mt-4">
              <ImageThumbnail thumbnailUrl={thumbnailUrl} />
              <div className="mt-2 flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
                <button
                  type="button"
                  onClick={handleRetake}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retake
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <InputControl
            type="text"
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            register={register("firstName")}
            defaultValue={resume?.personal?.firstName || ""}
            icon={<User className="h-5 w-5 text-gray-400" />}
          />
          <InputControl
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            register={register("lastName")}
            defaultValue={resume?.personal?.lastName || ""}
            icon={<User className="h-5 w-5 text-gray-400" />}
          />
          <InputControl
            type="text"
            label="Designation"
            placeholder="e.g. Software Developer"
            register={register("designation")}
            defaultValue={resume?.personal?.designation || ""}
            icon={<Briefcase className="h-5 w-5 text-gray-400" />}
          />
          <InputControl
            type="text"
            label="Resume Link"
            placeholder="Enter link of your resume"
            register={register("resume")}
            defaultValue={resume?.personal?.resume || ""}
            icon={<FileText className="h-5 w-5 text-gray-400" />}
          />
          <InputControl
            type="text"
            label="City"
            name="city"
            placeholder="Enter your City"
            register={register("city")}
            defaultValue={resume?.personal?.city || ""}
            icon={<MapPin className="h-5 w-5 text-gray-400" />}
          />
          <InputControl
            type="text"
            label="Country"
            name="country"
            placeholder="Enter your Country"
            register={register("country")}
            defaultValue={resume?.personal?.country || ""}
            icon={<MapPin className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <InputControl
          type="text"
          label="One line introduction"
          placeholder="e.g. 2nd year BCA student"
          register={register("introduction_short")}
          defaultValue={resume?.personal?.introduction_short || ""}
          detail={true}
          icon={<FileText className="h-5 w-5 text-gray-400" />}
        />

        <InputControl
          type="text"
          label="Introduction about yourself"
          placeholder="Tell us about yourself"
          register={register("introduction")}
          defaultValue={resume?.personal?.introduction || ""}
          detail={true}
          icon={<FileText className="h-5 w-5 text-gray-400" />}
        />

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicInfo;
