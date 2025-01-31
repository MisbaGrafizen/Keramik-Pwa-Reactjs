import React, { useEffect, useState } from "react";
import Preloader from "../../src/Component/Preloader";
import { useLocation } from "react-router-dom";
import { ApiGet } from "../helper/axios";

export default function PdfPage() {
  const location = useLocation();
  const { productId } = location.state || {};
  const [pdfUrls, setPdfUrls] = useState([]); // To store PDF URLs
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfs = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      try {
        const response = await ApiGet(`/admin/product-images/${productId}`); 
        console.log("response", response);

        if (response?.data?.length > 0) {
          // Assuming the `file` property contains PDF URLs
          const urls = response.data
            .filter((item) => item.file.endsWith(".pdf")) // Filter only PDFs
            .map((item) => item.file); // Extract PDF URLs
          setPdfUrls(urls);
        } else {
          console.error("No PDFs found for the product");
        }
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, [productId]);

  console.log("pdfUrls", pdfUrls);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : pdfUrls.length > 0 ? (
        <div className="flex flex-col items-center w-full h-screen gap-4 p-4">
          {pdfUrls.map((url, index) => (
            <div key={index} className="w-full h-full">
              {/* Embed PDF Viewer */}
              <iframe
                src={url}
                title={`Product PDF ${index + 1}`}
                className="w-full h-full border-none"
              />
              {/* Option to download the PDF */}
              <a
                href={url}
                download={`Product_PDF_${index + 1}.pdf`}
                className="text-blue-500 mt-2 text-center block"
              >
                Download PDF {index + 1}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No PDFs found for this product.</p>
      )}
    </>
  );
}
