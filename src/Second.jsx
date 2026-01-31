import React, { useState, useEffect } from "react";

const AdvantageSection = (props) => {
  const {
    mainTitle = "The Nirmal Bang Wealth Advantage",
    mainSubtitle =
      "Build a Business That Scales With strong research, reliable technology, and structured support across multiple financial products",
    items = [
       {
        title: "Robust Operational",
        subtitle: "Framework",
        description:
          "Supports MFDs ensuring complete transparency & peace of mind",
      },
      {
        title: "Sales Support That",
        subtitle: "Drives Results",
        description: "Strengthening engagement & accelerating business growth",
      },

     {
        title: "Compliance Without Complexity",
        description:
          "With simplified regulatory requirements for mutual fund distributors",
      },

      {
        title: "Learning That Elevates Practice",
        description:
          "With Continuous training for MFDs, sharpening decision - market & advisory capabilities",
      },

     {
        title: "Timely Market & Industry Insights",
        description: "That keep MFDs ahead of the curve",
      },
      {
        title: "One Platform",
        subtitle: "With Total Control",
        description: "Of a fully integrated technology platform",
      },
      {
        title: "Unbiased & Disciplined",
        subtitle: "Research You Can Rely On",
        description: "Across investment product categories",
      },
     
    ],
  } = props;

   const desktopAngles = [170, 153, 130, 90, 50, 27, 9];
  const mobileAngles = [595, 553,511, 90, 48, -9, -62];

   const [angles, setAngles] = useState(desktopAngles);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setAngles(mobileAngles);
      } else {
        setAngles(desktopAngles);
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="nb-adv-section">
      <div className="nb-container">
        <div className="nb-visual-container">
          <div className="nb-center-graphic">
            <div className="circle-middle"></div>
            <div className="circle-inner"></div>
            <div className="arc-line"></div>
          </div>

          <div className="nb-items-wrapper">
           {items.map((item, index) => {
  const angle = angles[index];
  const isLeft = angle > 90;
  const isRight = angle < 90;


              return (
                <div
                  key={index}
                  className={`nb-item item-${index}`}
                  style={{ "--angle": `${angle}deg` }}
                >
                  <div
                    className={`nb-item-content ${
                      isLeft
                        ? "text-end"
                        : isRight
                        ? "text-start"
                        : "text-center"
                    }`}
                  >
                    <h4 className="nb-item-title">
                      {item.title}
                      {item.subtitle && (
                        <>
                          <br />
                          {item.subtitle}
                        </>
                      )}
                    </h4>
                    <p className="nb-item-desc">{item.description}</p>
                  </div>

                  <div className="nb-connector">
                    <div className="dot-outer"></div>
                    <div className="line-dashed"></div>
                    <div className="dot-inner"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SAME CSS AS YOUR CODE */}
       <style>{`
        .nb-adv-section {
          background-color: #ffffff;
          overflow: hidden;
        }

        .nb-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nb-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .nb-pill {
          background: #f0f2ff;
          color: #5c6bc0;
          padding: 8px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          display: inline-block;
          border: 1px solid #e0e4ff;
        }

        .nb-subtitle {
          margin-top: 20px;
          color: #666;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          font-size: 18px;
        }

        .nb-visual-container {
          position: relative;
          height: 568px;
        }

        .nb-center-graphic {
          position: absolute;
          bottom: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          z-index: 1;
        }

        .circle-middle {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: rgba(131, 144, 227, 0.2);
          border-radius: 50%;
        }

        .circle-inner {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: #b3bcff;
          border-radius: 50%;
        }

        .arc-line {
             position: absolute;
    top: 205px;
    left: 50%;
    transform: translateX(-48%);
    width: 497px;
    height: 550px;
    border: 1px dashed #d1d5db;
    border-radius: 50%;
    clip-path: inset(0 0 50% 0);
        }

        .nb-items-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .nb-item {
        position: absolute;
    bottom: 0;
    left: 51%;
    width: 300px;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(calc(var(--angle) - 90deg)) translateY(-390px);
    z-index: 2;
        }

        .nb-item-content {
          /* Counter-rotate the content so text stays upright */
             transform: rotate(calc(90deg - var(--angle)));
    width: 280px;
    position: absolute;
    top: -166px;
    left: 52%;
    margin-left: -140px;
        }

        .text-end { text-align: right; }
        .text-start { text-align: left; }
        .text-center { text-align: center; }

        .nb-item-title {
          color: #5c6bc0;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .nb-item-desc {
          color: #333;
          font-size: 14px;
          line-height: 1.4;
        }

        .nb-connector {
       position: absolute;
    top: 0;
    left: 50%;
       height: 152px;
    width: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-37%);
        }

        .dot-outer {
          width: 12px;
          height: 12px;
          background: #b3bcff;
          border-radius: 50%;
          margin-bottom: 4px;
        }

        .line-dashed {
          flex-grow: 1;
          width: 1px;
          border-left: 1px dashed #b3bcff;
        }

        .dot-inner {
          width: 16px;
          height: 16px;
          background: #7986cb;
          border-radius: 50%;
          margin-top: 4px;
        }

        @media (max-width: 992px) {
  .nb-visual-container {
    height: 520px;
  }

  .nb-center-graphic {
    display: block;
    width: 320px;
    height: 320px;
    bottom: -80px;
  }

  .circle-middle {
    width: 180px;
    height: 180px;
    bottom: 40px;
  }

  .circle-inner {
    width: 120px;
    height: 120px;
    bottom: 70px;
  }

  .arc-line {
    width: 300px;
    height: 300px;
    top: 140px;
    clip-path: inset(0 0 50% 0);
  }

  .nb-items-wrapper {
    position: relative;
    height: 100%;
  }

  .nb-item {
    position: absolute;
    left: 50%;
    transform-origin: bottom center;
    transform: translateX(-50%)
      rotate(calc(var(--angle) - 90deg))
      translateY(-230px);
    width: 180px;
  }

  .nb-item-content {
    transform: rotate(calc(90deg - var(--angle)));
    width: 170px;
    top: -110px;
    left: 50%;
    margin-left: -85px;
    font-size: 12px;
  }

  .nb-item-title {
    font-size: 14px;
  }

  .nb-item-desc {
    font-size: 12px;
  }

  .nb-connector {
    display: flex;
    height: 110px;
  }
}
  @media (max-width: 768px) {
  .nb-visual-container {
    height: 420px;
  }

  .nb-center-graphic {
            display: block;
        width: 260px;
        height: 260px;
        bottom: 157px;
  }

  .circle-middle {
    width: 115px;
    height: 115px;
    bottom: 35px;
  }

  .circle-inner {
    width: 74px;
    height: 74px;
    bottom: 55px;
  }

  .arc-line {
         width: 161px;
        height: 161px;
        top: 87px;
        left: 126px;
        clip-path: inset(0 0 0% 0);
        border: 2px solid #00000045;
  }

  .nb-items-wrapper {
    position: relative;
    height: 100%;
             bottom: 251px;
  }

  .nb-item {
    position: absolute;
    left: 50%;
    width: 160px;
    transform-origin: bottom center;
    transform: translateX(-50%)
      rotate(calc(var(--angle) - 90deg))
      translateY(-170px);
  }

  .nb-item-content {
    transform: rotate(calc(90deg - var(--angle)));
    width: 150px;
    top: -90px;
    left: 50%;
    margin-left: -75px;
            text-align: start !important;
  }

  .nb-item-title {
    font-size: 9px;
  }

  .nb-item-desc {
    font-size: 9px;
  }

  .nb-connector {
    height: 58px;
  }
}


@media (max-width: 576px) {
  .nb-visual-container {
    height: 460px;
  }

  .nb-item {
           transform: translateX(-50%) rotate(calc(var(--angle) - 90deg)) translateY(-133px);
  }
}

        }
      `}</style>
    </section>
  );
};

export default AdvantageSection;
