import "./page.css";

import NavComponent from "@/components/common/Navbar";
import Image from "next/image";

import { Footer } from "@/components/common";

export default function Home() {
  return (
    <main>
      <NavComponent />

      <div className="div">
        <div className="div-15">
          order management solution that grows
          <br />
          your business
        </div>
        <div className="div-16">
          MesaBites is an open, scalable restaurant solution
          <br />
          enabling multi-channel ordering, and guest
          <br />
          engagement for enterprise operations on a single platform.
        </div>
        <Image
          src="/landingPage/startfreebtn.png"
          width={100}
          height={100}
          alt="Start Free Btn"
          className="img-3"
        />
        <Image
          src="/landingPage/boxes1.svg"
          width={100}
          height={100}
          alt="Boxes 1"
          className="img-4"
        />
        <div className="div-17">
          <div className="div-18">
            <div className="column">
              <Image
                src="/landingPage/landingpic.png"
                width={100}
                height={100}
                alt="landing Page Pic"
                className="img-5"
              />
            </div>
            <div className="column-2">
              <div className="div-19">
                <span style={{ fontWeight: "600" }}>On average, </span>
                <span style={{ fontWeight: "600", color: "rgba(255,205,0,1)" }}>
                  Mesabite
                </span>
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  business see spend per head increase by{" "}
                </span>
                <span style={{ fontWeight: "600", color: "rgba(255,205,0,1)" }}>
                  33%
                </span>
                <span style={{ fontWeight: "600" }}>, acquire </span>
                <span style={{ fontWeight: "600", color: "rgba(255,205,0,1)" }}>
                  3x guest
                </span>
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  data, and benefit from{" "}
                </span>
                <span style={{ fontWeight: "600", color: "rgba(255,205,0,1)" }}>
                  41%
                </span>
                <span style={{ fontWeight: "600" }}> more return visits.</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/landingPage/boxes2.svg"
          width={100}
          height={100}
          alt="Boxes 2"
          className="img-6"
        />
        <div className="div-20">
          <div className="div-21">
            Powering Hunderds
            <br /> of venues
          </div>
          <div className="div-22">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/763e138ce6198e595568b9aebede4a501e21f9de9ddbc23a7ed2451a453d5a8e?"
              className="img-8"
            />
            <div className="div-23">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="img-9"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2570f3af8760361534fd22ff2ba54a3c8399641efcda18f83e6366678968c1b1?"
                className="img-10"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="img-11"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2570f3af8760361534fd22ff2ba54a3c8399641efcda18f83e6366678968c1b1?"
                className="img-12"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="img-13"
              />
            </div>
          </div>
        </div>
        <div className="div-24">
          <div className="div-25">
            See <span style={{ color: "rgba(255,205,0,1)" }}>MESAbite</span> in
            Action
          </div>
          {/* <div className="div-26">
            <img loading="lazy" srcSet="..." className="img-14" />
            <img loading="lazy" srcSet="..." className="img-15" />
          </div> */}
        </div>
        <div className="div-27">
          <div className="div-28">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77d2cae62cd7b97329e77f43ae8d21b15c507e90558985e9a7f9a0cd4c8f8eb4?"
              className="img-16"
            />
            <div className="div-29">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cecff16728287161250e98f21ddebc4f8d332d214b51a20e3c2a3bc839d6ee79?"
                className="img-17"
              />
              <div className="div-30">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac44b1e9b38c3fe211d50e145ded50b82357dc78c3e86ba48b882a186814b4f0?"
                  className="img-18"
                />
                <div className="div-31">1/2</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7acf8b1c798c3eb745cb4ad140838ce1968ba0904b341a907dfaf1f3a395e5a7?"
                  className="img-19"
                />
              </div>
            </div>
            <div className="div-32">
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                }}
              >
                ACCESSING OUR
              </span>
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                  color: "rgba(191,86,39,1)",
                }}
              >
                {" "}
                CUSTOMER DATA{" "}
              </span>
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                }}
              >
                with lunchbox IS SO VALUABLE. WE’RE ABLE TO UNDERSTAND OUR
              </span>
              <br />
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                }}
              >
                CLIENTS & 
              </span>
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                  color: "rgba(191,86,39,1)",
                }}
              >
                CONNECT WITH our CUSTOMERS
              </span>
              <span
                style={{
                  fontFamily: "Recoleta, sans-serif",
                  fontWeight: "700",
                }}
              >
                .
              </span>
              <br />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                }}
              >
                LANDON ECKLES • CEO, CLEAN JUICE
              </span>
            </div>
          </div>
        </div>
        <div className="div-33">
          <div className="div-34">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="img-20"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a552a9f88f767bff9bf8db5e18c5b9ca2bee53286942e29267a204133932b931?"
              className="img-21"
            />
            <div className="div-35">
              <div className="div-36">
                <div className="column-3">
                  <div className="div-37">
                    <div className="div-38">Have a taste</div>
                    <div className="div-39">
                      Not ready to chat with someone but want a little tast
                    </div>
                    <div className="div-40">
                      Pop in your details and we’ll serve you tips and tricks
                      for helping grow your business and ask nothing in return.
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="div-41">
                    <div className="div-42">Let’s start with your name</div>
                    <div className="div-43">First Name</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/561d4bf62e314546563dc8883fd7cdec382cf7efdccbeb2c4047efdd7d899cbb?"
                      className="img-22"
                    />
                    <div className="div-44">Last Name</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87d9f884f558c1637fc6c6e63e8d50f0dc8623eebcb0ea1c331e47ef7cce9b1b?"
                      className="img-23"
                    />
                    <Image
                      src="/landingPage/startfreebtn.png"
                      width={100}
                      height={100}
                      alt="Start Free Btn"
                      className="img-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-45">Food for thought</div>
        <div className="div-46">
          Read the latest tips, tricks and insights from our blog.
        </div>
        <div className="div-47">
          <div className="div-48">
            <div className="div-49">
              <div className="div-50">Marketing</div>
              <div className="div-51">5 min read</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6101165f3d094ecd4f702601c9f3f5d3c772b1f4eadfaccda142511239b6466?"
              className="img-25"
            />
            <div className="div-52">
              The benefits on implementing <br />a mobile web app for restaurant
              ordering
            </div>
            <div className="div-53">
              <div className="div-54">READ MORE</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1dae51ff84a8b0ae3eb07081f0e0317514f39ab28cc37356c76b018be84b9e?"
                className="img-26"
              />
            </div>
          </div>
          <div className="div-55">
            <div className="div-56">
              <div className="div-57">Marketing</div>
              <div className="div-58">5 min read</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae6a892c900d9080b2ded25f89dd3fc491b863cdf92190e42a6c52ca003ee7e1?"
              className="img-27"
            />
            <div className="div-59">
              The benefits on implementing <br />a mobile web app for restaurant
              ordering
            </div>
            <div className="div-60">
              <div className="div-61">READ MORE</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1dae51ff84a8b0ae3eb07081f0e0317514f39ab28cc37356c76b018be84b9e?"
                className="img-28"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
