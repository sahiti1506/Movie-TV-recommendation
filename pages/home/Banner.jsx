import React, { useEffect, useState } from "react"
import Img from '../../components/Img'
import FetchData from '../../hooks/FetchData'
import {BannerSkeleton} from '../../components/Skeleton'
import {useNavigate} from 'react-router-dom'

function Banner(){
    const { data, err, loading } = FetchData(`/movie/upcoming`)
    const [image, setImage]=useState('')
    const [value, setValue] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        setImage(data && data?.results[Math.floor(Math.random() * data?.results?.length)]?.backdrop_path)
    },[data])
    
    return (
    <div className="banner">
        {/* <div className="banaer_image">{(loading || err) ? <BannerSkeleton/> : <Img url={image} alt="Banner image" />}</div> */}
        {(loading || err) ? <BannerSkeleton/> : <Img url={image} alt="Banner image" />}
        <div className="mask"></div>
        <div className="banner_contents">
            <h2> Hello Welcome</h2>
            <p>Million of movies,Dramas,Films and people to discover.User can Explore now.</p>
            <form className="input_feild" onSubmit={(e) => {e.preventDefault();navigate(`/search/${value}`); setValue("")}}>
                <input placeholder="    Search for a movie, tv show, person" value={value} onChange={(e) => (setValue(e.target.value))}></input>
                <button type="submit">search</button>
            </form>
        </div>
    </div>)
}
export default Banner