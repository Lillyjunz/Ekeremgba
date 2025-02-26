import VideoCard from "./VideoCard";

const VideoGallery = () => {
  return (
    <div className="video-gallery pb-5">
      <VideoCard title="Deputy Govano Abia steeti" videoSrc="/img/deputy.mp4" />
      <VideoCard
        title="Ndi nkwalite ekeremgba akpauche"
        videoSrc="/img/deput.mp4"
      />
      <VideoCard
        title="Ndi nkwalite ekeremgba akpauche"
        videoSrc="/img/depu.mp4"
      />
    </div>
  );
};

export default VideoGallery;
