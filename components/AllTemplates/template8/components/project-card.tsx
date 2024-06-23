import { Badge } from "@/components/AllTemplates/template8/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  image?: string;
  github_url:string
  className?: string;
  deployed_url:string
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  deployed_url,
  github_url,
  image,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
    
        {image && (
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}

            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 gap-x-4">
        {deployed_url && (
          <div className="flex flex-row flex-wrap items-start gap-4">
            
              <Link href={deployed_url} key={github_url} target="_blank">
                <Badge key={github_url} className="flex gap-2 px-2 py-1 text-[10px]">
                  Live Link
                </Badge>
              </Link>
            
          </div>
        )}
        {github_url && (
          <div className="flex flex-row flex-wrap items-start gap-4">
            
              <Link href={github_url} key={github_url} target="_blank">
                <Badge key={github_url} className="flex gap-2 px-2 py-1 text-[10px]">
                  Source Code
                </Badge>
              </Link>
            
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
