import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createMovieSchema } from "@/schemas/movieSchema/createMovieSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import movieCreateApi from "@/service/movie/movieCreateApi";
import ErrosProps from "../ErrosProps/ErrosProps";

const DrawerAddMovie = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createMovieSchema),
  });

  const mutation = useMutation({
    mutationFn: movieCreateApi,
    onSuccess: () => {
      alert("Filme adicionado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["moviesAll"] });
      reset();
    },
    onError: (error) => {
      alert("Erro ao adicionar filme: " + error.message);
    },
  });

  const onSubmit = async (data:any) => {
    const formattedData = {
      ...data,
      language: Array.isArray(data.language) ? data.language : [data.language],
      genre: Array.isArray(data.genre) ? data.genre : [data.genre],
    };

    mutation.mutate(formattedData);
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="bg-[#8E4EC6] text-white cursor-pointer rounded-none">
          Adicionar filme
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#232225] text-white border-none fixed right-0 top-0 h-full w-full sm:w-96 max-w-full overflow-y-auto overflow-x-hidden box-border">
        <DrawerHeader>
          <DrawerTitle className="text-white">Adicionar Novo Filme</DrawerTitle>
          <DrawerDescription className="text-gray-300">
            Preencha os detalhes do filme para adicioná-lo à lista.
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 space-y-4">
            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">
                Título
              </Label>
              <Input
                id="title"
                placeholder="Ex: O Último Guardião"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("title")}
              />
              <ErrosProps message={errors.title?.message} />
            </div>
            {/* Título Original */}
            <div className="space-y-2">
              <Label htmlFor="titleOriginal" className="text-white">
                Título Original
              </Label>
              <Input
                id="titleOriginal"
                placeholder="Ex: The Last Guardian"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("titleOriginal")}
              />
              <ErrosProps message={errors.titleOriginal?.message} />
            </div>
            {/* Descrição */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Descrição
              </Label>
              <Textarea
                id="description"
                placeholder="Digite a descrição do filme"
                className="bg-[#121113] border-[#F1E6FD30] text-white min-h-[100px] w-full max-w-full"
                {...register("description")}
              />
              <ErrosProps message={errors.description?.message} />
            </div>
            {/* Sinopse */}
            <div className="space-y-2">
              <Label htmlFor="sinopse" className="text-white">
                Sinopse
              </Label>
              <Textarea
                id="sinopse"
                placeholder="Digite a sinopse do filme"
                className="bg-[#121113] border-[#F1E6FD30] text-white min-h-[100px] w-full max-w-full"
                {...register("sinopse")}
              />
              <ErrosProps message={errors.sinopse?.message} />
            </div>
            {/* Popularidade */}
            <div className="space-y-2">
              <Label htmlFor="popularity" className="text-white">
                Popularidade
              </Label>
              <Input
                id="popularity"
                type="number"
                placeholder="Ex: 6200"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("popularity")}
              />
              <ErrosProps message={errors.popularity?.message} />
            </div>
            {/* Votos */}
            <div className="space-y-2">
              <Label htmlFor="votes" className="text-white">
                Votos
              </Label>
              <Input
                id="votes"
                type="number"
                placeholder="Ex: 73545"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("votes")}
              />
              <ErrosProps message={errors.votes?.message} />
            </div>
            {/* Situação */}
            <div className="space-y-2">
              <Label htmlFor="situation" className="text-white">
                Situação
              </Label>
              <Controller
                name="situation"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="situation"
                      className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                    >
                      <SelectValue placeholder="Selecione a situação" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232225] text-white border-[#F1E6FD30]">
                      <SelectItem value="Lançado">Lançado</SelectItem>
                      <SelectItem value="Em Produção">Em Produção</SelectItem>
                      <SelectItem value="Planejado">Planejado</SelectItem>
                      <SelectItem value="Cancelado">Cancelado</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <ErrosProps message={errors.situation?.message} />
            </div>
            {/* Idiomas */}
            <div className="space-y-2">
              <Label htmlFor="language" className="text-white">
                Idiomas
              </Label>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="language"
                      className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                    >
                      <SelectValue placeholder="Selecione os idiomas" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232225] text-white border-[#F1E6FD30]">
                      <SelectItem value="portugues">Português</SelectItem>
                      <SelectItem value="ingles">Inglês</SelectItem>
                      <SelectItem value="espanhol">Espanhol</SelectItem>
                      <SelectItem value="frances">Francês</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <ErrosProps message={errors.language?.message} />
            </div>
            {/* Data de Lançamento */}
            <div className="space-y-2">
              <Label htmlFor="launchDate" className="text-white">
                Data de Lançamento
              </Label>
              <Input
                id="launchDate"
                type="date"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("launchDate")}
              />
              <ErrosProps message={errors.launchDate?.message} />
            </div>
            {/* Gêneros */}
            <div className="space-y-2">
              <Label htmlFor="genre" className="text-white">
                Gêneros
              </Label>
              <Controller
                name="genre"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="genre"
                      className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                    >
                      <SelectValue placeholder="Selecione os gêneros" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232225] text-white border-[#F1E6FD30]">
                      <SelectItem value="Ação">Ação</SelectItem>
                      <SelectItem value="Comédia">Comédia</SelectItem>
                      <SelectItem value="Drama">Drama</SelectItem>
                      <SelectItem value="Terror">Terror</SelectItem>
                      <SelectItem value="Ficção Científica">
                        Ficção Científica
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <ErrosProps message={errors.genre?.message} />
            </div>
            {/* Duração */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-white">
                Duração (minutos)
              </Label>
              <Input
                id="duration"
                type="number"
                placeholder="Ex: 142"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("duration")}
              />
              <ErrosProps message={errors.duration?.message} />
            </div>
            {/* Orçamento */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white">
                Orçamento (USD)
              </Label>
              <Input
                id="budget"
                type="number"
                placeholder="Ex: 120000000"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("budget")}
              />
              <ErrosProps message={errors.budget?.message} />
            </div>
            {/* Receita */}
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-white">
                Receita (USD)
              </Label>
              <Input
                id="revenue"
                type="number"
                placeholder="Ex: 45900000"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("revenue")}
              />
              <ErrosProps message={errors.revenue?.message} />
            </div>
            {/* Lucro */}
            <div className="space-y-2">
              <Label htmlFor="profit" className="text-white">
                Lucro (USD)
              </Label>
              <Input
                id="profit"
                type="number"
                placeholder="Ex: 33770"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("profit")}
              />
              <ErrosProps message={errors.profit?.message} />
            </div>
            {/* Trailer */}
            <div className="space-y-2">
              <Label htmlFor="trailer" className="text-white">
                Trailer (URL)
              </Label>
              <Input
                id="trailer"
                placeholder="Ex: https://www.youtube.com/..."
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("trailer")}
              />
              <ErrosProps message={errors.trailer?.message} />
            </div>
            {/* Capa (Upload de Arquivo) */}
            <div className="space-y-2">
              <Label htmlFor="cape" className="text-white">
                Capa (Imagem)
              </Label>
              <input
                id="cape"
                type="file"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("cape")}
              />
              <ErrosProps message={errors.cape?.message} />
            </div>
            {/* Banner (Upload de Arquivo) */}
            <div className="space-y-2">
              <Label htmlFor="banner" className="text-white">
                Banner (Imagem)
              </Label>
              <input
                id="banner"
                type="file"
                className="bg-[#121113] border-[#F1E6FD30] text-white w-full max-w-full"
                {...register("banner")}
              />
              <ErrosProps message={errors.banner?.message} />
            </div>
          </div>
          <DrawerFooter>
            <Button
              type="submit"
              className="bg-[#8E4EC6] text-white rounded-none cursor-pointer"
            >
              Adicionar Filme
            </Button>
            <Button
              variant="outline"
              type="button"
              className="bg-transparent border-[#F1E6FD30] text-white rounded-none cursor-pointer"
            >
              Cancelar
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerAddMovie;
