import { Box, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import useCam from "../hooks/useCam";
import Buffer from "buffer";
import axios from "axios";

const username = "Donaldedward1921";
const password = "Props&rotors@5755";
function CamIframe({ port = 8010 }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string>(null);
  const { cam } = useCam();
  const getPageContent = async (newImage = false) => {
    try {
      setLoading(true);
      // const url = `http://98.97.102.60:${port}/record/current.jpg`;
      const url = `http://localhost:8000/api/img${newImage ? "?new=1" : ""}`;
      const img = await axios.get(url, {
        responseType: "blob",
      });
      // Create a FileReader object
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result property of the FileReader contains the base64 encoded data
        const base64String = reader.result;

        // Use the base64String as needed
        if (typeof base64String === "string") setImageSrc(base64String);
        getPageContent(true);

        setLoading(false);
      };

      // Read the blob as a Data URL (base64)
      reader.readAsDataURL(img.data);

    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPageContent(false);
    // if (formRef.current) formRef.current.submit();
  }, []);

  return (
    <>
      {cam?.name}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "20em",
          borderRadius: 2,
          border: "1px rgba(204, 204, 204, 0.304) dashed",
          overflow: "hidden",
          "-webkit-box-shadow": "2px 2px 11px 0px rgba(0,0,0,0.27)",
          "-moz-box-shadow": "2px 2px 11px 0px rgba(0,0,0,0.27)",
          "box-shadow": "2px 2px 11px 0px rgba(0,0,0,0.27)",
        }}
      >
        {loading && imageSrc === null && <CircularProgress />}
        {imageSrc === null  && !loading &&   (
          <VideoCameraBackIcon />
        )}
        {imageSrc !== null && (
          <img
            src={imageSrc}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </Box>
    </>
  );
}

export default CamIframe;
