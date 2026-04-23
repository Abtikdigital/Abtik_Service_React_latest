"use client";
import { useParams } from "next/navigation";;

const PdfPreview = () => {
 const { fileName } = useParams();

 return (
  <>
   <iframe src={`/${fileName}`} className="w-screen h-screen" />
  </>
 );
};

export default PdfPreview;
