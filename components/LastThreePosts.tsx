//Last Three Posts component
//API http://localhost:3000/api/posts
/*
    Collection Portfolio
    [{
        "_id": {
            "$oid": "631102f03a93ff232d36926c"
        },
        "post": [
            {
            "_id": 1,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 2,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 3,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 4,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 5,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 6,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            },
            {
            "_id": 7,
            "date": "",
            "title": "Titulo 1",
            "text": "Texto 1",
            "media": 111
            }
        ],
        "info": {
            "title": "TITLE",
            "seo": "SEO"
        }
        }]
*/

import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function LastThreePosts() {
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get(process.env.NEXT_PUBLIC_APP_API_POSTS)
            const data = await res.data

            // Get the last three posts from data
            const lastThreePosts = data[0].post.slice(-2)

            console.log(lastThreePosts)
            setPosts(data)
        }
        getPosts()
    }, [])

    return (
        <div>
            <div>
                <div>
                    <h3>Últimos 3 Posts</h3>
                </div>
            </div>
            <div>
                {posts.map((post, key) => (
                    <div key={post._id}>
                        <div>
                            <div>
                                <h5>{post.title}</h5>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}