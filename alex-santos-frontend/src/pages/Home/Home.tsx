import CardMovie from "@/components/CardMovie/CardMovie";
import DrawerAddMovie from "@/components/Drawer/Drawer";
import ModalFilter from "@/components/ModalFilter/ModalFilter";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/layout/Layout";
import movieGetAllApi from "@/service/movie/movieGetAllApi";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [title , setTitle] = useState("");
  const [debaunce, setDebaunce] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaunce(title);
    }, 900); // 500ms delay

    return () => clearTimeout(handler);
  }, [title]);

  const { data: dataMoviesAll, isLoading } = useQuery({
    queryKey: ["moviesAll", page , debaunce],
    queryFn: () => movieGetAllApi(page , 10, debaunce),
  });

  useEffect(() => {
    if (dataMoviesAll) {
      setTotalPages(Math.ceil(dataMoviesAll.total / 10));
    }
  }, [page, dataMoviesAll]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin w-8 h-8 text-blue-500" />
        <p className="text-black">Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="content  max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-end  py-4 gap-4 ">
            <Input
              type="search"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Pesquisar por filmes"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-[#121113] border-[#F1E6FD30] text-white"
            />
            <div className="flex w-full md:w-auto space-x-4 justify-between">
              <ModalFilter />

              <DrawerAddMovie />
            </div>
          </div>
          <Card className=" bg-[#121113]/80  p-4 mb-5 border-none rounded-none">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 justify-items-center">
              {dataMoviesAll?.data?.map((movie) => (
                <CardMovie
                  key={movie?.id}
                  id={movie?.id}
                  title={movie?.title}
                  poster={movie?.cape}
                />
              ))}
            </div>
          </Card>
          <div className="mb-5">
            <Pagination
              page={page}
              count={totalPages}
              shape="rounded"
              onChange={(_, newPage) => setPage(newPage)}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                "& .MuiPagination-ul": {
                  gap: "8px",
                },
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#9333EA",
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#7e22ce",
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#313031",
                  color: "#fff",

                  fontWeight: "bold",
                },
                "& .MuiPaginationItem-previousNext": {
                  backgroundColor: "#27272A",
                  color: "#fff",
                  "&.Mui-disabled": {
                    opacity: 0.3,
                  },
                },
              }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
