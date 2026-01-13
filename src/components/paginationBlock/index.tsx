// import clsx from "clsx";
import { renderPaginationItems } from "./utils.ts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button.tsx";
import { clsx } from "clsx";

interface PaginationProps {
  count: number;
  currentPage: number;
  onChange: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination(props: PaginationProps) {
  const { onChange, currentPage, count, onPrev, onNext } = props;

  return (
    <div
      className={"flex items-center gap-4"}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const val = target.innerText;

        if (!target.classList.contains("pagination-item") || val === "...")
          return;

        onChange(+val);
      }}
    >
      {currentPage !== 1 && (
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:bg-card bg-transparent"
          onClick={onPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      )}
      {renderPaginationItems(count, currentPage).map((item, index) => (
        <Button
          variant="default"
          key={`pagination-item-${item}-${index}`}
          size="sm"
          className={clsx(
            "bg-primary text-primary-foreground border-0 py-[21px] text-base min-w-[48px] min-h-[48px] pagination-item",
            { "bg-input": currentPage !== item }
          )}
        >
          {item}
        </Button>
      ))}
      {currentPage !== count && (
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:bg-card bg-transparent"
          onClick={onNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
