"use client";
import { deleteWorkSpaceService } from "@/Service/workspaceService";
import { deleteWorkspaceById } from "@/actions/WorkSpaceAction";

import Image from "next/image";
import React from "react";

export default function EditDeleteDropDownComponent({ id }) {
  console.log(id, "asds");

  const handleDelete = (id) => {
    deleteWorkspaceById(id);
    // console.log(res, id, "jkskj");
  };

  return (
    <details className="dropdown">
      <summary className="h-0 min-h-0 p-0 bg-white border-0 shadow-none btn">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a>Edit</a>
        </li>
        <li>
          <a
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </a>
        </li>
      </ul>
    </details>
  );
}
