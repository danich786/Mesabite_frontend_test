"use client";

import "./footer.css";

import { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left-sidebar">
          <div className="footer-logo">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/061091552cb754a6097bf7db50219c56e5dd0d281ace37bc04c9dd599b23c792?"
              className="img-30"
            />
            Mesa Bites
          </div>

          <div className="icons-div">
            <FacebookIcon className="social-icons" />
            <div className="social-icons-divider"></div>
            <TwitterIcon className="social-icons" />
            <div className="social-icons-divider"></div>
            <InstagramIcon className="social-icons" />
            <div className="social-icons-divider"></div>
            <LinkedInIcon className="social-icons" />
            <div className="social-icons-divider"></div>
            <YouTubeIcon className="social-icons" />
          </div>

          <div className="sidebar-text">
            MesaBites is an open, scalable restaurant solution enabling
            multi-channel ordering, and guest engagement for enterprise
            operations on a single platform.
          </div>
        </div>

        <div className="footer-top-right">
          <div className="email-section">
            <div className="subs-text">
              For Subscrition to our Monthly Newsletter :
            </div>
            <div className="subs-email">
              <input
                className="subs-email-input"
                placeholder="Enter your Email"
                name="subs-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ArrowRightAltIcon sx={{ color: "white", marginRight: "10px" }} />
            </div>
          </div>

          <div className="links-table">
            <div className="table-box">
              <div className="table-head">Products</div>
              <div className="table-body">
                <div className="table-item">Order</div>
                <div className="table-item">Manage</div>
                <div className="table-item">Reach</div>
                <div className="table-item">Pricing</div>
              </div>
            </div>
            <div className="table-box1">
              <div className="table-head">Blog</div>
              <div className="table-body">
                <div className="table-item">All</div>
                <div className="table-item">News</div>
                <div className="table-item">Product Updates</div>
                <div className="table-item">Case Studies</div>
                <div className="table-item">Operations</div>
                <div className="table-item">Marketing</div>
              </div>
            </div>
            <div className="table-box">
              <div className="table-head">Comapany</div>
              <div className="table-body">
                <div className="table-item">Company</div>
                <div className="table-item">Community</div>
                <div className="table-item">Careers</div>
                <div className="table-item">Press Kit</div>
                <div className="table-item">Help</div>
              </div>
            </div>
            <div className="table-box2">
              <div className="table-head">Tech</div>
              <div className="table-body">
                <div className="table-item">Login</div>
                <div className="table-item">Register Resturant</div>
                <div className="table-item">Request a Feature</div>
                <div className="table-item">New Releases</div>
                <div className="table-item">Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-107">Book Free Consultation</div>
      <div className="div-108">
        <div className="div-109">©2023 mESAbITE TECHNOLOGIES</div>
        <div className="div-110">
          <div className="div-111">Privacy</div>
          <div className="div-112">CSA</div>
          <div className="div-113">Terms</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
