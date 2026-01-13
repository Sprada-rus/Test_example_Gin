"use client";

import {ArrowUp, ArrowDown, Info} from "lucide-react";
import MultiSelect from "./ui/multi-select.tsx";

interface SortConfig {
  column: string | null;
  direction: "asc" | "desc" | null;
}

interface UsersTableProps {
  sortConfig: SortConfig;
  onSort: (column: string) => void;
}

const columns = [
  { id: "id", label: "ID" },
  { id: "role", label: "Роль", info: 'info' },
  { id: "name", label: "Имя" },
  { id: "login", label: "Логин" },
  { id: "position", label: "Должность" },
  { id: "contacts", label: "Контакты" },
  { id: "email", label: "Почта" },
  { id: "phone", label: "Телефон" },
  { id: "city", label: "Город" },
];

const users = [
  {
    id: "13619",
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "@test",
    email: "test@test.ru",
    phone: "+79999999999",
    city: "Нижний Новгород",
  },
  {
    id: "13619",
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "@test",
    email: "test@test.ru",
    phone: "+79999999999",
    city: "Нижний Новгород",
  },
];

const positionOptions = [
  {value: 'Дизайнер', label: 'Дизайнер'},
  {value: 'Frontend-разработчик', label: 'Frontend-разработчик'},
  {value: 'Backend-разработчик', label: 'Backend-разработчик'},
  {value: 'QA-инженер', label: 'QA-инженер'},
  {value: 'Product-менеджер', label: 'Product-менеджер'},
]

function SortIndicator({
  column,
  sortConfig,
}: {
  column: string;
  sortConfig: SortConfig;
}) {
  if (sortConfig.column !== column) {
    return <ArrowDown className="w-4 h-4 text-muted-foreground" />;
  }

  if (sortConfig.direction === "asc") {
    return <ArrowUp className="w-4 h-4 text-primary" />;
  }

  return <ArrowDown className="w-4 h-4 text-foreground" />;
}

export default function UsersTable({ sortConfig, onSort }: UsersTableProps) {
  return (
    <div>
      <div>
        <table
          className="w-full border-separate border-spacing-y-[8px]"
        >
          <thead>
            <tr className="border-b border-border rounded-md">
              {columns.map((column) => (
                <th key={column.id} className="text-left">
                  <button
                    onClick={() => onSort(column.id)}
                    className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-foreground w-full"
                  >
                    <SortIndicator column={column.id} sortConfig={sortConfig} />
                    {column.label}
                    {column.info && <Info className="w-4 h-4 text-muted-foreground"/>}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b border-border bg-card">
                <td className="px-6 py-4 text-sm rounded-l-lg">
                  <div className="flex gap-4">
                    {user.id}
                    <button className="hover:text-muted-foreground text-foreground text-center rounded-lg bg-[#232426] h-6 w-6 transition-colors">
                      ⋮
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg cursor-pointer"
                    }
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg cursor-pointer"
                    }
                  >
                    {user.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg cursor-pointer"
                    }
                  >
                    {user.login}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <MultiSelect options={positionOptions} defaultValue={[user.position]} maxCount={3} placeholder={'Выберите должность...'}/>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg cursor-pointer"
                    }
                  >
                    {user.contacts}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg "
                    }
                  >
                    {user.email}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lg cursor-pointer"
                    }
                  >
                    {user.phone}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm rounded-r-lg">
                  <span
                    className={
                      "hover:bg-[#232426] transition-colors px-[8px] py-[4px] rounded-lgcursor-pointer"
                    }
                  >
                    {user.city}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
