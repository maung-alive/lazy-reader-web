import React, { useEffect, useState } from 'react'
import { Client } from "@gradio/client";

function useAPI() {
    const [ loading, setLoading ] = useState(false);
    const [ results, setResults ] = useState([]);
    const [ paragraph, setParagraph ] = useState();
    
    const fetch = async () => {
        setLoading(true);
        const app = await Client.connect("a-guy-from-burma/lazy-reader-paragraph-keywords");
        await app.predict("/gradio_interface", [paragraph])
        .catch((err) => {
            console.log(err);
        })
        .then((data) => {
            // console.log(JSON.parse(data.data[0]));
            setResults([
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
                {
                    image: "https://picsum.photos/800",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem distinctio reprehenderit hic voluptate facilis exercitationem, sit nulla adipisci veritatis vero natus ducimus doloremque, itaque nihil. Praesentium vitae reiciendis voluptates.",
                },
            ])
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        if(paragraph) {
            fetch();
            setParagraph(false);
        }
    }, [paragraph])

    return [ loading, results, setParagraph ]
}

export default useAPI