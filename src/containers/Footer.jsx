import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <>
      <footer className="footer_area mt-30">
        <div className="footer_copyright pt-15 pb-30">
          <div className="container">
            <div className="footer_copyright_wrapper text-center d-sm-flex justify-content-between align-items-center">
              <div className="copyright mt-15">
                <p>
                  Designed and Developed by <a href="" rel="nofollow" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
};

export default Footer;
