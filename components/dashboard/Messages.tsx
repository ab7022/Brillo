import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export default function Messages() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold">Messages</h1>
      <p className="text-gray-500 dark:text-gray-400">
        View your recent messages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="border-gray-100 border-2">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b-2 pb-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    john@example.com
                  </div>
                  <div className="text-sm">
                    Hey there, I wanted to follow up on our previous
                    conversation. Let me know if you have any updates.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b-2 pb-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Sarah Anderson</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    sarah@example.com
                  </div>
                  <div className="text-sm">
                    I'm interested in learning more about your services. Could
                    we schedule a call this week?
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    michael@example.com
                  </div>
                  <div className="text-sm">
                    I'm having trouble with the latest update. Can you please
                    help me troubleshoot?
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
