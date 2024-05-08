import React, { createRef, useState } from 'react'
import { FaCog } from 'react-icons/fa'
import ResultsContainer from './ResultsContainer';
import useAPI from '../hooks/useAPI';

function Generator() {
    const paragraphRef = createRef();
    const [ loading, results, setParagraph ] = useAPI();

    const handleClick = () => {
        if(paragraphRef.current.value != "") {
            setParagraph(paragraphRef.current.value);
        }
    }

    return (
        <div className="w-full">
            <div className="grid md:grid-cols-2 px-10 md:px-10 lg:px-20 xl:px-40 md:mb-20 mb-20 mt-20">
                <div className="w-full flex items-center justify-center mb-16 md:mb-0">
                    <p className="text-base lg:text-lg xl:text-xl font-medium font-serif text-center md:px-16 xl:px-20 leading-10 italic text-gray-900">
                    စာအရှည်ကြီး ဖတ်ရမှာ ပျင်းသူတွေအတွက် လုပ်လိုက်ပါပြီ။
                    Lazy Reader လေးဟာဆိုရင်တော့ စာအရှည်ကြီးတွေ copy paste ပြီး တစ်ကိုက်စာ အပိုဒ်လေးတွေနဲ့အတူ စာနဲ့လိုက်ဖက်မယ့် ပုံလေးတွေလည်း ပြပေးမှာဆို​တော့ သားသားမီးမီးတွေအတွက်လည်း အဆင်ပြေတာပေါ့။
                    လောလောဆယ်တော့ Eng လိုပဲ အဆင်ပြေဦးမှာပါ၊ Myanmar AI, NLP ပိုင်းနဲ့ လုပ်ပေးချင်တယ်ဆိုရင်လည်း ဆက်သွယ်ပေးပါဗျ။
                    </p>
                </div>
                <div className="w-full relative">
                    <textarea
                        rows="15"
                        className={`w-full h-full focus:outline-none border-2 shadow-xl rounded-3xl p-2 text-lg disabled:bg-slate-100 disabled:text-gray-600 ${ loading && "overflow-hidden" }`}
                        placeholder="Paste your text"
                        disabled={loading}
                        ref={paragraphRef}
                    >
                    </textarea>
                    <button onClick={handleClick} className="btn py-2 rounded bg-teal-400 hover:bg-teal-600 text-black hover:text-white group absolute bottom-8 right-8 drop-shadow-xl">
                        Generate
                        <FaCog
                            className={`${ loading && "animate-spin" }`}
                        />
                    </button>
                    {
                        loading && (
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-75">
                                <p className="text-lg font-medium">Generating...</p>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                results.length>0 &&
                <ResultsContainer results={results} />
            }
        </div>
    )
}

export default Generator