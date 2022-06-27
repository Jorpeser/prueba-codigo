import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getNews } from '../actions/news';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { Heading, Spinner } from '@chakra-ui/react';

interface NewsProps {
    setCurrentId: (id: string) => void;
}

const News: React.FC<NewsProps> = ({ setCurrentId }) => {
    const news = useSelector((state: any) => state.news); // segundo parametro para re-render?

    // Seguramente se pueda hacer en el server
    var cleanNews = news.filter( (item :any) => item.archiveDate === null)
    
    return (
        !cleanNews ?
            <Spinner
                thickness='4px'
                speed='0.65s'
                color='red.500'
                size='xl'
            /> : 
        !cleanNews.length ? 
            (<Heading mt={8} textAlign={'center'}>There aren't any news, try to create one or check the archived ones!</Heading>)             
        : (
            <>
                {cleanNews.map((item: any) => (
                    <Card
                        setCurrentId={setCurrentId}
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        content={item.content}
                    />
                ))}
            </>
        )
    );
}

export default News;