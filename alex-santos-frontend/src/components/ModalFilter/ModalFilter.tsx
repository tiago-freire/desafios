import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { Input } from "@/components/ui/input";
  
  const ModalFilter = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="bg-[#8E4EC6]/10 rounded-none text-white cursor-pointer"
          >
            Filtro
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#232225] text-white border-none">
          <DialogHeader>
            <DialogTitle>Filtrar Filmes</DialogTitle>
            <DialogDescription className="text-gray-300">
              Escolha os critérios para filtrar os filmes exibidos.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Filtro de Gênero */}
            <div className="space-y-2">
              <Label htmlFor="genre" className="text-white">
                Gênero
              </Label>
              <Select>
                <SelectTrigger id="genre" className="bg-[#121113] border-[#F1E6FD30] text-white">
                  <SelectValue placeholder="Selecione um gênero" />
                </SelectTrigger>
                <SelectContent className="bg-[#232225] text-white border-[#F1E6FD30]">
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="action">Ação</SelectItem>
                  <SelectItem value="comedy">Comédia</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="horror">Terror</SelectItem>
                  <SelectItem value="sci-fi">Ficção Científica</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Filtro de Lançamento */}
            <div className="space-y-2">
              <Label htmlFor="releaseYear" className="text-white">
                Ano de Lançamento
              </Label>
              <Input
                id="releaseYear"
                type="number"
                placeholder="Ex: 2023"
                className="bg-[#121113] border-[#F1E6FD30] text-white"
              />
            </div>
            <div className="flex space-x-2 justify-end">
            <Button className="bg-[#8E4EC6]/10 text-white  rounded-none font-Montserrat">
              cancelar
            </Button>
            <Button className="bg-[#8E4EC6] text-white rounded-none">
              Aplicar Filtros
            </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ModalFilter;