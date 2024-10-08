import React, { useEffect, useRef, useState } from "react";
import style from "../../../pages/css/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import GlobalArrowDown from "../svg/global/arrowDown";
import GlobalAccount from "../svg/global/account";
import GlobalVerified from "../svg/global/verified";
import useBodyOutsideClick from "../../../utils/body-outside-click";
import GlobalMenu from "../svg/global/menu";
import GlobalClose from "../svg/global/close";
import MenuToggel from "../../../utils/common/menu";
import GlobalLogout from "../svg/global/logout";
import GlobalLogin from "../svg/global/login";
import { useSession } from "next-auth/react";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

import GlobalOrder from "../svg/global/order";
import { IoSearch } from "react-icons/io5";

import GlobalCart from "../svg/global/cart";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
export default function Navbar(props) {
  const [menuToggel, setMenuToggel] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);
  const [authPopup1, setAuthPopup1] = useState(false);
  const refAuthPopup = useRef(null);

  const refAuthPopup1 = useRef(null);
  // const eventObj = props.page_content?.event;
  // const eventCategory = pageProp.page_content?.events.category;
  const [start, setStart] = useState(1);
  const [start1, setStart1] = useState(1);
  const [sus, setSus] = useState(false);
  const [sus1, setSus1] = useState(false);
  const [sus2, setSus2] = useState(false);
  const [sus3, setSus3] = useState(false);
  const [sus4, setSus4] = useState(false);
  const [sus5, setSus5] = useState(false);
  const [sus6, setSus6] = useState(false);
  const [sus7, setSus7] = useState(false);
  const [sus8, setSus8] = useState(false);
  const [sus9, setSus9] = useState(false);
  const [sus10, setSus10] = useState(false);

  const [pus, setPus] = useState(false);
  const [pus1, setPus1] = useState(false);
  const [pus2, setPus2] = useState(false);
  const [pus3, setPus3] = useState(false);
  const [pus4, setPus4] = useState(false);
  const [pus5, setPus5] = useState(false);
  const [pus6, setPus6] = useState(false);
  const [pus7, setPus7] = useState(false);
  const [pus8, setPus8] = useState(false);
  const [pus9, setPus9] = useState(false);
  const [pus10, setPus10] = useState(false);

  const [tus, setTus] = useState(false);
  const [tus1, setTus1] = useState(false);
  const [tus2, setTus2] = useState(false);

  const [tus3, setTus3] = useState(false);
  const [tus4, setTus4] = useState(false);

  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  const { data: userSession } = useSession();
  const router = useRouter();
  MenuToggel();
  useBodyOutsideClick(refAuthPopup, () => {
    setAuthPopup(false);
  });

  useBodyOutsideClick(refAuthPopup1, () => {
    setAuthPopup1(false);
  });

  const styleOff = {
    display: sus ? "block" : "none",
  };
  const styleoff1 = {
    display:
      sus ||
        sus1 ||
        sus2 ||
        sus3 ||
        sus4 ||
        sus5 ||
        sus6 ||
        sus7 ||
        sus8 ||
        sus9 ||
        sus10
        ? "none"
        : "block",
  };
  const styleoff2 = {
    display: sus1 ? "block" : "none",
  };
  const styleoff3 = {
    display: sus2 ? "block" : "none",
  };
  const styleoff4 = {
    display: sus3 ? "block" : "none",
  };
  const styleoff5 = {
    display: sus4 ? "block" : "none",
  };
  const styleoff6 = {
    display: sus5 ? "block" : "none",
  };
  const styleoff7 = {
    display: sus6 ? "block" : "none",
  };
  const styleoff8 = {
    display: sus7 ? "block" : "none",
  };
  const styleoff9 = {
    display: sus8 ? "block" : "none",
  };
  const styleoff10 = {
    display: sus9 ? "block" : "none",
  };
  const styleoff11 = {
    display: sus10 ? "block" : "none",
  };

  const styleji = {
    display: pus ? "block" : "none",
  };
  const styleji1 = {
    display:
      pus ||
        pus1 ||
        pus2 ||
        pus3 ||
        pus4 ||
        pus5 ||
        pus6 ||
        pus7 ||
        pus8 ||
        pus9 ||
        pus10
        ? "none"
        : "block",
  };

  const styleji2 = {
    display: pus1 ? "block" : "none",
  };

  const styleji3 = {
    display: pus2 ? "block" : "none",
  };
  const styleji4 = {
    display: pus3 ? "block" : "none",
  };
  const styleji5 = {
    display: pus4 ? "block" : "none",
  };

  const styleji6 = {
    display: pus5 ? "block" : "none",
  };

  const styleji7 = {
    display: pus6 ? "block" : "none",
  };

  const styleji8 = {
    display: pus7 ? "block" : "none",
  };

  const styleji9 = {
    display: pus8 ? "block" : "none",
  };

  const styleji10 = {
    display: pus9 ? "block" : "none",
  };
  const styleji11 = {
    display: pus10 ? "block" : "none",
  };

  const stylepi = {
    display: tus ? "block" : "none",
  };

  const stylepi1 = {
    display: tus || tus1 || tus2 || tus3 || tus4 ? "none" : "block",
  };

  const stylepi2 = {
    display: tus1 ? "block" : "none",
  };

  const stylepi3 = {
    display: tus2 ? "block" : "none",
  };

  const stylepi4 = {
    display: tus3 ? "block" : "none",
  };

  const stylepi5 = {
    display: tus4 ? "block" : "none",
  };

  useEffect(() => {
    console.log(userSession);
    if (userSession?.user.error === "invalid-version") {
      document.cookie =
        "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "next-auth.session-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      signOut();
    }
  }, [userSession?.user?.error, router]);

  if (typeof props.navbarProps == "undefined" || props.navbarProps == false) {
    return "";
  } else {
    const navbarData = props?.navbarProps;
    const settings = navbarData?.settings;
    const navigation = navbarData?.navigation;

    let navbarItems = null;
    if (navigation?.items) {
      navbarItems = JSON.parse(navigation?.items);
    }

    const itemsSetting = {
      // "--headerBCColor": settings?.background_color,
      "--headerBCColor": "#ffffff",
      "--headerItemColor": navigation?.parent_text_color,
      "--headerItemHoverColor": navigation?.parent_text_hover_color,
      "--headerSubmenuBCColor": navigation?.background_color,
      "--headerSubmenuHoverBCColor": navigation?.hover_background_color,
      "--headerSubmenuItemColor": navigation?.text_link_color,
      "--headerSubmenuItemHoverColor": navigation?.link_hover_color,
    };

    const tab1 = () => {
      setStart(1);
      document.getElementById("one").style.background = "#F1F1F1";
      document.getElementById("two").style.background = "none";
      document.getElementById("three").style.background = "none";
      document.getElementById("four").style.background = "none";

      document.getElementById("ek").style.color = "#101010";
      document.getElementById("ek1").style.color = "#FFFFFF";
      document.getElementById("ek2").style.color = "#FFFFFF";
      document.getElementById("ek3").style.color = "#FFFFFF";
    };

    const tab2 = () => {
      setStart(2);
      document.getElementById("one").style.background = "none";
      document.getElementById("two").style.background = "#F1F1F1";
      document.getElementById("three").style.background = "none";
      document.getElementById("four").style.background = "none";

      document.getElementById("ek").style.color = "#FFFFFF";
      document.getElementById("ek1").style.color = "#101010";
      document.getElementById("ek2").style.color = "#FFFFFF";
      document.getElementById("ek3").style.color = "#FFFFFF";
    };

    const tab3 = () => {
      setStart(3);
      document.getElementById("one").style.background = "none";
      document.getElementById("two").style.background = "none";
      document.getElementById("three").style.background = "#F1F1F1";
      document.getElementById("four").style.background = "none";

      document.getElementById("ek").style.color = "#FFFFFF";
      document.getElementById("ek1").style.color = "#FFFFFF";
      document.getElementById("ek2").style.color = "#101010";
      document.getElementById("ek3").style.color = "#FFFFFF";
    };

    const tab4 = () => {
      setStart(4);
      document.getElementById("one").style.background = "none";
      document.getElementById("two").style.background = "none";
      document.getElementById("three").style.background = "none";
      document.getElementById("four").style.background = "#F1F1F1";

      document.getElementById("ek").style.color = "#FFFFFF";
      document.getElementById("ek1").style.color = "#FFFFFF";
      document.getElementById("ek2").style.color = "#FFFFFF";
      document.getElementById("ek3").style.color = "#101010";
    };

    const fab1 = () => {
      setStart1(1);
      document.getElementById("one").style.background = "#F1F1F1";
      document.getElementById("two").style.background = "none";
      document.getElementById("ek").style.color = "#101010";
      document.getElementById("ek1").style.color = "#FFFFFF";
    };

    const fab2 = () => {
      setStart1(2);
      document.getElementById("one").style.background = "none";
      document.getElementById("two").style.background = "#F1F1F1";

      document.getElementById("ek").style.color = "#FFFFFF";
      document.getElementById("ek1").style.color = "#101010";
    };

    const sop = {
      backgroundColor: "white",
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

    const router = useRouter();
    const currentPath = router.asPath;

    const dropdownRef = useRef(null);

    const dropdownRef2 = useRef(null);
    const dropdownRef5 = useRef(null);

    const dropdownRef3 = useRef(null);

    const dropdownRef4 = useRef(null);

    const handleDropdownToggle = () => {
      setIsDropdownOpen2(false);

      setIsDropdownOpen5(false);
      setIsDropdownOpen((prev) => !prev);
      // setIsDropdownOpen2(false);
    };

    const handleDropdownToggle2 = () => {
      setIsDropdownOpen(false);
      setIsDropdownOpen5(false);
      setIsDropdownOpen2((prev) => !prev);
    };
    const handleDropdownToggle5 = () => {
      setIsDropdownOpen(false);
      setIsDropdownOpen2(false);
      setIsDropdownOpen5((prev) => !prev);
    };

    const handleDropdownToggle3 = () => {
      setIsDropdownOpen3(false);
      setIsDropdownOpen3((prev) => !prev);
    };

    const handleDropdownToggle4 = () => {
      setIsDropdownOpen4(false);
      setIsDropdownOpen4((prev) => !prev);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false); // Close dropdown if click is outside of it
      }
    };

    const handleClickOutside2 = (e) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target)) {
        setIsDropdownOpen2(false); // Close dropdown if click is outside of it
      }
    };

    const handleClickOutside3 = (e) => {
      if (dropdownRef3.current && !dropdownRef3.current.contains(e.target)) {
        setIsDropdownOpen3(false); // Close dropdown if click is outside of it
      }
    };

    const handleClickOutside4 = (e) => {
      if (dropdownRef4.current && !dropdownRef4.current.contains(e.target)) {
        setIsDropdownOpen4(false); // Close dropdown if click is outside of it
      }
    };
    const handleClickOutside5 = (e) => {
      if (dropdownRef5.current && !dropdownRef5.current.contains(e.target)) {
        setIsDropdownOpen4(false); // Close dropdown if click is outside of it
      }
    };

    useEffect(() => {
      if (isDropdownOpen) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isDropdownOpen]);

    useEffect(() => {
      if (isDropdownOpen2) {
        document.addEventListener("click", handleClickOutside2);
      } else {
        document.removeEventListener("click", handleClickOutside2);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside2);
      };
    }, [isDropdownOpen2]);

    useEffect(() => {
      if (isDropdownOpen3) {
        document.addEventListener("click", handleClickOutside3);
      } else {
        document.removeEventListener("click", handleClickOutside3);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside3);
      };
    }, [isDropdownOpen3]);

    useEffect(() => {
      if (isDropdownOpen4) {
        document.addEventListener("click", handleClickOutside4);
      } else {
        document.removeEventListener("click", handleClickOutside4);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside4);
      };
    }, [isDropdownOpen4]);
    useEffect(() => {
      if (isDropdownOpen5) {
        document.addEventListener("click", handleClickOutside5);
      } else {
        document.removeEventListener("click", handleClickOutside5);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside5);
      };
    }, [isDropdownOpen5]);

    const jok = {
      backgroundColor: "white !important",
    };

    const [showSidebar, setShowSidebar] = useState(false);

    const data = [
      {
        title: "Teleprompter",
        subtitle: [
          {
            title: "Triumph",
            subtitle: [
              {
                title: "Triumph 24",
              },
              {
                title: "Triumph 22",
              },
              {
                title: "Triumph 21",
              },
              {
                title: "Triumph 17",
              },
              {
                title: "Triumph 15",
              },
            ],
          },
          {
            title: "Delta Prompt ",
            subtitle: [
              {
                title: "Delta Prompt 19",
              },
              {
                title: "Delta Prompt 17",
              },
              {
                title: "Delta Prompt 15",
              },
            ],
          },
          {
            title: "Punta ",
            subtitle: [
              {
                title: "Punta 17",
              },
              {
                title: "Punta 15",
              },
            ],
          },
          {
            title: "Crocodell",
            subtitle: [
              {
                title: "Crocodell 19",
              },
            ],
          },
        ],
      },
      {
        title: "Software",
        subtitle: [
          {
            title: "Cronus Pro",
            subtitle: [
              {
                title: "Mac ",
              },
              {
                title: "Window",
              },
            ],
          },
          {
            title: "Cronus Lite ",
            subtitle: [
              {
                title: "Window",
              },
            ],
          },
        ],
      },
      {
        title: "Pedestal/ Tripod / Dolly",
        subtitle: [
          {
            title: "Cronus Pro",
            subtitle: [
              {
                title: "Mac ",
              },
              {
                title: "Window",
              },
            ],
          },
          {
            title: "Cronus Lite ",
            subtitle: [
              {
                title: "Window",
              },
            ],
          },
        ],
      },
      {
        title: "Telephone Hybrid",
        subtitle: [
          {
            title: "Cronus Pro",
            subtitle: [
              {
                title: "Mac ",
              },
              {
                title: "Window",
              },
            ],
          },
          {
            title: "Cronus Lite ",
            subtitle: [
              {
                title: "Window",
              },
            ],
          },
        ],
      },
      {
        title: "Video Light",
        subtitle: [
          {
            title: "Cronus Pro",
            subtitle: [
              {
                title: "Mac ",
              },
              {
                title: "Window",
              },
            ],
          },
          {
            title: "Cronus Lite ",
            subtitle: [
              {
                title: "Window",
              },
            ],
          },
        ],
      },
      {
        title: "Contact Us",
      },
    ];

    const [showFirstlvl, setShowFirLvl] = useState(false);
    const [showSecLvl, setShowSecLvl] = useState(false);

    const [someopen1, setshowopen1] = useState(false);
    const [someopen11, setshowopen11] = useState(false);
    const [someopen2, setshowopen2] = useState(false);
    const [someopen3, setshowopen3] = useState(false);
    const [someopen4, setshowopen4] = useState(false);
    const [someopen5, setshowopen5] = useState(false);
    const [someopen6, setshowopen6] = useState(false);

    return (
      <>
        {/* desktop view  */}
        <div>
          <nav className="navbars">
            <div className="nav_test">
              <div className="nav_logo">
                <Link href="/">
                  <img src="../images/sells.svg" alt="" />
                </Link>
              </div>

              <div className="ul_nav">
                <ul className="ul_sofa">
                  <li ref={dropdownRef} className="sog">
                    <div
                      className={`normailcs ${isDropdownOpen && "makecolor"}`}
                      onClick={handleDropdownToggle}
                      href=""
                    >
                      Teleprompter
                      {isDropdownOpen && (
                        <svg
                          className="soka"
                          width="101"
                          height="95"
                          viewBox="0 0 101 95"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_19_5848)">
                            <path
                              d="M50.5 24L60.4593 38.25H40.5407L50.5 24Z"
                              fill="#EA9419"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_19_5848"
                              x="0.540649"
                              y="0"
                              width="99.9187"
                              height="94.25"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="16" />
                              <feGaussianBlur stdDeviation="20" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_19_5848"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_19_5848"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      )}
                    </div>

                    {isDropdownOpen && (
                      <div className="navItem">
                        <div className="sidebar_nav1">
                          <ul className="certify">
                            <li id="one" onClick={tab1} className="cert">
                              <span id="ek" className="sft tft">
                                Triumph
                              </span>
                            </li>
                            <li id="two" onClick={tab2}>
                              <span id="ek1" className="sft">
                                Delta Prompt
                              </span>
                            </li>
                            <li id="three" onClick={tab3}>
                              <span id="ek2" className="sft">
                                Punta
                              </span>
                            </li>

                            <li id="four" onClick={tab4}>
                              <span id="ek3" className="sft">
                                Crocodell
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="sidebar_nav2">
                          {start === 1 && (
                            <div>
                              <div className="some">
                                <span>Triumph</span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        href=""
                                      >
                                        Triumph 24
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus1(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus1(false);
                                        }}
                                        href=""
                                      >
                                        Triumph 21
                                      </a>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus2(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus2(false);
                                        }}
                                        href=""
                                      >
                                        Triumph 19
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus3(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus3(false);
                                        }}
                                        href=""
                                      >
                                        Triumph 17
                                      </a>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus4(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus4(false);
                                        }}
                                        href={"/food-testing"}
                                      >
                                        Triumph 15
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Triumph 24</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Triumph 24</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff2} className="softisf">
                                    <p style={styleoff2}>Triumph 21</p>
                                    <img
                                      style={styleoff2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff3} className="softisf">
                                    <p style={styleoff3}>Triumph 19</p>
                                    <img
                                      style={styleoff3}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff4} className="softisf">
                                    <p style={styleoff4}>Triumph 17</p>
                                    <img
                                      style={styleoff4}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff5} className="softisf">
                                    <p style={styleoff5}>Triumph 15</p>
                                    <img
                                      style={styleoff5}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {start === 2 && (
                            <div>
                              <div className="some">
                                <span>Delta Prompt </span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        href=""
                                      >
                                        Delta Prompt 19
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus1(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus1(false);
                                        }}
                                        href=""
                                      >
                                        Delta Prompt 17
                                      </a>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus2(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus2(false);
                                        }}
                                        href=""
                                      >
                                        Delta Prompt 15
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Delta Prompt 19</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Delta Prompt 19</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff2} className="softisf">
                                    <p style={styleoff2}>Delta Prompt 17</p>
                                    <img
                                      style={styleoff2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff3} className="softisf">
                                    <p style={styleoff3}>Delta Prompt 15</p>
                                    <img
                                      style={styleoff3}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {start === 3 && (
                            <div className="aosmk">
                              <div className="some">
                                <span>Punta</span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setPus(true);
                                        }}
                                        onMouseOut={() => {
                                          setPus(false);
                                        }}
                                        href=""
                                      >
                                        Punta 17
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setPus1(true);
                                        }}
                                        onMouseOut={() => {
                                          setPus1(false);
                                        }}
                                        href=""
                                      >
                                        Punta 15
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleji1} className="softisf">
                                    <p style={styleji1}>Punta 17</p>
                                    <img
                                      style={styleji1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleji} className="softisf">
                                    <p style={styleji}>Punta 17</p>
                                    <img
                                      style={styleji}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleji2} className="softisf">
                                    <p style={styleji2}>Punta 15</p>
                                    <img
                                      style={styleji2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {start === 4 && (
                            <div>
                              <div className="some">
                                <span>Crocodell</span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        href=""
                                      >
                                        Crocodell 19
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Crocodell 19</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Crocodell 19</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>

                  <li ref={dropdownRef2} className="soki">
                    <div
                      onClick={handleDropdownToggle2}
                      className={`normailcs ${isDropdownOpen2 && "makecolor"}`}
                    >
                      Software
                      {isDropdownOpen2 && (
                        <svg
                          className="soka"
                          width="99"
                          height="93"
                          viewBox="0 0 99 93"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_295_242)">
                            <path
                              d="M49.5 24L58.5933 36.75H40.4067L49.5 24Z"
                              fill="#EC691F"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_295_242"
                              x="0.406738"
                              y="0"
                              width="98.1865"
                              height="92.75"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="16" />
                              <feGaussianBlur stdDeviation="20" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_295_242"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_295_242"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      )}
                    </div>
                    {isDropdownOpen2 && (
                      <div className="navItem">
                        <div className="sidebar_nav1">
                          <ul className="certify">
                            <li id="one" onClick={fab1} className="cert">
                              <span id="ek" className="sft tft">
                                Cronus Pro
                              </span>
                            </li>
                            <li id="two" onClick={fab2}>
                              <span id="ek1" className="sft">
                                Cronus Lite
                              </span>
                            </li>

                          </ul>
                        </div>

                        <div className="sidebar_nav2">
                          {start1 === 1 && (
                            <div>
                              <div className="some">
                                <span>Cronus Pro</span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        href=""
                                      >
                                        Mac
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus1(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus1(false);
                                        }}
                                        href=""
                                      >
                                        Window
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Triumph 24</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Triumph 24</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff2} className="softisf">
                                    <p style={styleoff2}>Triumph 21</p>
                                    <img
                                      style={styleoff2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff3} className="softisf">
                                    <p style={styleoff3}>Triumph 19</p>
                                    <img
                                      style={styleoff3}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff4} className="softisf">
                                    <p style={styleoff4}>Triumph 17</p>
                                    <img
                                      style={styleoff4}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff5} className="softisf">
                                    <p style={styleoff5}>Triumph 15</p>
                                    <img
                                      style={styleoff5}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {start1 === 2 && (
                            <div>
                              <div className="some">
                                <span>Cronus Lite </span>
                              </div>
                              <div className="img_item">
                                <div className="nav_img">
                                  <ul>
                                    <li>
                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        href=""
                                      >
                                        Window
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Window</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Window</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff2} className="softisf">
                                    <p style={styleoff2}>Window</p>
                                    <img
                                      style={styleoff2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff3} className="softisf">
                                    <p style={styleoff3}>Window</p>
                                    <img
                                      style={styleoff3}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>

                  <li ref={dropdownRef5} className="soki">
                    <div
                      onClick={handleDropdownToggle5}
                      className={`normailcs ${isDropdownOpen5 && "makecolor"}`}
                    >
                      Pedestal/ Tripod / Dolly
                      {isDropdownOpen5 && (
                        <svg
                          className="soka"
                          width="99"
                          height="93"
                          viewBox="0 0 99 93"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_295_242)">
                            <path
                              d="M49.5 24L58.5933 36.75H40.4067L49.5 24Z"
                              fill="#EC691F"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_295_242"
                              x="0.406738"
                              y="0"
                              width="98.1865"
                              height="92.75"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="16" />
                              <feGaussianBlur stdDeviation="20" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_295_242"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_295_242"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      )}
                    </div>
                    {isDropdownOpen5 && (
                      <div className="navItem">
                        <div className="sidebar_nav1">
                          <ul className="certify">
                            <li id="one" onClick={fab1} className="cert">
                              <span id="ek" className="sft tft">
                                Kratos
                              </span>
                            </li>

                          </ul>
                        </div>

                        <div className="sidebar_nav2">
                          {start1 === 1 && (
                            <div>
                              <div className="some addgaps">
                                <span>Movies</span>
                                <span>Studio</span>
                              </div>

                              <div className="img_item">
                                <div className="nav_img maketicol" >

                                  <ul className="make_url jflkds">
                                    <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() =>{
                                          setshowopen1(!someopen1);
                                          setshowopen2(false)
                                          setshowopen3(false)
                                          setshowopen4(false)
                                          setshowopen5(false)
                                          setshowopen6(false)
                                        } }
                                      >
                                        Tripod Kits <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen1 &&
                                        <div className="wrapss">
                                          <p>MV45G-AL</p>
                                          <p>MV30G-AL</p>
                                          <p>EN35G-AL</p>
                                          <p>EN30G-AL</p>
                                          <p>EN25G-AL</p>
                                          <p>EN18G-AL</p>
                                          <p>EN18G-CF</p>
                                          <p>EN15G-AL</p>
                                          <p>EN15G-CF</p>
                                          <p>EN12G-AL</p>
                                          <p>EN12G-CF</p>
                                          <p>EN8G-AL</p>
                                          <p>EN8G-CF</p>
                                          <p>EN5G-AL</p>
                                          <p>EN5G-CF</p>
                                          <p>LT8G-AL</p>
                                          <p>LT5M-AL</p>
                                          <p>LT5M-CF</p>
                                        </div>
                                      }

                                    </li>

                                    <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() => {
                                          setshowopen11(!someopen11)
                                          setshowopen1(false);
                                          setshowopen2(false)
                                          setshowopen3(false)
                                          setshowopen4(false)
                                          setshowopen5(false)
                                          setshowopen6(false)
                                        }}
                                      >
                                        Pedestal <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen11 &&
                                        <div className="wrapss">
                                          <p>PDC ( 100 mm )</p>
                                          <p>PDCL ( 150 mm )</p>
                                        </div>
                                      }

                                    </li>



                                  </ul>

                                  <ul className="make_url">
                                    <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() =>{
                                          setshowopen2(!someopen2)
                                          setshowopen11(false)
                                          setshowopen1(false);
                                          setshowopen3(false)
                                          setshowopen4(false)
                                          setshowopen5(false)
                                          setshowopen6(false)
                                        } }
                                      >
                                        Tripod Head <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen2 &&
                                        <div className="wrapss">
                                          <p>MV45 ( 150 mm )</p>
                                          <p>MV30 ( 150 mm )</p>
                                          <p>EN35  ( 150 mm )</p>
                                          <p>EN30  ( 150 mm )</p>
                                          <p>EN25  ( 100 mm )</p>
                                          <p>EN18  ( 100 mm )</p>
                                          <p>EN15  ( 100 mm ) </p>
                                          <p>EN12  ( 75 mm )</p>
                                          <p>EN8    ( 75 mm )</p>
                                          <p>EN5    ( 60 mm )</p>
                                          <p>LT8     ( 60 mm )</p>
                                          <p>LT5     ( 60 mm )</p>
                                        </div>
                                      }

                                    </li>
                                    {/* <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() => setshowopen3(!someopen3)}
                                      >
                                        Tripod Kits <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen3 &&
                                        <div className="wrapss">
                                          <p>MV45G-AL</p>
                                          <p>MV30G-AL</p>
                                        </div>
                                      }

                                    </li> */}
                                    {/* <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href="#"
                                        onClick={() => setshowopen4(!someopen4)}
                                      >
                                        Pedestal <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen4 &&
                                        <div className="wrapss">
                                          <p>MV45G-AL</p>
                                          <p>MV30G-AL</p>
                                        </div>
                                      }

                                    </li> */}
                                    <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() => {
                                          setshowopen5(!someopen5)
                                          setshowopen2(false)
                                          setshowopen11(false)
                                          setshowopen1(false);
                                          setshowopen3(false)
                                          setshowopen4(false)
                                          setshowopen6(false)
                                        }}
                                      >
                                        Dolly <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen5 &&
                                        <div className="wrapss">
                                          <p>D150</p>
                                          <p>D100</p>
                                          <p>D50</p>
                                          <p>D30</p>
                                        </div>
                                      }

                                    </li>
                                    <li>

                                      <a
                                        onMouseOver={() => {
                                          setSus(true);
                                        }}
                                        onMouseOut={() => {
                                          setSus(false);
                                        }}
                                        // href=""
                                        onClick={() =>{
                                          setshowopen6(!someopen6)
                                          setshowopen5(false)
                                          setshowopen2(false)
                                          setshowopen11(false)
                                          setshowopen1(false);
                                          setshowopen3(false)
                                          setshowopen4(false)
                                        }}
                                      >
                                        Pan Bar <MdKeyboardArrowDown />

                                      </a>

                                      {
                                        someopen6 &&
                                        <div className="wrapss">
                                          <p>PAN BAR 1</p>
                                          <p>PAN BAR 2</p>
                                        </div>
                                      }

                                    </li>



                                  </ul>


                                </div>

                                <div className="logo_img">
                                  <div style={styleoff1} className="softisf">
                                    <p style={styleoff1}>Triumph 24</p>
                                    <img
                                      style={styleoff1}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleOff} className="softisf">
                                    <p style={styleOff}>Triumph 24</p>
                                    <img
                                      style={styleOff}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff2} className="softisf">
                                    <p style={styleoff2}>Triumph 21</p>
                                    <img
                                      style={styleoff2}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff3} className="softisf">
                                    <p style={styleoff3}>Triumph 19</p>
                                    <img
                                      style={styleoff3}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff4} className="softisf">
                                    <p style={styleoff4}>Triumph 17</p>
                                    <img
                                      style={styleoff4}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div style={styleoff5} className="softisf">
                                    <p style={styleoff5}>Triumph 15</p>
                                    <img
                                      style={styleoff5}
                                      src="./images/sevas.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>

                              </div>
                            </div>
                          )}


                        </div>
                      </div>
                    )}
                  </li>

                  <li>
                    <Link
                      href={"/aboutus"}
                      className={`${currentPath === "/aboutus" ? "makecolor2" : ""
                        }`}
                    >
                      {" "}
                      Telephone Hybrid
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/aboutus"}
                      className={`${currentPath === "/aboutus" ? "makecolor2" : ""
                        }`}
                    >
                      {" "}
                      Video Light{" "}
                    </Link>
                  </li>

                  <li className="contactusbutton">
                    <Link
                      href={"/contact"}
                      className={`${currentPath === "/contact" ? "makecolor2" : ""
                        } `}
                    >
                      {" "}
                      <span>Contact Us</span>{" "}
                    </Link>
                  </li>

                  <li className="">
                    {/* <Link href={"/contact"} className={`${currentPath === "/contact" ? "makecolor2" : ""} `}>  </Link> */}
                    <IoSearch className="IoSearch" />
                  </li>

                </ul>
              </div>

              {/* THIS IS FOR MOBILE VIEW  */}
              <div className="mobileViewnavbar">
                <IoReorderThreeOutline
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="IoReorderThreeOutline"
                />
              </div>

              {showSidebar && (
                <div className="showbarwrap">
                  {data?.map((item1, index) => (
                    <div className="whoitemwrap">

                      <div key={index} className="singlesideba firstlayer">
                        <h3>{item1?.title}</h3>
                        {item1?.subtitle && (
                          <MdKeyboardArrowDown onClick={() => {
                            if (showFirstlvl === index) {
                              setShowFirLvl(false);
                              setShowSecLvl(false);
                            }
                            else {
                              setShowFirLvl(index);
                            }
                          }} className="downarrwoad" />
                        )}
                      </div>

                      {(item1?.subtitle && showFirstlvl === index) &&
                        item1?.subtitle?.map((item2, index) => (
                          <div>
                            <div key={index} className="singlesideba secoondlayer">
                              <h3>{item2?.title}</h3>
                              {item2?.subtitle && (
                                <MdKeyboardArrowDown onClick={() => {
                                  if (showSecLvl === index) {
                                    setShowSecLvl(false);
                                  }
                                  else {
                                    setShowSecLvl(index);
                                  }
                                }} className="downarrwoad" />
                              )}
                            </div>

                            {(item2?.subtitle && showSecLvl === index) &&
                              item2?.subtitle?.map((item3, index) => (
                                <div key={index} className="singlesideba thirdlayer">
                                  <h3>{item3?.title}</h3>
                                </div>
                              ))}

                          </div>
                        ))}

                      { }
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </>
    );
  }
}
