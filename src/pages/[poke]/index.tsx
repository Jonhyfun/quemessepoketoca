import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Draggable from "react-draggable";
import localFont from 'next/font/local'

const amsi = localFont({ src: './AmsiProCond-UltraItalic.woff' })

const size = 475 * 1.5;

export default function Home() {
  const [scale, setScale] = useState(1)
  const [dicaPic, setDicaPic] = useState(3)
  const [dica1, setDica1] = useState(false)
  const [dica2, setDica2] = useState(false)
  const [dica3, setDica3] = useState(false)
  const params = useSearchParams()
  const query = useParams()

  return (
    <main
      style={{ background: `url('https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png')`, backgroundSize: `1360px 765px`, backgroundRepeat: `no-repeat` }}
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-white ${amsi.className}`}
    >
      <div style={{ left: `${size - 25}px`, top: `${(size / 2) + 100}px` }} className="fixed grid grid-cols-3 bg-teal-800 h-16 w-[650px]">
        <span style={{ textShadow: '0px 0px 9px BLACK' }} onClick={() => setDica1((current) => !current)} className="flex cursor-pointer justify-center items-center w-full h-full text-4xl -mt-1">{!dica1 ? '' : params.get('dica1')}</span>
        <span style={{ textShadow: '0px 0px 9px BLACK' }} onClick={() => setDica2((current) => !current)} className="flex cursor-pointer justify-center items-center w-full h-full text-4xl -mt-1">{!dica2 ? '' : params.get('dica2')}</span>
        <span style={{ textShadow: '0px 0px 9px BLACK' }} onClick={() => setDica3((current) => !current)} className="flex cursor-pointer justify-center items-center w-full h-full text-4xl -mt-1">{!dica3 ? '' : params.get('dica3')}</span>
      </div>
      <div className="fixed top-[50px] left-[0px] bg-teal-800"
        style={{
          maskImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${query?.poke}.png')`,
          width: `${size}px`,
          height: `${size}px`,
          maskSize: `${size}px`,
          maskRepeat: `no-repeat`,
          maskPosition: `center`,
        }}>
        <div onContextMenu={(e) => { e.preventDefault(); setDicaPic((current) => current > 2 ? 0 : (current + 1)) }} style={{ height: `${size}px`, width: `${size}px` }} className="relative">
          <div style={{ transform: `scale(${scale.toFixed(1)}) translate(0px, 0px)` }}>
            <Draggable>
              <img
                onWheel={(e) => setScale((current) => current + -e.deltaY / 1000)}
                draggable={false}

                className="select-none cursor-move"
                height={`${size}px`}
                width={`${size}px`}
                src={`${params.get('image')}`} />
            </Draggable>
          </div>
          {!(dicaPic >= 1) && <div className="bg-teal-800 w-full h-2/5 absolute top-0 left-0"></div>}
          {dicaPic < 3 && <div className="bg-teal-800 w-full h-[22%] -translate-y-1/2 absolute top-1/2 left-0"></div>}
          {!(dicaPic >= 2) && <div className="bg-teal-800 w-full h-2/5 absolute bottom-0 left-0"></div>}
        </div>
      </div>
    </main>
  );
}
