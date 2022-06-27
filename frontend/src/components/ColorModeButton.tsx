import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import React from 'react'


const ColorModeButton: React.FC<{}> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      icon={isDark ? <SunIcon color="#1a202c"/> : <MoonIcon color="white"/>}
      bgColor={isDark ? "#fcba03": "#1a202c"}
      _hover={{ bg: isDark ? "#fcba03": "#1a202c" }}
      aria-label="Toggle Theme"
      //colorScheme="yellow"
      onClick={toggleColorMode}
    />
  )
}

export default ColorModeButton;