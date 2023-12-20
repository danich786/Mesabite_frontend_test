import styles from "./page.module.css";
import NavComponent from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavComponent />

      <div className="bg-yellow-50 flex flex-col py-12">
        <div className="self-stretch text-red-900 text-center text-6xl font-bold leading-[60px] tracking-tighter uppercase w-full mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
          order management solution that grows
          <br />
          your business
        </div>
        <div className="self-stretch text-neutral-700 text-center text-base font-semibold leading-5 w-full mt-8 max-md:max-w-full">
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
          className="aspect-[3.92] object-contain object-center w-[247px] items-center overflow-hidden self-center max-w-full mt-8 rounded-3xl"
        />
        {/* <img
          loading="lazy"
          className="aspect-[3.92] object-contain object-center w-[247px] items-center overflow-hidden self-center max-w-full mt-8 rounded-3xl"
        /> */}
        <Image
          src="/landingPage/boxes1.svg"
          width={100}
          height={100}
          alt="Boxes 1"
          className="aspect-[9.75] object-contain object-center w-full items-start overflow-hidden self-stretch mt-16 max-md:max-w-full max-md:mt-10"
        />
        <div className="self-center z-[1] w-full max-w-[922px] px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <Image
                src="/landingPage/landingpic.png"
                width={100}
                height={100}
                alt="landing Page Pic"
                className="aspect-[0.85] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="text-yellow-400 text-4xl font-medium leading-10 my-auto max-md:max-w-full max-md:mt-10">
                <span className="font-semibold">On average, </span>
                <span className="font-semibold text-yellow-400">Mesabite</span>
                <span className="font-semibold">
                  {" "}
                  business see spend per head increase by{" "}
                </span>
                <span className="font-semibold text-yellow-400">33%</span>
                <span className="font-semibold">, acquire </span>
                <span className="font-semibold text-yellow-400">3x guest</span>
                <span className="font-semibold"> data, and benefit from </span>
                <span className="font-semibold text-yellow-400">41%</span>
                <span className="font-semibold"> more return visits.</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/landingPage/boxes2.svg"
          width={100}
          height={100}
          alt="Boxes 2"
          className="aspect-[9.75] object-contain object-center w-full items-start overflow-hidden self-stretch max-md:max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86475cfea5cf98816a504a0fc71b3247a5b0d02a2878af5779266d4a7434e98?apiKey=a2ea340f802640d39a02c1af830e3a08&"
          className="aspect-[1.53] object-contain object-center w-full items-start overflow-hidden self-stretch mt-11 max-md:max-w-full max-md:mt-10"
        />
        <div className="items-stretch bg-red-900 self-stretch flex w-full flex-col px-5 py-11 max-md:max-w-full">
          <div className="text-yellow-400 text-center text-6xl font-bold leading-[70px] tracking-tighter uppercase w-full mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Powering Hunderds
            <br /> of venues
          </div>
          <div className="items-stretch flex w-full flex-col mt-11 py-px max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/763e138ce6198e595568b9aebede4a501e21f9de9ddbc23a7ed2451a453d5a8e?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="aspect-[341.33] object-contain object-center w-full stroke-[3px] stroke-yellow-400 overflow-hidden z-[1] max-md:max-w-full"
            />
            <div className="self-center flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/881104a77cd58d3c0a7803e3211a56e5fb91ce843db7c83bbe4c6769f738763f?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[3.08] object-contain object-center w-[194px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2570f3af8760361534fd22ff2ba54a3c8399641efcda18f83e6366678968c1b1?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[0.03] object-contain object-center w-[5px] stroke-[3px] stroke-yellow-400 overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[4.03] object-contain object-center w-[254px] overflow-hidden self-center my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2570f3af8760361534fd22ff2ba54a3c8399641efcda18f83e6366678968c1b1?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[0.03] object-contain object-center w-[5px] stroke-[3px] stroke-yellow-400 overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec914b3d32c9f9ae85a8a37deb4080ec8984e7daa315dc1bb38cdfb460061b04?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[4.03] object-contain object-center w-[254px] overflow-hidden self-center my-auto"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch bg-red-900 self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
          <div className="text-yellow-400 text-center text-5xl font-bold leading-[55.5px] tracking-tighter uppercase w-full max-md:max-w-full">
            See <span className="text-yellow-400">MESAbite</span>
          </div>
          <div className="flex-col overflow-hidden relative flex min-h-[600px] w-full justify-center items-center mt-8 px-16 py-12 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70ef8549c45a9a90b49b7869cf5fcabcbdb9efe45b1a25425b1281030a3df175?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a34ed6f4928599f4fab6b9313222695b5aa2fb0b271554f429a1a16d8f2fe99?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="aspect-square object-contain object-center w-[105px] fill-red-900 stroke-[3px] stroke-yellow-400 overflow-hidden max-w-full mt-48 mb-36 max-md:my-10"
            />
          </div>
        </div>
        <div className="items-stretch bg-red-900 self-stretch flex w-full flex-col justify-center py-11 max-md:max-w-full">
          <div className="flex-col fill-yellow-400 overflow-hidden relative flex min-h-[519px] w-full mb-8 pl-14 pr-10 pt-12 pb-4 items-start max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77d2cae62cd7b97329e77f43ae8d21b15c507e90558985e9a7f9a0cd4c8f8eb4?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex w-[314px] max-w-full justify-between gap-5 mt-5 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cecff16728287161250e98f21ddebc4f8d332d214b51a20e3c2a3bc839d6ee79?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[1.15] object-contain object-center w-[53px] fill-red-900 overflow-hidden shrink-0 max-w-full mt-2"
              />
              <div className="flex items-stretch justify-between gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b41ca4ef6ac7579496b6ca19a7e93cabde75ca9b251753f451718e49316c2bf?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                  className="aspect-[2.33] object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full self-start"
                />
                <div className="text-amber-700 text-center text-2xl leading-7">
                  1/2
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fd2dc64a85a3821513d1cfec7718626f7a49fc508fe429c2f72e01c961637e?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                  className="aspect-[2.33] object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
            <div className="relative text-red-900 text-5xl font-medium leading-[60px] tracking-tighter uppercase w-[819px] mt-3 self-end max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
              <span className="font-bold">ACCESSING OUR</span>
              <span className="font-bold text-amber-700"> CUSTOMER DATA </span>
              <span className="font-bold">
                with lunchbox IS SO VALUABLE. WE’RE ABLE TO UNDERSTAND OUR
              </span>
              <br />
              <span className="font-bold">CLIENTS & </span>
              <span className="font-bold text-amber-700">
                CONNECT WITH our CUSTOMERS
              </span>
              <span className="font-bold">.</span>
              <br />
              <span className="text-lg">LANDON ECKLES • CEO, CLEAN JUICE</span>
            </div>
          </div>
        </div>
        <div className="items-stretch bg-red-900 self-stretch flex w-full flex-col justify-center max-md:max-w-full">
          <div className="flex-col overflow-hidden relative flex min-h-[636px] w-full pl-16 py-10 items-end max-md:max-w-full max-md:pl-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c62962b82ce22158a679a1cb2bc93bc8443adcc7e3e1d175452d5cd1174d92f?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a552a9f88f767bff9bf8db5e18c5b9ca2bee53286942e29267a204133932b931?apiKey=a2ea340f802640d39a02c1af830e3a08&"
              className="aspect-[5.04] object-contain object-center w-[358px] stroke-[2px] stroke-yellow-50 overflow-hidden max-w-full"
            />
            <div className="relative self-stretch mt-8 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch relative flex grow flex-col max-md:mt-8">
                    <div className="text-yellow-400 text-6xl font-bold leading-[102px] tracking-tighter uppercase max-md:text-4xl max-md:leading-[76px]">
                      Have a taste
                    </div>
                    <div className="text-yellow-50 text-lg font-semibold leading-7 mt-11 max-md:mt-10">
                      Not ready to chat with someone but want a little tast
                    </div>
                    <div className="text-yellow-50 text-lg font-semibold leading-7 mt-11 max-md:mt-10">
                      Pop in your details and we’ll serve you tips and tricks
                      for helping grow your business and ask nothing in return.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-end relative flex flex-col mt-4 max-md:max-w-full max-md:mt-10">
                    <div className="text-yellow-50 text-center text-2xl font-semibold leading-7 self-stretch max-md:max-w-full">
                      Let’s start with your name
                    </div>
                    <div className="text-yellow-50 text-2xl font-semibold leading-7 self-stretch mt-9 max-md:max-w-full">
                      First Name
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/561d4bf62e314546563dc8883fd7cdec382cf7efdccbeb2c4047efdd7d899cbb?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                      className="aspect-[273.5] object-contain object-center w-full stroke-[1.5px] stroke-yellow-50 overflow-hidden self-stretch mt-9 max-md:max-w-full"
                    />
                    <div className="text-yellow-50 text-2xl font-semibold leading-7 self-stretch mt-9 max-md:max-w-full">
                      Last Name
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87d9f884f558c1637fc6c6e63e8d50f0dc8623eebcb0ea1c331e47ef7cce9b1b?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                      className="aspect-[273.5] object-contain object-center w-full stroke-[1.5px] stroke-yellow-50 overflow-hidden self-stretch mt-9 max-md:max-w-full"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/835d2e7d73d12c29c44fcd0224b026d16d03181e64830f64d8bdc576e964c1ae?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                      className="aspect-[3.92] object-contain object-center w-[247px] items-center overflow-hidden max-w-full mt-20 rounded-3xl self-end max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-red-900 text-center text-5xl font-bold leading-[55.44px] tracking-tighter uppercase self-center mt-10 max-md:max-w-full max-md:mt-10">
          Food for thought
        </div>
        <div className="text-neutral-700 text-center text-lg font-semibold leading-7 self-center mt-5 max-md:max-w-full">
          Read the latest tips, tricks and insights from our blog.
        </div>
        <div className="self-center flex w-full max-w-[984px] items-stretch justify-between gap-5 mt-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-start flex grow basis-[0%] flex-col py-0.5">
            <div className="items-stretch self-stretch flex justify-between gap-5">
              <div className="text-red-900 text-sm font-medium leading-5">
                Marketing
              </div>
              <div className="text-red-900 text-sm font-medium leading-5">
                5 min read
              </div>
            </div>
            <Image
              src="/landingPage/personpic.svg"
              width={100}
              height={100}
              alt="person pic"
              style={{ width: "100%" }}
            />
            <div className="text-red-900 text-2xl font-medium leading-9 self-stretch mt-7">
              The benefits on implementing <br />a mobile web app for restaurant
              ordering
            </div>
            <div className="flex gap-4 mt-8 self-start items-start">
              <div className="text-red-900 text-xl font-bold leading-7 uppercase">
                READ MORE
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1dae51ff84a8b0ae3eb07081f0e0317514f39ab28cc37356c76b018be84b9e?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[1.78] object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="self-center flex grow basis-[0%] flex-col my-auto">
            <div className="flex w-[302px] max-w-full items-stretch justify-between gap-5 self-end">
              <div className="text-red-900 text-sm font-medium leading-5">
                Marketing
              </div>
              <div className="text-red-900 text-sm font-medium leading-5 self-start">
                5 min read
              </div>
            </div>
            <Image
              src="/landingPage/personpic.svg"
              width={100}
              height={100}
              alt="person pic"
              style={{ width: "100%" }}
            />
            <div className="text-red-900 text-2xl font-medium leading-9 self-stretch mt-9">
              The benefits on implementing <br />a mobile web app for restaurant
              ordering
            </div>
            <div className="flex gap-4 ml-20 mt-9 self-start items-start max-md:ml-2.5">
              <div className="text-red-900 text-xl font-bold leading-7 uppercase">
                READ MORE
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1dae51ff84a8b0ae3eb07081f0e0317514f39ab28cc37356c76b018be84b9e?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[1.78] object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="self-center flex grow basis-[0%] flex-col my-auto">
            <div className="flex w-[302px] max-w-full items-stretch justify-between gap-5 self-end">
              <div className="text-red-900 text-sm font-medium leading-5">
                Marketing
              </div>
              <div className="text-red-900 text-sm font-medium leading-5 self-start">
                5 min read
              </div>
            </div>
            <Image
              src="/landingPage/personpic.svg"
              width={100}
              height={100}
              alt="person pic"
              style={{ width: "100%" }}
            />
            <div className="text-red-900 text-2xl font-medium leading-9 self-stretch mt-9">
              The benefits on implementing <br />a mobile web app for restaurant
              ordering
            </div>
            <div className="flex gap-4 ml-20 mt-9 self-start items-start max-md:ml-2.5">
              <div className="text-red-900 text-xl font-bold leading-7 uppercase">
                READ MORE
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1dae51ff84a8b0ae3eb07081f0e0317514f39ab28cc37356c76b018be84b9e?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[1.78] object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-red-900 self-stretch flex w-full flex-col items-stretch mt-7 mb-28 py-12 max-md:max-w-full max-md:mb-10">
          <div className="self-center flex w-full max-w-[899px] justify-between gap-5 items-end max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex gap-2 mt-16 pr-2 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/061091552cb754a6097bf7db50219c56e5dd0d281ace37bc04c9dd599b23c792?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[1.04] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7d4a4624d9478f2e2bf439ec61ff64fa6fa45ad79aa313b55a60e758a1a218f?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[8] object-contain object-center w-[120px] fill-amber-700 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-0 px-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-yellow-400 text-lg font-bold leading-8 tracking-normal uppercase">
                Subscribe to our monthly newsletter.
              </div>
              <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                <div className="items-stretch flex justify-between gap-5 pr-5">
                  <div className="text-yellow-50 text-lg leading-7">Email</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcfce1b3c5625ea367c0da0b3bbaa701b9ba8a746f3c26646388b17cc4c6981?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                    className="aspect-[1.82] object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80fbac60e7510f02423e375ace4540842fe0a951ae1986cf684d0d3ffdd0d9a0?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                  className="aspect-[322] object-contain object-center w-full fill-yellow-50 stroke-[1.5px] stroke-yellow-50 overflow-hidden mt-2.5"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-start justify-between gap-5 mt-14 pr-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
            <div className="flex grow basis-[0%] flex-col items-center mt-3 self-start">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e13c2040226ab6a772014168bbedaf3381a3b072b686f825eac41c555dcede86?apiKey=a2ea340f802640d39a02c1af830e3a08&"
                className="aspect-[4.77] object-contain object-center w-[248px] stroke-[1.5px] stroke-yellow-400 overflow-hidden"
              />
              <div className="text-yellow-50 text-xs leading-4 mt-8">
                MesaBites is an open, scalable restaurant solution enabling
                multi-channel ordering, and guest engagement for enterprise
                operations on a single platform.
              </div>
            </div>
            <div className="flex basis-[0%] flex-col pb-6 self-start">
              <div className="text-yellow-400 text-lg font-bold leading-8 uppercase self-stretch whitespace-nowrap">
                PRODUCTS
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-16 self-start max-md:mt-10">
                Order
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5 self-start">
                Mange
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5 self-start">
                Recah
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5 self-start">
                Pricing
              </div>
            </div>
            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
              <div className="flex items-stretch justify-between gap-5">
                <div className="text-yellow-400 text-base font-bold leading-8 uppercase">
                  BLOG
                </div>
                <div className="text-yellow-400 text-base font-bold leading-8 uppercase">
                  COMPANY
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                <div className="items-stretch flex grow basis-[0%] flex-col pr-4">
                  <div className="text-yellow-50 text-sm leading-7">All</div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    News
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5">
                    Product Updates
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Case Studies
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Operations
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Marketing
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Insights
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col pb-8 self-start">
                  <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap">
                    Company
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5">
                    Community
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Careers
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5">
                    Press Kit
                  </div>
                  <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                    Help
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col pb-8 self-start">
              <div className="text-yellow-400 text-base font-bold leading-8 uppercase self-stretch">
                Tech
              </div>
              <div className="text-yellow-50 text-sm leading-7 mt-16 max-md:mt-10">
                LOG IN
              </div>
              <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                INTEGRATIONS
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5 self-start">
                DOCUMENTATION
              </div>
              <div className="text-yellow-50 text-sm leading-7 whitespace-nowrap mt-1.5 self-start">
                REQUEST A FEATURE
              </div>
              <div className="text-yellow-50 text-sm leading-7 mt-1.5">
                NEW RELEASES
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79fd8beb56d70ae3f0776aaf12dd0394dd8635d680e22c9becd494098fc91bd2?apiKey=a2ea340f802640d39a02c1af830e3a08&"
            className="aspect-[256] object-contain object-center w-full fill-yellow-50 stroke-[1.5px] stroke-yellow-50 overflow-hidden mt-9 max-md:max-w-full"
          />
          <div className="text-red-900 text-center text-4xl font-bold leading-10 capitalize items-center bg-yellow-400 self-center w-full max-w-[856px] justify-center mt-16 px-16 py-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
            Book A Free Consultation
          </div>
          <div className="justify-between items-stretch self-center flex w-full max-w-[856px] gap-5 mt-9 mb-4 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-yellow-50 text-xs font-medium leading-4 tracking-tight uppercase">
              ©2023 mESAbITE TECHNOLOGIES
            </div>
            <div className="flex items-stretch justify-between gap-2.5">
              <div className="text-yellow-50 text-xs font-medium leading-4 tracking-tight uppercase grow whitespace-nowrap">
                Privacy
              </div>
              <div className="text-yellow-50 text-xs font-medium leading-4 tracking-tight uppercase">
                CSA
              </div>
              <div className="text-yellow-50 text-xs font-medium leading-4 tracking-tight uppercase grow whitespace-nowrap">
                Terms
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
