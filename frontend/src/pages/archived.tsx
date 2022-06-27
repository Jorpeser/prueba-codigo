import { Flex, ButtonGroup, Button } from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNews } from '../actions/news';
import ArchivedNews from '../components/ArchivedNews';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import News from '../reducers/news';

interface ArchivedProps {

}

const Archived: React.FC<ArchivedProps> = ({ }) => {
    const [currentId, setCurrentId] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getNews());
    }, [currentId,  dispatch])
    
    return (
        <>
            <Navbar></Navbar>
            <Wrapper variant="regular">
                <Flex flexDirection="column" alignItems='center'>

                    {/* Botonera */}
                    <Flex mb={4}>
                        <Button onClick={() => router.push("/")}>{"Go back"}</Button>
                    </Flex>

                    {/* Archived news */}
                    <ArchivedNews setCurrentId={setCurrentId} />

                </Flex>
            </Wrapper>
        </>
    );
}

export default Archived;