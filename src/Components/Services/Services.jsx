// import React, { Component } from "react";

// // imports react-icons
// import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// // imports components
// import Title from "../Title/Title";

// export default class Services extends Component {
//   state = {
//     services: [
//       {
//         icon: <FaCocktail />,
//         title: "free cocktails",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaShuttleVan />,
//         title: "free shuttle",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaBeer />,
//         title: "storages beer",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//     ],
//   };

//   render() {
//     return (
//       <section className="services">
//         <Title title="services" />

//         <div className="services-center">
//           {this.state.services.map((item, index) => {
//             return (
//               <article key={index} className="services">
//                 <span>{item.icon}</span>
//                 <h6>{item.title}</h6>
//                 <p>{item.info}</p>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }


import React, { Component } from "react";

// Importing react-icons
import { FaSwimmingPool, FaUmbrellaBeach, FaWater, FaUtensils } from "react-icons/fa";

// Importing components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSwimmingPool />,
        title: "Ocean View Rooms",
        info:
          "Relax in luxurious rooms with stunning ocean views and private balconies.",
      },
      {
        icon: <FaUmbrellaBeach />,
        title: "Private Beach Access",
        info:
          "Enjoy exclusive access to a pristine beach with sunbeds and cabanas.",
      },
      {
        icon: <FaWater />,
        title: "Water Sports & Activities",
        info:
          "Experience thrilling water adventures like jet skiing, snorkeling, and kayaking.",
      },
      {
        icon: <FaUtensils />,
        title: "Exotic Seafood Dining",
        info:
          "Savor fresh seafood and tropical drinks with a beachfront dining experience.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
