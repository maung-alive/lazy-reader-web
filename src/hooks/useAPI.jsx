// import React, { useEffect, useState } from 'react'
// import { Client } from "@gradio/client";

// function useAPI() {
//     const [ loading, setLoading ] = useState(false);
//     const [ results, setResults ] = useState([]);
//     const [ paragraph, setParagraph ] = useState();
    
//     const fetch = async () => {
//         setLoading(true);
//         const app = await Client.connect("a-guy-from-burma/lazy-reader-paragraph-keywords");
//         app.predict("/gradio_interface", [paragraph])
//         .then((data) => {
//             data = JSON.parse(data.data[0]);
//             data.forEach((result) => {
//                 let url = `https://pixabay.com/api/?key=43695808-10e225965e425ceb6a2938f14&q=${result.keywords[result.keywords.length-1]}&image_type=photo&pretty=true`
//                 fetch(url)
//                     .then(response => response.json())
//                     .then(data => console.log(data))
//                 setLoading(false);
//             })
//             setResults(data)
//         })
//         .finally(() => {
//             setLoading(false);
//             setParagraph('')
//         })
//     }

//     useEffect(() => {
//         if(paragraph !== '') {
//             fetch();
//         }
//     }, [paragraph])

//     return [ loading, results, setParagraph ]
// }

// export default useAPI

import React, { useEffect, useState } from 'react';
import { Client } from "@gradio/client";

function useAPI() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [paragraph, setParagraph] = useState('');

  const fetch = async () => {
    setLoading(true);
    try {
      const app = await Client.connect("a-guy-from-burma/lazy-reader-paragraph-keywords");
      const data = await app.predict("/gradio_interface", [paragraph]);
      let json_data = JSON.parse(data.data);
      setResults(json_data);
      console.log(json_data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setParagraph('');
    }
  };

  useEffect(() => {
    if (paragraph !== '') {
      fetch();
    }
  }, [paragraph]);

  return [loading, results, setParagraph];
}

export default useAPI;
