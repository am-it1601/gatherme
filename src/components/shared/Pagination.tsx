"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";
type PaginationProps = {
  urlParamNames?: string;
  page: number | string;
  totalPage: number;
};

type PageButtonType = "PREV" | "NEXT";
const Pagination = ({ urlParamNames, page, totalPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: PageButtonType) => {
    const pageValue = btnType === "NEXT" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamNames || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick("PREV")}
        disabled={Number(page) <= 1}>
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick("NEXT")}
        disabled={Number(page) >= totalPage}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
