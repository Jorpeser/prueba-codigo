
import { Box, Button, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { InputField } from '../components/InputField'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Wrapper from '../components/Wrapper'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNew, getNews } from '../actions/news'

const Index = () => {
  const [currentId, setCurrentId] = useState('');
  const [changeMade, setChangeMade] = useState(false) // trigger to re-render news
  const { isOpen, onOpen, onClose } = useDisclosure(); // for modal
  const router = useRouter();
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch<any>(getNews());
  }, [changeMade, currentId,  dispatch])

  return (

    <>
      <Navbar />
      
      <Wrapper variant="regular">
        <Flex flexDirection="column" alignItems='center'>

          {/* Botonera */}
          <Flex mb={4}>
            <ButtonGroup>
              <Button onClick={onOpen}>{"Create New"}</Button>
              <Button onClick={() => router.push("/archived")}>{"Archived News"}</Button>
            </ButtonGroup>
          </Flex>

          {/* News */}
          <News setCurrentId={setCurrentId}/>

        </Flex>
      </Wrapper>

      {/* Modal para crear nuevas noticias */}
      <Modal size={'lg'} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Formik
              initialValues={{ title: '', description: '', content: '', author: '' }}
              onSubmit={async (values, { setErrors }) => {
                console.log(values)
                dispatch<any>(createNew(values))
                setChangeMade(!changeMade)
                onClose()
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField
                    name="title"
                    label="Title:"
                  />
                  <Box mt={4}>
                    <InputField
                      textarea={true}
                      name="description"
                      label="Description:"
                      type="text" />
                  </Box>
                  <Box mt={4}>
                    <InputField
                      textarea={true}
                      name="content"
                      label="Content:"
                      type="text" />
                  </Box>
                  <Box mt={4}>
                    <InputField
                      name="author"
                      label="Author:"
                    />
                  </Box>
                  <Flex justifyContent='right' mt={4} mb={4}>
                    <Button
                      colorScheme='teal'
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Create
                    </Button>
                    <Button
                      ml={2}
                      colorScheme='red'
                      type="button"
                      onClick={onClose}
                      isLoading={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default Index
