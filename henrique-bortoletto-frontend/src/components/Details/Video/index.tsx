import { getYoutubeVideoId } from '@/lib/youtube'

import * as S from './Base'

type DetailVideoProps = {
  videoId: string
  title: string
}

export const DetailVideo = ({ videoId, title }: DetailVideoProps) => (
  <S.DetailVideoRoot>
    <S.DetailVideoTitle>Trailer</S.DetailVideoTitle>
    <S.DetailVideoContent>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${getYoutubeVideoId(videoId)}`}
        title={`${title} - Trailer Oficial`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.DetailVideoContent>
  </S.DetailVideoRoot>
)
