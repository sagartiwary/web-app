import { useState } from "react";
import { RecordRTCPromisesHandler } from "recordrtc";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { saveAs } from "file-saver";
import { FaVideoSlash, FaDownload, FaCamera } from "react-icons/fa";
export function Home() {
  const [recorder, setRecorder] = useState(null);
  const [stream, setStream] = useState(null);
  const [videoBlob, setVideoBlob] = useState(null);
  const [type, setType] = useState("video");

  const startRecording = async () => {
    const mediaDevices = navigator.mediaDevices;
    const stream =
      type === "video"
        ? await mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })
        : await mediaDevices.getDisplayMedia({
            video: true,
            audio: false,
          });
    const recorder = new RecordRTCPromisesHandler(stream, {
      type: "video",
    });
    await recorder.startRecording();
    setRecorder(recorder);
    setStream(stream);
  };

  const stopRecording = async () => {
    if (recorder) {
      await recorder?.stopRecording();
      stream.stop();
      const blob = await recorder?.getBlob();
      setVideoBlob(blob);
      setStream(null);
      setRecorder(null);
    }
  };
  const changeType = () => {
    if (type == "screen") {
      setType("video");
    } else {
      setType("screen");
    }
  };
  const downloadVideo = () => {
    if (videoBlob) {
      saveAs(videoBlob, `Video-${Date.now()}.webm`);
    }
  };

  return (
    <>
      <div className="p-5">
        <div className="flex justify-center sm:flex-col md:flex-row lg:flex-row">
          <button
            className="m-1 border border-gray-300 px-3 py-2 rounded mr-3 bg-blue-600  text-white"
            onClick={changeType}
          >
            {type == "video" ? "Record Video" : "Record Screen"}
          </button>
          <FaCamera
            onClick={startRecording}
            className="m-1 mr-3 w-6 h-10   cursor-pointer"
          />
          <FaVideoSlash
            className=" cursor-pointer m-1 mr-3 w-6 h-10"
            onClick={stopRecording}
            display={!recorder}
          />
          <FaDownload
            className="m-1 mr-3 w-6 h-10 cursor-pointer"
            onClick={downloadVideo}
            display={!videoBlob}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="h-[50vh] w-[100%] sm:w-[100%] md:w-[50vw] lg:w-[50vw]">
          {videoBlob ? (
            <Player src={window.URL.createObjectURL(videoBlob)} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
