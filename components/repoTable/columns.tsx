"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RepoProps } from "@/app/user/[username]/page";
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button";

export const columns: ColumnDef<RepoProps>[] = [
    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium ">{row.index + 1}</p>;
        },
      },
    {
      accessorKey: "name",
      header: "Repo Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
        accessorKey: "stargazers_count",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="bg-slate-800 hover:bg-slate-700 hover:text-white"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Stars
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },

    {
        accessorKey: "forks_count",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="bg-slate-800 hover:bg-slate-700 hover:text-white"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Fork
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
  ]