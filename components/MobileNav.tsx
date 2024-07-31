"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer"
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white" side="left">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon Logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          {sidebarLinks.map((link) => {
            const isActive =
              pathName === link.route || pathName.startsWith(`${link.route}/`);
            return (
              <Link
                key={link.label}
                href={link.route}
                className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              >
                <div className="relative size-6">
                  <Image
                    src={link.imgURL}
                    fill
                    // width={34}
                    // height={34}
                    className={cn({ "brightness-[3] invert-0": isActive })}
                    alt={link.label}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
