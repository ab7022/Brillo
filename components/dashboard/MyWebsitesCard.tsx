import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyWebsitesCard = ({
  template,
  templateStatus,
  isActive,
  handleViewDetails,
  handleMakeLive,
  handleRemove,
  lastviewed
}:any) => {
  console.log("status", templateStatus);
  return (
    <Card key={template.id} className="border-2 border-gray-200">
      {lastviewed && (
        <p className="bg-gray-300 text-center py-2 text-gray-900 font-medium rounded">
          Last Viewed
        </p>      )}
      {isActive && (
        <p className="bg-green-600 text-center py-2 text-white rounded">
          Active
        </p>
      )}
      <CardHeader>
        <img
          src={template.img}
          alt={template.heading}
          width={300}
          height={200}
          className="rounded-md object-cover w-full"
        />
        <CardTitle>{template.heading}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
       
          <div>
            <div className="text-sm font-medium">Status</div>
            {isActive ? (
              <div className="text-green-500 dark:text-green-400">Active</div>
            ) : (
              <div className="text-red-500 dark:text-red-400">Not Active</div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        <Button
          variant="outline"
          className="p-2 border-2"
          onClick={() => handleViewDetails(template.id)}
        >
          View Details
        </Button>
        {isActive ? (
          <Button onClick={() => handleRemove(template.id)}>
            Take Offline
          </Button>
        ) : (
          <Button onClick={() => handleMakeLive(template.id)}>
            Launch Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MyWebsitesCard;
