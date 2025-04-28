import * as yup from "yup";

export const createMovieSchema = yup.object({
  title: yup.string().required("Título obrigatório"),
  titleOriginal: yup.string().required("Título original obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  sinopse: yup.string().required("Sinopse obrigatória"),
  popularity: yup.number().required("Popularidade obrigatória"),
  votes: yup.number().required("Votos obrigatórios"),
  situation: yup.string().required("Situação obrigatória"),
  language: yup.string().required("Linguagem obrigatória"),
  launchDate: yup.date().required("Data de lançamento obrigatória"),
  genre: yup.string().required("Gênero obrigatório"),
  budget: yup.number().required("Orçamento obrigatório"),
  revenue: yup.number().required("Arrecadação obrigatória"),
  profit: yup.number().required("Lucro obrigatório"),
  duration: yup.number().required("Duração obrigatória"),
  trailer: yup.string().required("Trailer obrigatório"),
  cape: yup.mixed(),
  banner: yup.mixed(),
});
  