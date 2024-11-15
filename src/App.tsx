import Search from "./svg/search.svg?react"
import Github from "./svg/github.svg?react"
import Ethereum from "./svg/ethereum.svg?react"
import Website from "./svg/website.svg?react"
import Twitter from "./svg/twitter.svg?react"

const App = () => {

  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center px-4">
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="w-full sm:w-[282px] px-4 py-2 border-[3px] rounded-[8px] border-[#041318] shadow-[0_0_64px_32px_#4493f030]">
            <input className="bg-black w-full outline-none text-white" placeholder="ENS or wallet address" />
          </div>
          <button className="px-6 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 text-white bg-[#44bcf00b] hover:bg-[#7298f897] transition-colors duration-300">
            <Search width={16} height={16} />
            <span className="">Search</span>
          </button>
        </div>
        <button className="px-6 w-full py-3 rounded-[8px] flex items-center justify-center leading-none gap-4 text-white bg-[#44bcf00b] hover:bg-[#7298f897] transition-colors duration-300">
          <span className="flex-1">How to deploy your own ENS vibe card</span>
          <Github width={16} height={16} />
        </button>
      </div>
      <div className="max-w-[640px] w-full mt-28 border-[3px] border-[#041318] rounded-[8px] shadow-[0_0_200px_#4493f0a0]">
        <div className="relative">
          <img src="/imgs/default-header.svg" alt="" className="w-full rounded-t-[8px]" />
          <img src="/imgs/default-avatar.svg" alt="" className="w-auto sm:w-40 h-[80%] sm:h-40 rounded-full absolute left-1/2 sm:left-[5%] -translate-x-1/2 sm:translate-x-0 bottom-0 translate-y-[20%]" />
        </div>
        <div className="bg-black py-10 px-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="">
              <div className="text-[20px] text-primary font-bold italic">VITALIK.ETH</div>
              <div className="text-secondary font-semibold italic text-[12px] -mt-1">0x29837987520934</div>
            </div>
            <button className="flex justify-center items-center gap-4 border border-secondary/20 rounded-[4px] px-4 py-1 bg-transparent hover:bg-[#44bcf030] transition-colors duration-300">
              <Ethereum color="white" width={16} height={16} />
              <div className="font-bold italic text-primary">5463<small className="text-secondary"> FOLOWERS</small></div>
              <div className="font-bold italic text-primary">5463<small className="text-secondary"> FOLLOWING</small></div>
            </button>
          </div>
          <div className="">
            <div className="text-white/80 font-medium mt-3">min pinxe lo crino toati</div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Website width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
              <button className="px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Twitter width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
              <button className="px-4 py-2 rounded-[8px] flex items-center justify-center leading-none gap-4 bg-[#44bcf015] hover:bg-[#7298f897] transition-colors duration-300">
                <Github width={16} height={16} color="white" />
                <span className="text-white italic font-bold text-[12px]">VITALIK.CA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;