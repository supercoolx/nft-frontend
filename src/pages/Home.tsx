import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"

import Search from "../svg/search.svg?react"
import Github from "../svg/github.svg?react"
import Ethereum from "../svg/ethereum.svg?react"
import Website from "../svg/website.svg?react"
import Twitter from "../svg/twitter.svg?react"

const Home = () => {
  const [address, setAddress] = useState('');
  const [follower, setFollower] = useState('');
  const [following, setFollowing] = useState('');

  const timerId = useRef<NodeJS.Timeout | null>(null);

  const cardRef = useRef<HTMLDivElement>(null!);
  const styleRef = useRef<HTMLStyleElement>(null!);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const addr = searchParams.get('address');
    if (addr) {
      setAddress(addr);
      fetchFollows(addr);
    }

    if (!cardRef.current) return;

    const moveEventHandler = (e: MouseEvent | TouchEvent) => {
      var pos = [0, 0];
      if (e instanceof MouseEvent) pos = [e.pageX - cardRef.current.offsetLeft, e.pageY - cardRef.current.offsetTop];
      if (e instanceof TouchEvent) pos = [e.touches[0].clientX, e.touches[0].clientY];
      e.preventDefault();
      // math for mouse position
      var l = pos[0];
      var t = pos[1];
      var h = cardRef.current.offsetHeight;
      var w = cardRef.current.offsetWidth;
      var px = Math.abs(Math.floor(100 / w * l) - 100);
      var py = Math.abs(Math.floor(100 / h * t) - 100);
      var pa = (50 - px) + (50 - py);
      // math for gradient / background positions
      var lp = (50 + (px - 50) / 1.5);
      var tp = (50 + (py - 50) / 1.5);
      var px_spark = (50 + (px - 50) / 7);
      var py_spark = (50 + (py - 50) / 7);
      var p_opc = 20 + (Math.abs(pa) * 1.5);
      var ty = ((tp - 50) / 2) * -1;
      var tx = ((lp - 50) / 1.5) * .5;
      // css to apply for active card
      var grad_pos = `background-position: ${lp}% ${tp}%;`
      var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
      var opc = `opacity: ${p_opc / 100};`
      // need to use a <style> tag for psuedo elements
      var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
      // set / apply css class and style
      cardRef.current.classList.remove("animated");
      cardRef.current.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
      styleRef.current.innerHTML = style;
      if (e.type === "touchmove") {
        return false;
      }
      if (timerId.current) clearTimeout(timerId.current);
    }

    const cancelEventHandler = () => {
      styleRef.current.innerHTML = "";
      cardRef.current.style.cssText = "";
      timerId.current = setTimeout(() => {
        cardRef.current.classList.add('animated');
      }, 2500);
    }

    cardRef.current.addEventListener('mousemove', moveEventHandler);
    cardRef.current.addEventListener('touchmove', moveEventHandler);
    cardRef.current.addEventListener('mouseout', cancelEventHandler);
    cardRef.current.addEventListener('touchend', cancelEventHandler);
    cardRef.current.addEventListener('touchcancel', cancelEventHandler);

    return () => {
      cardRef.current.removeEventListener('mousemove', moveEventHandler);
      cardRef.current.removeEventListener('touchmove', moveEventHandler);
      cardRef.current.removeEventListener('mouseout', cancelEventHandler);
      cardRef.current.removeEventListener('touchend', cancelEventHandler);
      cardRef.current.removeEventListener('touchcancel', cancelEventHandler);
    }
  }, []);

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (address.trim().length === 0) return;
    fetchFollows(address);
  }

  const fetchFollows = (addr: string) => axios.get(`https://api.ethfollow.xyz/api/v1/users/${addr}/stats`)
    .then(res => {
      setSearchParams({ address: addr });
      setFollower(res.data.followers_count);
      setFollowing(res.data.following_count);
    }).catch(console.error);

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  return (
    <div className="min-h-screen pt-5 pb-20 flex flex-col items-center justify-center px-4">
      <div className="space-y-2">
        <form onSubmit={handleForm}>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-[282px] px-4 py-2 border-[3px] rounded-[8px] border-[#041318] shadow-[0_0_64px_32px_#4493f030]">
              <input value={address} onChange={handleChangeAddress} className="bg-black autofill:bg-black w-full outline-none text-white" name="address" placeholder="ENS or wallet address" />
            </div>
            <button className="px-6 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 text-white bg-[#44bcf00b] hover:bg-[#7298f897] transition-colors duration-300">
              <Search width={16} height={16} />
              <span className="">Search</span>
            </button>
          </div>
        </form>
        <a href="https://github.com/yougogirldoteth/ens-vibe-card" target="_blank" className="px-6 w-full py-3 rounded-[8px] flex items-center justify-center leading-none gap-4 text-white bg-[#44bcf00b] hover:bg-[#7298f897] transition-colors duration-300">
          <span className="flex-1 text-center">How to deploy your own ENS vibe card</span>
          <Github width={16} height={16} />
        </a>
      </div>
      <div ref={cardRef} className="card">
        <div className="relative">
          <img src="/imgs/default-header.svg" alt="" className="w-full rounded-t-[8px]" />
          <img src="/imgs/default-avatar.svg" alt="" className="w-auto sm:w-40 h-[80%] sm:h-40 rounded-full absolute left-1/2 sm:left-[5%] -translate-x-1/2 sm:translate-x-0 bottom-0 translate-y-[20%]" />
        </div>
        <div className="bg-black py-10 px-5 rounded-b-[8px]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="">
              <div className="text-[20px] text-primary font-bold italic">VITALIK.ETH</div>
              <div className="text-secondary font-semibold italic text-[12px] -mt-1">0x29837987520934</div>
            </div>
            <button className="relative z-20 flex justify-center items-center gap-4 border border-secondary/20 rounded-[4px] px-4 py-1 bg-transparent hover:bg-[#44bcf030] transition-colors duration-300">
              <Ethereum color="white" width={16} height={16} />
              <div className="font-bold italic text-primary">{follower}<small className="text-secondary"> FOLOWERS</small></div>
              <div className="font-bold italic text-primary">{following}<small className="text-secondary"> FOLLOWING</small></div>
            </button>
          </div>
          <div className="">
            <div className="text-white/80 font-medium mt-3">min pinxe lo crino toati</div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="relative z-20 px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Website width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
              <button className="relative z-20 px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Twitter width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
              <button className="relative z-20 px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Github width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style ref={styleRef}></style>
    </div>
  )
}

export default Home;