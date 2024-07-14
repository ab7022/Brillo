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
  location?: string;

}

export const Education = ({
  altText,
  title,
  designation,
  href,
  period,
  description1,

  location  
}: ResumeCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer dark:text-white">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 mt-4 bg-muted-background dark:bg-foreground ml-2">
            <AvatarImage src={""} alt={altText} className="object-contain" />
            <AvatarFallback className="bg-gray-200 dark:bg-gray-800  ">{title[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-0 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex text-black items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {description1} <br/>
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
           
          </CardHeader>
          <CardContent className="mt-0 text-xs sm:text-sm text-white dark:text-gray-100 text-muted-foreground">
            <p className=" dark:text-gray-100 text-muted-foreground"> {title},</p>
          <p className="dark:text-white text-muted-foreground">{location}</p>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
