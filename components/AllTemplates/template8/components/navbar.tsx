import {
  Dock,
  DockIcon,
} from "@/components/AllTemplates/template8/components/magicui/dock";
import { ModeToggle } from "@/components/AllTemplates/template8/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/AllTemplates/template8/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/AllTemplates/template8/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HomeIcon, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/AllTemplates/template8/components/icons";

export default function Navbar({ socialProfiles }) {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const phone = socialProfiles?.[0]?.phone || "";

  const data = {
    contact: {
      email: email,
      social: {
        GitHub: {
          url: github,
          icon: Icons.github,
        },
        LinkedIn: {
          url: linkedin,
          icon: Icons.linkedin,
        },
        X: {
          url: twitter,
          icon: Icons.x,
        },
        Whatsapp: {
          url: `https://wa.me/${phone}`,
          icon: Icons.whatsapp,
        },
        Email: {
          url: `mailto:${email}`,
          icon: Icons.globe,
        },
      },
    },
  };

  // Filter out entries with empty URLs
  const socialEntries = Object.entries(data.contact.social).filter(
    ([, social]) => social.url
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed z-50  bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12"
                )}
              >
                <HomeIcon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full" />
        {socialEntries.map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
