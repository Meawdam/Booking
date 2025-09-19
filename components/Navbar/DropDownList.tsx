import { TextAlignStart, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Usericon from "./Usericon";
import Link from "next/link";
import { links } from "@/util/Link"

const DropDownList = () => {
  return (   
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <TextAlignStart />
            <Usericon />         
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            links.map((item, index) => {
              return <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
            })
          }
        </DropdownMenuContent>
      </DropdownMenu>
  );
};
export default DropDownList;
