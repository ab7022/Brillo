import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";
import { Badge } from "@/components/AllTemplates/template8/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  altText: string;
  title: string;
  designation?: string;
  href?: string;
  period: string;
  description1?: string;
  description2?: string;
  description3?: string;
  location?: string;

}

export const ResumeCard = ({
  altText,
  title,
  designation,
  href,
  period,
  description1,
  description2,
  description3,
  location  
}: ResumeCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 mt-4 bg-muted-background dark:bg-foreground">
            <AvatarImage src={""} alt={altText} className="object-contain" />
            <AvatarFallback className="bg-gray-200">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-0 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title} <br/>
                {location && (
                  <span className="inline-flex gap-x-1">
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={location}
                      >
                        {location}
                      </Badge>
                    
                  </span>
                )}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {designation && (
              <div className="font-sans text-xs">{designation}</div>
            )}
          </CardHeader>
          <CardContent className="mt-2 text-xs sm:text-sm">
            <li>{description1}</li>
            <li>{description2}</li>
            <li>{description3}</li>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
