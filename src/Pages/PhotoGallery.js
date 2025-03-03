// import React, { useState } from "react";
// import Footer from "../Components/Footer";
// import Head from "../Components/Head";

// const images = [
//   "/img/stud.jpg",
//   "/img/stud2.jpg",
//   "/img/eker.jpg",
//   "/img/forr.jpg",
//   "/img/stud.jpg",
//   "/img/stud2.jpg",
//   "/img/eker.jpg",
//   "/img/forr.jpg",
//   "/img/stud.jpg",
//   "/img/stud2.jpg",
//   "/img/eker.jpg",
//   "/img/forr.jpg",
//   "/img/stud.jpg",
//   "/img/stud2.jpg",
//   "/img/eker.jpg",
//   "/img/forr.jpg",
// ];

// const PhotoGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <Head></Head>
//       <div className="gallery-container">
//         <div className="gallery">
//           {images.map((src, index) => (
//             <div
//               className="card"
//               key={index}
//               onClick={() => setSelectedImage(src)}
//             >
//               <img src={src} alt={`Image ${index + 1}`} />
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedImage && (
//           <div className="modal" onClick={() => setSelectedImage(null)}>
//             <span className="close">&times;</span>
//             <img
//               className="modal-content"
//               src={selectedImage}
//               alt="Full size"
//             />
//           </div>
//         )}
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default PhotoGallery;

import React, { useState } from "react";
import Footer from "../Components/Footer";
import Head from "../Components/Head";

const images = Array.from({ length: 100 }, (_, i) => `/imgg/image${i + 1}.jpg`); // Simulating 100 images

const imagesPerPage = 12; // Number of images per page

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Get images for the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <>
      <Head></Head>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Ebe Ngosi Eserese Ekeremgba Akpauche ndi gara aga
          </h4>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          {currentImages.map((src, index) => (
            <div
              className="card"
              key={index}
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="pagination">
          <button
            style={{ backgroundColor: "#C80036" }}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            style={{ backgroundColor: "#C80036" }}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <span className="close">&times;</span>
            <img
              className="modal-content"
              src={selectedImage}
              alt="Full size"
            />
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default PhotoGallery;
