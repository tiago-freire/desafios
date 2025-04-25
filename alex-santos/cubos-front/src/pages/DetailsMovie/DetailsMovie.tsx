import SmallCard from "@/components/SmallCard/SmallCard";
import SmallCardInformation from "@/components/SmallCardInformation/SmallCardInformation";
import Layout from "@/layout/Layout";
import movieGetIdApi from "@/service/movie/movieGetIdApi";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import DrawerEdite from "@/components/DrawerEdite/DrawerEdite";
import movieDeleteApi from "@/service/movie/movieDeleteApi";

const DetailsMovie = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigaate = useNavigate();  

  const { data: dataMovieId, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => movieGetIdApi(Number(id)),
  });
  console.log("dataMovieId", dataMovieId);

  const formatNumber = (value: number | undefined) => {
    if (value === undefined) {
      return "";
    }
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(1)}B`;
    } else if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(1)}M`;
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  const { mutate: deleteMovie, } = useMutation({
    mutationFn: () => movieDeleteApi(Number(id)),
    onSuccess: () => {
      alert("Filme deletado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["moviesAll"] });
        navigaate("/");
    },
    onError: (error) => {
      alert("Erro ao deletar filme: " + error.message);
    },
  });
  const onSubmit = (id: void) => {
    deleteMovie(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin w-10 h-10 text-[#8E4EC6]" />
        <p className="text-black">Carregando...</p>
      </div>
    );
  }

  

  return (
    <Layout>
      <main
        className="relative max-w-7xl h-1/6 mx-auto p-10 mt-5 mb-10 bg-no-repeat bg-cover bg-center  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-black/70 before:to-transparent before:z-0 rounded-md overflow-hidden"
        style={{
          backgroundImage: dataMovieId?.banner
            ? `url(${dataMovieId.banner})`
            : "none",
        }}
      >
        {/* Conteúdo acima do degradê */}
        <div className="relative z-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-2xl font-bold font-Montserrat">
                {dataMovieId?.title}
              </h1>
              <p className="text-white">
                título original {dataMovieId?.titleOriginal}
              </p>
            </div>
            <div className="space-x-6">
              <Button
                variant="ghost"
                onClick={() => onSubmit()}
                className="bg-[#8E4EC6]/10 rounded-none text-white cursor-pointer"
              >
                Deletar
              </Button>
              <Button
                variant="ghost"
                className="bg-[#8E4EC6] text-white cursor-pointer rounded-none"
              >
                <DrawerEdite dataMovieId={dataMovieId} />
              </Button>
            </div>
          </div>

          <div className="flex mt-4 ">
            <img
              src={dataMovieId?.cape}
              alt="capa"
              className="w-90 h-[90vh] object-cover"
            />
            <div className="pl-3">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-between">
                  <div>
                    <p className="text-white pl-3 font-Montserrat-italic italic">
                      Todo herói tem um começo
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <SmallCard
                      title="POPULARIDADE"
                      information={dataMovieId?.popularity}
                    />
                    <SmallCard title="VOTOS" information={dataMovieId?.votes} />
                    <SmallCard title="VOTOS" information={dataMovieId?.votes} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-4/5">
                    <div className="bg-[#121113]/80 p-5 ">
                      <h3 className="text-white font-Montserrat font-bold ">
                        SINOPSE
                      </h3>
                      <p className="text-white font-Montserrat">
                        {dataMovieId?.sinopse}
                      </p>
                    </div>
                    <div className="w-5/5 mt-4 bg-[#121113]/80 p-5  ">
                      <h3 className="text-white font-Montserrat font-bold ">
                        Generos
                      </h3>
                      <div className="space-x-2 mt-2">
                        {dataMovieId?.genre.map((item) => (
                          <SmallCardInformation title={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                      <SmallCard
                        title="LANÇAMENTO"
                        information={dataMovieId?.launchDate}
                      />
                      <SmallCard
                        title="DURAÇÃO"
                        information={dataMovieId?.duration}
                      />
                      <SmallCard
                        title="SITUAÇÃO"
                        information={dataMovieId?.situation}
                      />
                      <SmallCard
                        title="IDIOMA"
                        information={dataMovieId?.language
                          .map((item) => item)
                          .join(", ")}
                      />
                    </div>
                    <div className="w-full grid grid-cols-3 mt-3 gap-x-3 gap-y-1">
                      <SmallCard
                        title="ORÇAMENTO"
                        information={formatNumber(dataMovieId?.budget)}
                      />
                      <SmallCard
                        title="RECEITA"
                        information={formatNumber(dataMovieId?.revenue)}
                      />
                      <SmallCard
                        title="LUCRO"
                        information={formatNumber(dataMovieId?.profit)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl h-1/6 mx-auto mt-5 mb-5">
        <span className="text-white font-Montserrat font-bold ">Trailler</span>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="550px"
            src={dataMovieId?.trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsMovie;
