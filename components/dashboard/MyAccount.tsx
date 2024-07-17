import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import Link from "next/link";

export default function MyAccount({
  session,
  setFetchedUsername,
  fetchedUsername,
  setIsSubmitted,
  isSubmitted,
}) {
  const [inputUsername, setInputUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orders, setOrders] = useState([]);
  const isValidUsername = /^[a-z]+(?:-[a-z]+)*$/.test(inputUsername);
  const isMinimumLength = inputUsername.length >= 4;

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputUsername) {
        fetchUsername();
      }
    }, 1000);
    return () => clearTimeout(debounce);
  }, [inputUsername]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders/allSubscription");
        if (response.status === 200) {
          console.log(response.data);
          setOrders(response.data);
        } else {
          console.error("Failed to fetch orders.");
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  async function fetchUsername() {
    if (!isValidUsername || !isMinimumLength || !inputUsername) {
      setAvailability("not_allowed");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/user/username", {
        username: inputUsername,
      });
      if (response.status === 200) {
        setAvailability("available");
      } else {
        setAvailability("taken");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setAvailability("error");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isValidUsername || !isMinimumLength) {
      setAvailability("not_allowed");
      return;
    }

    if (availability === "available") {
      setSubmitting(true);
      try {
        const updateResponse = await axios.put("/api/user/username", {
          username: inputUsername,
          email: session.user.email,
        });
        if (updateResponse.status === 200) {
          toast.success(`Your website will be live on ${inputUsername}`);
          setInputUsername("");
          setAvailability("");
        } else {
          alert("Failed to update username.");
        }
      } catch (error) {
        console.error("Failed to update username:", error);
        alert("An error occurred while updating the username.");
      } finally {
        setSubmitting(false);
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const sessionEmail = session?.user?.email || "";

          const url2 = "/api/user/username";
          const response = await axios.get(url2, {
            headers: {
              Authorization: sessionEmail,
            },
          });
          if (response.status === 200) {
            const fetchedUsername = response.data;
            setFetchedUsername(fetchedUsername);
          } else {
            console.error("Failed to fetch user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [inputUsername]);
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const response = await axios.get("/api/user/submit");
          if (response.status === 200) {
            const { isdetailsubmitted } = response.data;
            setIsSubmitted(isdetailsubmitted);
          } else {
            console.error("Failed to fetch user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold">Account Settings</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Manage your profile, password, and subscription.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {/* <Card className="border-gray-100 border-2">
          <CardHeader>
            <CardTitle>Total Visitors</CardTitle>
            <CardDescription>
              View the total number of visitors to your website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-6xl flex m-2 justify-center items-center font-semibold">
                  <CountUp start={0} end={visitorCount} duration={10} />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="border-2 p-2"
              onClick={fetchVisitorCount}
            >
              Refresh Count
            </Button>
          </CardFooter>
        </Card> */}
        <Card className="border-gray-100 border-2">
          {isSubmitted ? (
            <p className="text-gray-500 text-sm text-center bg-blue-100 py-2">
              Ready to generate resume
            </p>
          ) : (
            <p className="text-white rounded font-medium text-sm text-center bg-red-500 py-2">
              Submit portfolio details first
            </p>
          )}
          <CardHeader>
            <CardTitle>Resume</CardTitle>
            <CardDescription>Create your professional resume</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-700">
              {isSubmitted
                ? "Generate your resume now"
                : "Complete your portfolio to proceed"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="border-2 p-2"
              disabled={!isSubmitted}
            >
              <Link href="/resume">Generate Resume</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-gray-100 border-2">
          {isSubmitted ? (
            <p className="text-gray-500 text-sm text-center bg-blue-100 py-2">
              You have already submitted your portfolio details.
            </p>
          ) : (
            <p className="text-white rounded font-medium text-sm text-center bg-red-500 py-2">
              Please submit your details to proceed.
            </p>
          )}
          <CardHeader>
            <CardTitle>Portfolio Details</CardTitle>
            <CardDescription>Submit your portfolio details.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              {isSubmitted ? (
                <span>Your have already submitted your details.</span>
              ) : (
                <span>
                  Fill in your basic information, experience, education,
                  projects, achievements, and skills to create your portfolio.
                </span>
              )}
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/myaccount">
              <Button variant="outline" className="border-2 p-2">
                {isSubmitted ? "Edit Submission" : "Start Submission"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="border-gray-100 border-2">
          {fetchedUsername ? (
            <p className="text-gray-500 text-sm text-center bg-blue-100 py-2">
              Your portfolio will be live at:{" "}
              <span className="font-semibold text-blue-600">
                eazyfolio.com/{fetchedUsername}
              </span>
            </p>
          ) : (
            <p className="text-white rounded font-medium text-sm text-center bg-red-500 py-2">
              Please Add your Username
            </p>
          )}
          <CardHeader>
            <CardTitle>Username</CardTitle>
            <CardDescription>
              Choose a unique username for your portfolio URL.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading && (
              <p className="text-blue-500">Checking availability...</p>
            )}
            {availability === "taken" && (
              <div className="flex items-center justify-center space-x-2 text-red-500">
                <p>Username is already taken. Please try another.</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            {availability === "available" && (
              <p className="text-green-500 text-center">
                Username is available!
              </p>
            )}
            {availability === "not_allowed" && (
              <p className="text-orange-500 text-sm text-center">
                Username must contain only lowercase letters, be at least 4
                characters long, and have no special characters.
              </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter a username"
                  type="text"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  className={`block w-full rounded-md px-3 py-2 border-2 placeholder-gray-500 ${
                    availability === "taken"
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
              </div>
              <button
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
                type="submit"
                disabled={loading || submitting || availability !== "available"}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-gray-100 border-2 max-h-80 overflow-auto">
          {orders.length === 0 && (
            <p className="bg-green-600 text-white text-sm font-semibold py-2 px-2 rounded-t-md shadow-md text-center">
              Unlock an extra 10% off on top of 50% off your first order with
              code {" "}
              <span className="font-bold text-md">FIRSTORDER</span>!
            </p>
          )}

          <CardHeader>
            <CardTitle> My Subscriptions</CardTitle>
            <CardDescription>Manage your subscription plan.</CardDescription>
          </CardHeader>
          {orders.length === 0 && (
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                You haven't purchased any subscription yet.
              </p>
            </CardContent>
          )}
          <CardContent>
            {orders.map((order) => (
              <div key={order.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Order ID</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {order.id}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Order Name</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {order.productName}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Order Date</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-2 p-2">
              <Link href="/pricing">Upgrade Plan</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
