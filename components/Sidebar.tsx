import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  EnvelopeIcon,
  RectangleStackIcon,
  EllipsisHorizontalCircleIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      {/* <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="" /> */}
      <Image src="https://links.papareact.com/drq" height={40} width={40} className="m-3" alt="" />

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={RectangleStackIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? "Sign Out" : "Sign In"} />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default Sidebar;
