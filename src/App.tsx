import { Eye, Filter, Plus, Settings } from "lucide-react";
import { Input } from "./components/ui/input.tsx";
import { Button } from "./components/ui/button.tsx";
import UsersTable from "./components/table.tsx";
import Footer from "./components/footer.tsx";
import { useState } from "react";
import "./App.css";
import Pagination from "./components/paginationBlock";

export default function App() {
  const [sortConfig, setSortConfig] = useState<{
    column: string | null;
    direction: "asc" | "desc" | null;
  }>({
    column: null,
    direction: null,
  });
  const [pageNum, setPageNum] = useState(1);

  const handleSort = (columnName: string) => {
    setSortConfig((prev) => {
      if (prev.column === columnName) {
        if (prev.direction === "asc") {
          return { column: columnName, direction: "desc" };
        } else if (prev.direction === "desc") {
          return { column: null, direction: null };
        }
      }
      return { column: columnName, direction: "asc" };
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 py-8">
        <div className="max-w-[1544px] mx-auto px-[32px]">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            <span>Данные</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">Пользователи</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-8">Пользователи</h1>

          {/* Controls */}
          <div className="flex gap-4 mb-8 items-streach">
            <div className="relative flex-1 max-w-sm">
              <Input
                type="text"
                placeholder="Найти пользователя"
                className="bg-card border-border placeholder:text-muted-foreground h-[48px] "
              />
              <Eye
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                color={"#FAFCFF"}
              />
            </div>

            <div className="border-r-solid border-r-card border-r-[1px]"></div>

            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-card w-[48px] h-auto"
            >
              <Settings className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-card w-[48px] h-auto"
            >
              <Filter className="w-5 h-5" />
            </Button>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 ml-auto gap-[12px] h-auto font-semibold px-[21px]">
              <Plus className="w-5 h-5" />
              Добавить пользователя
            </Button>
          </div>

          {/* Table */}
          <UsersTable sortConfig={sortConfig} onSort={handleSort} />

          {/* Pagination */}
          <div className="mt-8">
            <Pagination
              currentPage={pageNum}
              onChange={(num) => setPageNum(num)}
              count={3000}
              onPrev={() => setPageNum((item) => item - 1)}
              onNext={() => setPageNum((item) => item + 1)}
            />
            <p className="text-sm text-muted-foreground mt-[16px]">
              Показано 1-20 из 30 000 пользователей
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
