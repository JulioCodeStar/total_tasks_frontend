import { Button } from "@/components/ui/button";
import {
  IconCirclePlus,
  IconPresentationFilled,
  IconTable,
  IconWall,
  IconAdjustmentsHorizontal,
  IconArrowsSort,
  IconSearch
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function kanban() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Kanban Personal</h1>
        <Button className="bg-blue-700 hover:bg-blue-500">
          <IconCirclePlus className="me-1" />
          Crear Proyecto
        </Button>
      </div>

      <Tabs defaultValue="Por Proyecto">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="Por Proyecto">
              <IconPresentationFilled size={16} className="me-1" />
              Por Proyecto
            </TabsTrigger>
            <TabsTrigger value="Tablero">
              <IconTable size={16} className="me-1" />
              Tablero
            </TabsTrigger>
            <TabsTrigger value="Todas las tareas">
              <IconWall size={16} className="me-1" />
              Todas las tareas
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="bg-transparent rounded-md p-1 hover:bg-gray-200"
                >
                  <IconAdjustmentsHorizontal className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Order */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="bg-transparent rounded-md p-1 hover:bg-gray-200"
                >
                  <IconArrowsSort className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <div className="flex items-center">
                <IconSearch className="h-5 w-5" />
                <input 
                    type="text" 
                    className="bg-transparent border-b-2 ms-2 outline-none text-gray-500"
                    placeholder="Buscar......."
                />
            </div>

            {/* Add Tasks */}
            <Button variant="secondary" className="hover:text-white hover:bg-black">
              Añadir Tarea
            </Button>
          </div>
        </div>
        <TabsContent value="Por Proyecto"></TabsContent>

        <TabsContent value="Tablero"></TabsContent>

        <TabsContent value="Todas las tareas"></TabsContent>
        <hr />
      </Tabs>
    </>
  );
}
