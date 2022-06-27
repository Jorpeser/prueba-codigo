import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getNews } from '../actions/news';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { Heading, Spinner } from '@chakra-ui/react';

interface ArchivedNewsProps {
    setCurrentId: (id: string) => void;
}

const ArchivedNews: React.FC<ArchivedNewsProps> = ({ setCurrentId }) => {
    const news = useSelector((state: any) => state.news); // segundo parametro para re-render?
    console.log(news)

    // Seguramente se pueda hacer en el server
    var archivedNews = news.filter( (item :any) => item.archiveDate !== null)
    
    return (
        !archivedNews ?
            <Spinner
                thickness='4px'
                speed='0.65s'
                color='red.500'
                size='xl'
            /> : 
        !archivedNews.length ? 
            (<Heading mt={8} textAlign={'center'}>There aren't any archived news, go back and archive your favourites!</Heading>)             
        : (
            <>
                {archivedNews.map((item: any) => (
                    <Card
                        setCurrentId={setCurrentId}
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        date={item.date}
                        archiveDate={item.archiveDate}
                        description={item.description}
                        content={item.content}
                    />
                ))}
            </>
        )
    );
}

export default ArchivedNews;