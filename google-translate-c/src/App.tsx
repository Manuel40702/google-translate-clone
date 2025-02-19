import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack} from 'react-bootstrap'
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import './App.css'
import { useStore } from './hooks/useStore'
import {LanguageSelector} from './components/LanguageSelector'
import { SectionType } from './Types/types.d'
import { TextArea } from './components/TextArea'
import { actionTranslate } from './services/actionTranslate'
import { FaLanguage } from "react-icons/fa6";

function App() {

    const { state, interchangeLanguages, setFromLanguages, setToLanguage, setFromText, setResult, setLoading} = useStore()
    const { fromLanguage, toLanguage, fromText, loading} = state


    const handleClick = async () => {
        if(fromText === '') return
        setLoading(true)
        const result = await actionTranslate(fromText, fromLanguage, toLanguage)
        if (result && result !== fromText) {
            setResult(result.responseData.translatedText)
        }
        else{
            setResult(fromText)
        }
        setLoading(false)
    }
      
    return (
      <>
        <Container className='z-1'>
          <h1>Google Translate <span className='fs-1'><FaLanguage /></span>
          </h1>
          <Row>
            <Button variant='link' onClick={interchangeLanguages} className='fs-1'>
                <FaArrowRightArrowLeft />
            </Button>
          </Row>
          <Row>
            <Col>
              <Stack gap={2}>
                <LanguageSelector 
                  type={SectionType.FROM}
                  value={state.fromLanguage}
                  onChange={setFromLanguages} />

                <TextArea 
                  type={SectionType.FROM}
                  value={state.fromText}
                  onChange={setFromText}
                   />
                <Button onClick={handleClick}>{loading ? 'Translating...' : 'Traducir'}</Button>
              </Stack>
            </Col>

            <Col>
              <Stack gap={2}>
                <LanguageSelector 
                    type= {SectionType.TO}
                    value={state.toLanguage}
                    onChange={setToLanguage} />
                  
                <TextArea 
                  loading={state.loading}
                  type={SectionType.TO}
                  value={state.result}
                  onChange={setResult}
                   />
              </Stack>
            </Col>

          </Row>
        </Container>
      </>
    )
}

export default App
