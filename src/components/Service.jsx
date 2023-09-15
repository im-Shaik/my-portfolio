import React from "react";
import { useDataContext } from "../context/Data";
import "../css/service.css";

const Service = () => {
  const { service } = useDataContext();

  return (
    <section className="services  my-[20px] py-20" id="services">
      <div className="container mx-auto px-3 max-w-[1100px]">
        <h1 className="text-secondary text-3xl md:text-4xl text-center mb-5 md:mb-10 font-bold">
          Services
        </h1>
        <div className="boxs flex justify-between items-center flex-wrap w-full">
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="box p-[20px] rounded-xl relative shadow-lg drop-shadow-xl"
              >
                <svg
                  className="absolute -z-10 left-0 top-0 h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsxlink="http://www.w3.org/1999/xlink"
                  xmlnsa="http://svgjs.dev/svgjs"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 560"
                >
                  <g mask='url("#SvgjsMask1003")' fill="none">
                    <path
                      d="M606.79 658.31C738.3 650.59 817.85 417.79 1071.06 409.04 1324.26 400.29 1412.83 254.34 1535.32 252.24"
                      stroke="rgba(115, 194, 51, 0.58)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M882.83 627.96C949.16 625.63 920.46 532.31 1125.82 521.02 1331.18 509.73 1472.58 255.88 1611.8 246.62"
                      stroke="rgba(115, 194, 51, 0.58)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M527.6 584.67C709.79 539.04 779.75 46.31 1049.29 44.09 1318.83 41.87 1424.47 305.14 1570.98 312.89"
                      stroke="rgba(115, 194, 51, 0.58)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M265.33 624.94C464.35 612.04 609.81 236.38 961.74 235.84 1313.68 235.3 1478.04 419.08 1658.16 420.64"
                      stroke="rgba(115, 194, 51, 0.58)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M438.84 616.65C585.23 616.58 719.33 561.53 1021.51 558.61 1323.7 555.69 1444.46 301.42 1604.19 295.41"
                      stroke="rgba(115, 194, 51, 0.58)"
                      strokeWidth="2"
                    ></path>
                  </g>
                  <defs>
                    <mask id="SvgjsMask1003">
                      <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                  </defs>
                </svg>
                <div
                  className="p-[20px] bg-white text-center text-xl md:text-2xl text-primary rounded-xl mb-2"
                  dangerouslySetInnerHTML={{ __html: item.serviceTAG }}
                ></div>
                <div>
                  <h1 className="text-xl md:text-2xl text-primary font-bold text-center">
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
