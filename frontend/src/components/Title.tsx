import { Flex, Heading } from '@chakra-ui/react'
import { Router, useRouter } from 'next/router'

import React from 'react'

interface TitleProps {
  title?: string
}

const Title: React.FC<TitleProps> = ({ title = 'Allfunds news' }) => {

  const router = useRouter();

  return (
    <Flex
      justifyContent="top"
      alignItems="top"
      bgColor={'rgb(213, 0, 50)'}
      bgClip="text"
    >
      <Heading
        onClick={() => router.push("/")}
        cursor="pointer"
        fontSize="5xl">
        {title}
      </Heading>
    </Flex>
  );
}

export default Title;