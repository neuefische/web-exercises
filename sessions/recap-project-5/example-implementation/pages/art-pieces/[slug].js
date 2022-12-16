import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  handleSubmitComment,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedImage = pieces.find((piece) => piece.slug === slug);
  const imageInfo = artPiecesInfo.find((infoItem) => infoItem.slug === slug);

  if (!selectedImage) {
    return null;
  }

  return (
    <ArtPieceDetails
      selectedImage={selectedImage}
      imageInfo={imageInfo}
      handleSubmitComment={handleSubmitComment}
    />
  );
}
