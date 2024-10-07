import React from 'react'
import style from "../../../pages/css/footer.module.scss";
import Link from 'next/link';
import FaceBookSocial from '../svg/social/facebook';
import LinkedinSocial from '../svg/social/linkedin';
import InstagramSocial from '../svg/social/instagram';
import TwitterSocial from '../svg/social/twitter';
import moment from 'moment';
import Image from 'next/image';
// import ins1 from '../../../public/images/fb.svg';
// import ins2 from '../../../public/images/twitter.svg';
// import ins3 from '../../../public/images/linkedin.svg';
// import ins4 from '../../../public/images/insta.svg'

import twitter from '../../../components/img/twitter.svg'

export default function Footer(footerProps) {
  if (typeof footerProps.footerProps == "undefined" || footerProps.footerProps == false) { return ""; }
  else {

    const footerData = footerProps.footerProps;

    let footerItems = null;
    if (footerData?.items) {
      footerItems = JSON.parse(JSON.parse(footerData?.items));
    }

    const itemsSetting = {
      "--footerBCColor": footerData?.background_color,
      "--footerItemColor": footerData?.parent_text_color,
      "--footerItemHoverColor": footerData?.parent_text_hover_color
    }

    const stop = (e) => {
      document.getElementById("jj").style.scrollBehavior = "none"
    }

    console.log("footerItem ", footerItems);

    return (

      // <footer className={style.footer} style={itemsSetting} role="contentinfo">


      //   <div className='container foot_coming'>

      //     <div className={style.parent}>

      //       <div className={style.left}>

      //         {

      //           footerData?.footer_logo != null ? (
      //             <img  className="kalish" src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725449711/60logo_1_m7ttuc.svg" alt="" />
      //           )
      //           :
      //           (<h4 className={style.footerTitle} dangerouslySetInnerHTML={ {__html:footerData?.global_title} }></h4>)
      //          }

      //         <div className={style.footerSubTitle} dangerouslySetInnerHTML={ {__html:footerData?.sub_title} }></div>

      //       </div>

      //       <div className={style.right}>
      //           {footerItems != null ? (
      //             footerItems.map((ls, i)=>(
      //               <div key={i} id={ls.parentId} className={style.footerItems}>

      //                 <h4 className={style.footerItemsHead}>
      //                   {ls.parentItems.link != '' ? (<a href={ls.parentItems.link} target={ls.parentItems.linkType == 'true' ? "_blank" : "_self" }>{ls.parentItems.title}</a>): ls.parentItems.title}
      //                 </h4>


      //                 {ls.subItems.length > 0 ? (
      //                 <ul className={style.footerItemsUL}>
      //                     {ls.subItems.map((lss, ii)=>(
      //                       <li key={ii}>


      //                         {
      //                           lss.link?.match('tel:') ? (
      //                               <a href={""+lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                             )
      //                             :
      //                             (
      //                               lss.link?.match('mailto:') ? (
      //                                 <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                               ):(
      //                                 <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                               )

      //                             )
      //                         }

      //                       </li>
      //                     ))}
      //                 </ul>
      //                 ) :""}

      //               </div>
      //             ))
      //           ):""}
      //       </div>

      //     </div>



      //   </div>

      //   <div className={style.copyRight}>
      //     <div className='container'>
      //       <div className={style.crParent}>
      //         <div className={style.crLeft}>
      //           <p>Copyrights ©{ moment().format('Y') } Instacertify Solutions.</p>
      //         </div>
      //         <div className={style.crRight}>
      //           <ul>
      //           <p className='connect'>Connect:</p>
      //             <li>
      //               <Link href={'https://twitter.com/'} target='_blank' >
      //                 <img src='./images/fb.svg'/>
      //               </Link>
      //             </li> 
      //             <li>
      //               <a href={'https://www.facebook.com/FUNaddictFairchild/'} target='_blank' >
      //                 {/* <FaceBookSocial /> */}
      //                 <img src='./images/twitter.svg'/>
      //               </a>
      //             </li>
      //             <li>
      //               <a href={'https://www.linkedin.com/company/fairchildairforcebase/'} target='_blank' >
      //                 {/* <LinkedinSocial /> */}
      //                 <img src='./images/linkedin.svg'/>
      //               </a>
      //             </li>
      //             <li>
      //               <a href={'https://www.instagram.com/fairchildfun/'} target='_blank' >
      //                 {/* <InstagramSocial /> */}
      //                 <img src='./images/insta.svg'/>
      //               </a>
      //             </li>

      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>


      // </footer>

      <>
        <footer
          className="site-footer style1"
        >
          <div className="footer-top">
            <div className="container amrgin-left10px">

              <div className="row rwing">

                <div className='fir'>
                  <div className="widget widget_getintuch" height="240px">
                    <div className='foot_logs'>
                      <img src='../images/sells.svg' />
                    </div>


                    <ul className="contactus-footer font-opensans">
                      <div className='foot_text'>
                        <p>
                          Currently accepting enquiries for all your needs and looking for Distributors from all over the Globe
                        </p>
                      </div>
                    </ul>

                  </div>
                </div>



                {/* {
                  footerItems?.length > 0 &&
                  footerItems?.map((footer, index) => (
                    <div key={index} className="col-md-3 col-sm-12">
                      <div className="widget">
                        <h4 className="footer-title">{footer?.parentItems?.title}</h4>
                        {
                          footer?.subItems?.length > 0 &&

                          <ul className="list-2 font-opensans lopl">
                            <marquee
                              behavior="static"
                              direction="up"
                              scrollamount={2}
                              height="250px"
                              onmouseover={() => { this.behavior = "static" }}
                              onmouseout={() => { this.behavior = "scroll" }}
                            >
                              {
                                footer?.subItems?.map((subitem, index) => (
                                  <li key={index}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                                    </svg>

                                    <a href={subitem?.link}>{subitem?.title}</a>
                                  </li>
                                ))
                              }


                            </marquee>
                          </ul>

                        }


                      </div>
                    </div>
                  ))
                } */}



                <div className="fir">
                  <div className="widget">
                    <h4 className="footer-title jk_tit">Teleprompter</h4>
                    <ul className="list-2 uppercase font-opensans lopl"
                    >
                      {/* <marquee
                        behavior="scroll"
                        direction="up"
                        scrollamount={2}
                        height="250px"
                        onmouseover="this.stop()"
                        onmouseout="this.start()"
                      > */}
                      <li>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg> */}

                        <a href="">
                          Triumph
                        </a>
                      </li>
                      <li>


                        <a href="">
                          Delta Prompt
                        </a>
                      </li>
                      <li>


                        <a href="">
                          Punta
                        </a>
                      </li>
                      <li>

                        <a href="">
                          Crocodell
                        </a>
                      </li>

                      {/* </marquee> */}
                    </ul>



                  </div>
                </div>

                <div className="fir">
                  <div className="widget">
                    <h4 className="footer-title jk_tit">Software</h4>
                    <ul className="list-2 uppercase font-opensans lopl"
                    >
                      {/* <marquee
                        behavior="scroll"
                        direction="up"
                        scrollamount={2}
                        height="250px"
                        onmouseover="this.stop()"
                        onmouseout="this.start()"
                      > */}
                      <li>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg> */}

                        <a href="">
                          Cronus Pro
                        </a>
                      </li>
                      <li>


                        <a href="">
                          Cronus Lite
                        </a>
                      </li>



                      {/* </marquee> */}
                    </ul>



                  </div>
                </div>

                <div className="fir margin-top25">
                  <div className="widget">
                    <h4 className="footer-title jk_tit">Contact Us</h4>
                    <div className='test_ft okinta'>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#F1F1F1" />
                        <g clip-path="url(#clip0_24_9799)">
                          <path d="M27.0002 16.6892C26.9936 17.8501 26.6837 18.9297 26.1 19.9389C24.2364 23.1603 22.3713 26.381 20.4921 29.5947C20.3864 29.7746 20.1625 29.9834 19.9764 29.9999C19.828 30.0124 19.6009 29.7793 19.5001 29.6072C17.6226 26.3935 15.7468 23.1783 13.8947 19.9506C11.572 15.9046 13.9824 11.0145 18.7245 10.1196C22.5221 9.40299 26.3394 11.9838 26.8862 15.6425C26.9379 15.9891 26.9625 16.3395 26.9994 16.6884L27.0002 16.6892ZM19.9928 13.3582C18.067 13.3582 16.4977 14.8422 16.4879 16.6736C16.4781 18.4885 18.0645 20.0124 19.9715 20.0202C21.9015 20.028 23.5059 18.5057 23.4969 16.6744C23.4879 14.8438 21.9187 13.3582 19.9928 13.3582Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_9799">
                            <rect width="14" height="20" fill="white" transform="translate(13 10)" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>130 , FIE , Second Floor , <br /> Patparganj Industrial <br /> Area , Delhi 110092</p>
                    </div>

                    <div className='test_ft'>
                      <svg className='sbh' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#F1F1F1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3558 10.0079C22.1328 9.97595 21.9087 10.0419 21.7304 10.1838C21.5472 10.3277 21.4326 10.5356 21.4077 10.7684C21.355 11.2391 21.6946 11.6648 22.1646 11.7178C25.4063 12.0795 27.9259 14.6048 28.2904 17.8565C28.3392 18.2922 28.7047 18.621 29.1409 18.621C29.1738 18.621 29.2057 18.619 29.2385 18.615C29.4666 18.59 29.6697 18.4771 29.8132 18.2972C29.9556 18.1174 30.0203 17.8935 29.9944 17.6647C29.5403 13.6075 26.4002 10.4586 22.3558 10.0079ZM22.4181 13.4899C21.942 13.402 21.5048 13.7058 21.4142 14.1705C21.3236 14.6352 21.6283 15.0888 22.0914 15.1798C23.4857 15.4516 24.5623 16.5309 24.8351 17.9299V17.9309C24.9128 18.3336 25.2674 18.6264 25.6757 18.6264C25.7305 18.6264 25.7852 18.6214 25.841 18.6114C26.3041 18.5185 26.6088 18.0658 26.5182 17.6001C26.1109 15.5106 24.5025 13.8967 22.4181 13.4899ZM24.0001 23.0905C24.4515 22.8302 24.9615 22.5362 25.6047 22.673C26.1873 22.7959 28.1731 24.4078 28.7169 24.9665C29.0734 25.3322 29.2716 25.7099 29.3025 26.0877C29.3562 27.5697 27.3425 29.2615 26.976 29.4724C26.489 29.8231 25.9224 30 25.286 30C24.6357 30 23.9106 29.8151 23.1199 29.4464C18.8296 27.6556 12.2755 21.231 10.5427 16.9739C9.82362 15.389 9.81864 14.0819 10.5307 13.0996C10.8145 12.6389 12.4329 10.7132 13.8819 10.7742C14.2673 10.8072 14.6418 11.005 15.0093 11.3648C15.565 11.9094 17.1365 13.9011 17.258 14.4857C17.3925 15.1352 17.0977 15.6519 16.8358 16.1055C16.7799 16.2031 16.7046 16.3188 16.6222 16.4456C16.3092 16.9268 15.8926 17.5674 16.04 17.9763C17.0967 20.5705 19.5376 22.8339 22.133 23.8972C22.5343 24.0431 23.1745 23.6235 23.6542 23.3092C23.7791 23.2273 23.8932 23.1525 23.9893 23.0967L24.0001 23.0905Z" fill="black" />
                      </svg>

                      <p> +91 8860807646</p>
                    </div>

                    <div className='test_ft'>
                      <svg className='sbh' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#F1F1F1" />
                        <g clip-path="url(#clip0_24_9797)">
                          <path d="M28.9908 13.1252C28.8392 13.2886 28.7564 13.3834 28.6674 13.4721C26.003 16.136 23.3385 18.7991 20.6733 21.4622C20.1609 21.974 19.8399 21.9748 19.329 21.4638C16.6638 18.8007 13.9994 16.1376 11.3349 13.4729C11.2451 13.3834 11.1615 13.2878 11.0108 13.126C11.3107 13.0754 11.5349 13.0047 11.7583 13.0047C17.2528 12.9984 22.7472 12.9984 28.2409 13.0047C28.4651 13.0047 28.6885 13.0747 28.9908 13.1252Z" fill="black" />
                          <path d="M22.8824 20.8982C24.907 22.8886 26.9044 24.8517 28.9603 26.8731C28.6947 26.9214 28.4745 26.9952 28.2542 26.996C22.7472 27.0022 17.2395 27.0022 11.7325 26.996C11.5209 26.996 11.3084 26.9276 11.0787 26.8871C13.1151 24.8859 15.1109 22.9251 17.1442 20.9278C17.5894 21.3727 18.1269 21.9109 18.6666 22.446C19.1665 22.943 19.7711 23.1468 20.4484 22.943C20.7702 22.8466 21.0889 22.6521 21.3389 22.4258C21.895 21.9234 22.4074 21.3735 22.8824 20.8975V20.8982Z" fill="black" />
                          <path d="M10.1156 25.9103C10.0836 25.7182 10.007 25.4669 10.0062 25.2165C9.99766 21.7422 9.99844 18.2678 10.0055 14.7943C10.0055 14.543 10.0789 14.2918 10.114 14.0686C12.1317 16.0628 14.129 18.0384 16.1053 19.9914C14.1431 21.9304 12.1426 23.9067 10.1156 25.9103Z" fill="black" />
                          <path d="M29.8711 25.9881C27.8207 23.9589 25.8296 21.9872 23.8557 20.0327C25.8538 18.0587 27.8542 16.0824 29.8727 14.0881C29.9071 14.2686 29.993 14.5105 29.9938 14.7524C30.0023 18.2516 30.0023 21.7516 29.9938 25.2508C29.9938 25.4888 29.9164 25.7276 29.8711 25.9874V25.9881Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_9797">
                            <rect width="20" height="14" fill="white" transform="translate(10 13)" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>sales@cronuspro.in</p>
                    </div>

                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-12" />
              </div>

              <div>
                <hr className='foot_htr' />
                <div className='copyright'>
                  <div className='copyright1'>
                    <p>Copyright © Cronus Pro. All Right <br/> Reserved</p>
                  </div>
                  <div className='copyright1'>
                    <p>Cookie & Privacy Policy</p>
                  </div>
                  <div className='copyright1'>
                    <p>Terms Of Use</p>
                  </div>
                  <div className='copyright1'>
                    <p>Site Map</p>
                  </div>
                  <div className='social_copy'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill="#F1F1F1" />
                      <path d="M17.7816 30H21.0947V20.875H23.865L24.2834 17.325H21.0947V15.05C21.0947 14.025 21.3548 13.325 22.6891 13.325H24.3965V10.1375C24.1025 10.1 23.0961 10 21.9202 10C19.4551 10 17.7816 11.6625 17.7816 14.7V17.325H15V20.875H17.7816V30Z" fill="black" />
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F1F1"/>
<path d="M30 14.0194C29.2645 14.3513 28.4641 14.5902 27.6397 14.6833C28.4956 14.1513 29.1366 13.3107 29.4424 12.3194C28.6392 12.8193 27.7593 13.1699 26.8417 13.3555C26.4582 12.9265 25.9944 12.5848 25.4792 12.3516C24.9639 12.1184 24.4083 11.9987 23.8469 12C21.5755 12 19.7488 13.9263 19.7488 16.2902C19.7488 16.6222 19.7873 16.9542 19.8498 17.2735C16.4487 17.0874 13.4155 15.3874 11.3989 12.7846C11.0314 13.4413 10.8389 14.189 10.8412 14.9499C10.8412 16.4386 11.5647 17.7513 12.6679 18.5234C12.0178 18.4966 11.3829 18.3096 10.8148 17.9777V18.0305C10.8148 20.1153 12.2233 21.8429 14.1005 22.2403C13.748 22.336 13.3854 22.385 13.0213 22.3861C12.7545 22.3861 12.5021 22.3584 12.2473 22.3207C12.7665 24.0207 14.2783 25.2555 16.0786 25.2957C14.6701 26.45 12.9059 27.129 10.9903 27.129C10.6466 27.129 10.3293 27.1164 10 27.0762C11.8171 28.2959 13.9731 29 16.2949 29C23.8325 29 27.957 22.4666 27.957 16.7957C27.957 16.6096 27.957 16.4235 27.945 16.2374C28.7429 15.6263 29.4424 14.8694 30 14.0194Z" fill="black"/>
</svg>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F1F1"/>
<path d="M25.8516 29.9687C25.8516 28.9284 25.8594 27.9116 25.8516 26.8948C25.8359 25.307 25.8594 23.7113 25.7734 22.1235C25.6641 20.0039 24.1016 19.6519 22.6641 20.129C21.9609 20.3637 21.5938 20.9346 21.4141 21.623C21.3203 21.9984 21.25 22.3895 21.25 22.7806C21.2344 25.0254 21.2344 27.2624 21.2344 29.5072C21.2344 29.6636 21.2344 29.8122 21.2344 29.9921C19.8438 29.9921 18.4844 29.9921 17.1016 29.9921C17.1016 25.5494 17.1016 21.1302 17.1016 16.6718C18.4062 16.6718 19.7031 16.6718 21.0469 16.6718C21.0469 17.2506 21.0469 17.8138 21.0469 18.4082C21.3984 18.0328 21.6875 17.6574 22.0391 17.3601C23.1328 16.4372 24.4297 16.1869 25.8047 16.3746C26.4766 16.4685 27.1562 16.6484 27.7656 16.9378C28.8672 17.454 29.4219 18.4552 29.6719 19.605C29.8438 20.4028 29.9609 21.224 29.9766 22.0375C30.0156 24.603 29.9922 27.1763 29.9922 29.7418C29.9922 29.8044 29.9844 29.8748 29.9766 29.9687C28.6172 29.9687 27.2578 29.9687 25.8516 29.9687Z" fill="black"/>
<path d="M10.3438 16.6641C11.7188 16.6641 13.0547 16.6641 14.4297 16.6641C14.4297 21.1068 14.4297 25.5417 14.4297 30C13.0703 30 11.7266 30 10.3438 30C10.3438 25.5651 10.3438 21.1302 10.3438 16.6641Z" fill="black"/>
<path d="M14.7813 12.4091C14.7735 13.7388 13.6954 14.8416 12.3985 14.8494C11.086 14.8416 9.99223 13.7153 10 12.37C10.0079 11.0637 11.086 10 12.3907 10C13.7344 10 14.7891 11.0637 14.7813 12.4091Z" fill="black"/>
</svg>

<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F1F1"/>
<g clip-path="url(#clip0_24_9735)">
<path d="M19.9884 29.9955C18.1628 29.9955 16.3365 29.979 14.511 29.9955C13.4465 30.0051 12.4134 29.6356 11.5967 28.9529C10.78 28.2703 10.2331 27.3193 10.054 26.2702C10.0283 26.1215 10.015 25.971 10.0142 25.8201C10.0142 21.9448 9.97598 18.0687 10.0263 14.1926C10.0525 12.1349 11.677 10.3923 13.7119 10.0585C13.8722 10.0309 14.0346 10.0164 14.1973 10.015C18.0615 10.015 21.9257 9.97749 25.7891 10.0263C27.8698 10.0525 29.6158 11.6804 29.946 13.7313C29.9707 13.8801 29.9838 14.0306 29.985 14.1814C29.985 18.0575 30.0232 21.9335 29.9737 25.8089C29.9467 27.883 28.3027 29.6347 26.2514 29.9467C25.9279 29.9875 25.6019 30.0046 25.2759 29.9977C23.5149 29.9977 21.7539 29.9955 19.9884 29.9955ZM19.9794 26.4645C21.2575 26.468 22.5081 26.0927 23.573 25.386C24.638 24.6793 25.4695 23.6728 25.9625 22.4938C26.4555 21.3148 26.588 20.0161 26.3431 18.7619C26.0982 17.5077 25.4869 16.3542 24.5866 15.4471C23.6862 14.54 22.5372 13.9201 21.2846 13.6657C20.032 13.4113 18.732 13.5337 17.549 14.0176C16.366 14.5015 15.353 15.3251 14.638 16.3844C13.923 17.4436 13.538 18.691 13.5318 19.9689C13.5238 20.8199 13.6848 21.6641 14.0054 22.4525C14.326 23.241 14.7999 23.958 15.3995 24.5621C15.9991 25.1662 16.7127 25.6454 17.4988 25.972C18.285 26.2985 19.1281 26.4659 19.9794 26.4645ZM26.6265 14.687C26.8042 14.6895 26.9806 14.6564 27.1453 14.5898C27.31 14.5231 27.4597 14.4241 27.5855 14.2987C27.7114 14.1733 27.8109 14.024 27.8781 13.8595C27.9454 13.6951 27.979 13.5188 27.9771 13.3412C27.9807 13.1603 27.948 12.9805 27.8807 12.8125C27.8135 12.6445 27.7132 12.4917 27.5857 12.3632C27.4583 12.2348 27.3063 12.1332 27.1388 12.0646C26.9713 11.996 26.7917 11.9618 26.6108 11.9639C26.2522 11.9658 25.9087 12.1084 25.6542 12.3609C25.3996 12.6134 25.2544 12.9557 25.2497 13.3142C25.2471 13.4953 25.281 13.6751 25.3494 13.8429C25.4178 14.0106 25.5193 14.1629 25.6477 14.2906C25.7762 14.4183 25.929 14.5189 26.0972 14.5864C26.2654 14.6538 26.4454 14.6868 26.6265 14.6832V14.687Z" fill="black"/>
<path d="M23.6785 19.9816C23.6785 22.007 22.0278 23.6716 20.0191 23.6761C18.0105 23.6806 16.3283 22.0257 16.323 20.0168C16.3178 18.0079 17.9737 16.326 19.9831 16.3223C22.0052 16.3178 23.6747 17.9711 23.6785 19.9816Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_24_9735">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>


                  </div>
                </div>
              </div>

            </div>
          </div>



        </footer >

      </>

    )
  }
}
