"use client"


import Image from "next/image";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import {
    FacebookIcon,
    HomeIcon,
    Linkedin,
    LucideGithub, PersonStandingIcon,
    TwitterIcon
} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const LinkObject=[
    {
        icon:HomeIcon,
        label:"Home",
        href:"/"
    },
    {
        icon:PersonStandingIcon,
        label:"About",
        href:"/about"
    },
    {
        icon:PiReadCvLogoFill,
        label:"Resume",
        href:"/resume"
    },
    {
        icon:MdMiscellaneousServices,
        label:"Services",
        href:"/services"
    },
    {
        icon:IoIosContact,
        label:"Contact",
        href:"/contact"
    }
]

const Sidebar = () => {
    return (
        <aside className="flex w-[240px] h-full bg-[#000] p-4 fixed top-0 left-0 text-white flex-col md:max-w-64 border-r-1">
            <div className="w-full px-4 py-2">
                <Image src="/Profile.jpg" alt="Profile pic" width={80} height={50} className="rounded-full object-fit mx-auto mt-4" />
            </div>
            <div className="w-full px-4 py-2 flex justify-center flex-col">
                <h1 className="text-white font-bold text-2xl">Hamza Goraya</h1>
                <div className="flex justify-between px-4 py-2 mt-4">
                    <Link href="">
                        <FacebookIcon className="size-6 "/>
                    </Link>
                    <Link href="">
                        <TwitterIcon className="size-6 "/>
                    </Link>
                    <Link href="">
                        <Linkedin className="size-6 "/>
                    </Link>
                    <Link href="">
                        <LucideGithub className="size-6 "/>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start px-4 py-2 gap-y-4 ">
                {LinkObject.map((link, index)=>(
                    <Button key={index}>
                        <Link href={link.href}>
                            <div className="flex justify-between space-x-4 items-center gap-4">
                                <link.icon/>
                                {link.label}
                            </div>
                        </Link>
                    </Button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;