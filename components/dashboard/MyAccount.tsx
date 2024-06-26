import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/AllTemplates/template8/components/ui/avatar";
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
  import { Textarea } from "@/components/ui/textarea";
export default function MyAccount(){
    return (
        <div className="mt-12">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your profile, password, and subscription.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your subscription plan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Plan</div>
                  <div className="text-gray-500 dark:text-gray-400">Pro</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Renewal Date</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    June 10, 2024
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-2 p-2">
                Upgrade Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Username</CardTitle>
              <CardDescription>Update your username.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    defaultValue="johndoe"
                    className="border-2"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
}