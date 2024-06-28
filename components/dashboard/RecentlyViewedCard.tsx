// components/RecentlyViewedCard.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RecentlyViewedCard = ({ website, handleViewDetails, handleMakeLive }:any) => {
  return (
    <Card key={website.id} className="border-2">
      <CardHeader>
        <img
          src={website.img}
          alt={website.heading}
          width={300}
          height={200}
          className="rounded-md object-cover w-full"
        />
        <CardTitle>{website.heading}</CardTitle>
        <CardDescription>{website.description}</CardDescription>
      </CardHeader>
     
      <CardFooter className="flex gap-2 justify-between">
        <Button
          variant="outline"
          className="p-2 border-2"
          onClick={() => handleViewDetails(website.id)}
        >
          View Details
        </Button>
        <Button onClick={() => handleMakeLive(website.id)}>
          Launch Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentlyViewedCard;
