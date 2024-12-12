"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
export default function Menu({
  data,
}: {
  data:
    | {
        id: number;
        name: string;
        children: { id: number; name: string }[];
      }[];
}) {
  const [menuOpen, setMenuOpen] = useState<number[]>([]);
  const handleChange = (id: number, status: boolean) => {
    if (status) {
      setMenuOpen([...menuOpen, id]);
    } else {
      setMenuOpen(menuOpen.filter((item) => item !== id));
    }
  };

  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="top-[0] left-[0] w-[300px] m-0 rounded-none">
          <DrawerHeader>
            <DrawerTitle className="font-[400]">
              {data.map((item) => {
                return (
                  <Collapsible
                    key={item.id}
                    className="mb-5"
                    onOpenChange={(status) => {
                      handleChange(item.id, status);
                    }}
                    open={menuOpen.includes(item.id)}
                  >
                    <CollapsibleTrigger>{item.name}</CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.children.map((child) => {
                        return (
                          <a href="#" className="block py-1" key={child.id}>
                            - {child.name}
                          </a>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <h3>Đóng</h3>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
