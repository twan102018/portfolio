// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import './styles.css'; // Include your CSS file
// import img1 from './image.png';
// import img2 from './london.jpg';

// const Project1 = () => {
//   useEffect(() => {
//     // Set up the body height based on content height
//     const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
//     const imgHolderHeight = window.innerHeight;
//     const additionalScrollHeight = window.innerHeight;

//     const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
//     document.body.style.height = `${totalBodyHeight}px`;
//   }, []);

//   return (
//     <>
//       <div className="logo"></div>
//       <div className="header">
//         <motion.div
//           className="letters"
//           animate={{
//             x: -window.innerWidth * 3,
//             scale: 10,
//           }}
//           transition={{
//             ease: "easeInOut",
//             duration: 1,
//             scroll: {
//               from: "top top",
//               to: "+=200%",
//               scrub: 1,
//             },
//           }}
//         >
//           <div>a</div>
//           <div>r</div>
//           <div>t</div>
//           <div>w</div>
//         </motion.div>
//         <motion.div
//           className="letters"
//           animate={{
//             x: window.innerWidth * 3,
//             scale: 10,
//           }}
//           transition={{
//             ease: "easeInOut",
//             duration: 1,
//             scroll: {
//               from: "top top",
//               to: "+=200%",
//               scrub: 1,
//             },
//           }}
//         >
//           <div>o</div>
//           <div>r</div>
//           <div>k</div>
//           <div>s</div>
//         </motion.div>
//       </div>

//       <div className="website-content">
//         <div className="img-holder">
//           <motion.img
//             src={img2}
//             alt=""
//             initial={{ rotation: 30 }}
//             animate={{
//               clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//             }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//           />
//         </div>
//         <div className="content-holder">
//           <div className="row">
//             <h1>History</h1>
//           </div>
//           {[...Array(3)].map((_, index) => (
//             <div className="row" key={index}>
//               <div className="img">
//                 <img src={img1} alt="" />
//               </div>
//             </div>
//           ))}
//           <div className="row">
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
//               doloribus! Est saepe fugit dolore, magnam modi nemo repellat
//               voluptates, accusamus, nostrum quod eligendi aliquid esse atque?
//               Facere tempora harum voluptate?
//             </p>
//           </div>
//           <div className="row">
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
//               doloribus! Est saepe fugit dolore, magnam modi nemo repellat
//               voluptates, accusamus, nostrum quod eligendi aliquid esse atque?
//               Facere tempora harum voluptate?
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project1;
