import React, { useEffect, useState } from "react";
import Preloader from "../../src/Component/Preloader";
import { useLocation } from "react-router-dom";
import { ApiGet } from "../helper/axios";

export default function PdfPage() {
  const location = useLocation();
  const { productId } = location.state || {};
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdf = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      try {
        const response = await ApiGet(`/admin/product-images/${productId}`);
        console.log("response", response);

        if (response?.data?.length > 0) {
          setPdfUrl(response.data[0].file); // Use the first PDF URL
        } else {
          console.error("No PDF file found for the product");
        }
      } catch (error) {
        console.error("Error fetching PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdf();
  }, [productId]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : pdfUrl ? (
        <div className="flex flex-col items-center w-full h-screen">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-[90vh] md:w-[80%] md:h-[85vh] border"
          >
            <p className="text-center text-gray-500">
              It seems your browser doesn’t support embedded PDFs. You can{" "}
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                download the PDF
              </a>{" "}
              instead.
            </p>
          </object>
        </div>
      ) : (
        <p className="text-center text-gray-500">No PDF found for this product.</p>
      )}
    </>
  );
}
