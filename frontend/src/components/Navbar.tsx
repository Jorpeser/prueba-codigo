import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import React from 'react';
import ColorModeButton from './ColorModeButton';
import Title from './Title';

const Navbar: React.FC<{}> = ({ }) => {
    return (
        <Flex
            alignItems="center"
            flex="0 1 auto"
        >
            <Flex 
            flex={0}
            ml='56px' // 40px (button size) + 16px (marginRight del button)
            >

            </Flex>
            <Flex 
            flex={1}
            justifyContent="center"
            >
                <Title />
            </Flex>
            <Flex
            mr={4} 
            flex={0}
            justifyContent="right"
            >
                <ColorModeButton />
            </Flex>
        </Flex>
    )
}

export default Navbar;