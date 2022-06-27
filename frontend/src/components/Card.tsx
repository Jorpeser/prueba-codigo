import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNew, updateNew } from '../actions/news';

interface CardProps {
    setCurrentId: (id: string) => void;
    id: string;
    title?: string
    description?: string
    date?: string
    content?: string
    author?: string
    archiveDate?: string
}

export const Card: React.FC<CardProps> = (CardProps) => {

    const dispatch = useDispatch();
    const id = CardProps.id;

    const clickArchive = () => {
        CardProps.setCurrentId(id)

        dispatch<any>(updateNew(id, { archiveDate: new Date().toISOString() }))

    }

    const clickDelete = () => {
        CardProps.setCurrentId(id)

        dispatch<any>(deleteNew(id))

    }

    return (
        <Box
        as={motion.div}
        whileHover={{ scale: 1.05}}
        maxW='lg'
        mt={4} 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        >
            <Box p='6' pb='2'>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                    //ml='2'
                    >
                        {CardProps.date}
                    </Box>
                </Box>

                <Box
                    mt='2'
                    fontWeight='bold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {CardProps.title}
                </Box>

                <Box
                    mt={2}
                    fontWeight='semibold'
                    as='h5'
                    lineHeight='tight'
                    noOfLines={1}>
                    {CardProps.description}
                </Box>

                <Box>
                    {CardProps.content}
                </Box>
                <Flex justifyContent='center' mt='4'>
                    {
                    CardProps.archiveDate !== undefined
                        ? (<Button size="xs" onClick={clickDelete}>Delete</Button>) 
                        : (<Button size="xs" onClick={clickArchive}>Archive</Button>)
                    }
                </Flex>
            </Box>
        </Box>
    );
}