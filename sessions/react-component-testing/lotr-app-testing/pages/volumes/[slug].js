import { useRouter } from "next/router";
import AllVolumesNavigation from "../../components/AllVolumesNavigation";
import Books from "../../components/Books";
import ColoredBox from "../../components/ColoredBox";
import Introduction from "../../components/Introduction";
import Main from "../../components/Main";
import VolumeNavigation from "../../components/VolumeNavigation";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <Main>
      <AllVolumesNavigation />
      <Introduction title={title} text={description} />
      <ColoredBox $color={color}>
        <Books books={books} cover={cover} title={title} />
      </ColoredBox>
      <VolumeNavigation
        previousVolume={previousVolume}
        nextVolume={nextVolume}
      />
    </Main>
  );
}
