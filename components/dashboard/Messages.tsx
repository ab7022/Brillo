import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Messages() {
  const [allMessages, setAllMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/sendmessages");
        if (response.status === 200) {
          const templateStatusData = response.data;
          setAllMessages(templateStatusData);
        }
      } catch (error) {
        console.error("Error fetching template status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold">Messages</h1>
      <p className="text-gray-500 dark:text-gray-400">
        View your recent messages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
        <Card className="border-gray-100 border-2">
          <CardHeader>
            <CardTitle> All Messages</CardTitle>
          </CardHeader>
          <div className="p-1 md:p-4">
            {loading && <p className="text-center ">Loading...</p>}
            {!loading && allMessages.length === 0 && <CardContent>No messages available.</CardContent>}
            <div
              className="space-y-4 overflow-y-auto"
              style={{ maxHeight: "320px" }} // Adjust the maxHeight as needed
            >
              {allMessages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-4 border-b-2 pb-2"
                >
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{message.name}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {message.email}
                    </div>
                    <div className="text-sm">{message.message}</div>
                  </div>
                  <Button variant="outline" className="border-2">
                    <a href={`mailto:${message.email}`}>Reply Back</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
