import React, {useContext,useState,useEffect} from 'react'
import axios from 'axios';
// import { store } from './Details'
import Card from '../Component/Card'
import Smallcard from '../Component/Smallcard';

export const Technology = () => {
  const[api, setApi] = useState([])
    const fetchData = async () => {
        try {
          const response = await axios.get("https://dhir1234567890.herokuapp.com/api/home");
          return response.data;
        } catch (error) {}
      };
      useEffect(() => {
        const apiFetch = async () => {
            setApi(await fetchData());
        };
        apiFetch();
      }, [api]);
  // const [detail ] = useContext(store);
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{ margin: "20px 0px 20px 38%", display: "inline-block" }}>Top Posts</h1>

            <div className="Bigcomponent">
            <div className='Rightside'>
                  {
                    api && api.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 
                      key={n.id}
                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="Leftside">
                    {
                        api && api.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <Smallcard
                            key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                               
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technology