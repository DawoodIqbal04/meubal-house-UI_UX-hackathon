import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchModel = ({ placeholder }: { placeholder: string }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center">
          <IoSearchOutline size={25} />
        </div>
      </SheetTrigger>
      <SheetContent className="px-40" side={"top"}>
        <div className="mt-8 flex items-center gap-5">
          <Input placeholder={placeholder} className="border border-gray-400" />
          <Button className="bg-blue-500 text-white hover:bg-blue-700">
            Search
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchModel;
