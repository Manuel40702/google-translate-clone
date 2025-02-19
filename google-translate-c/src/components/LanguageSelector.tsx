import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../hooks/constants'
import { FromLanguage, Language, SectionType } from '../Types/types.d'


type Props = | {type: SectionType.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void}
            | {type: SectionType.TO, value: Language, onChange: (language: Language) => void}

export const LanguageSelector= ({onChange, value} : Props)  => {

    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
    </Form.Select>
  )
}
