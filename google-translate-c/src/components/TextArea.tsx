import { Form } from "react-bootstrap"
import { SectionType } from "../Types/types.d"

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = {border: 0, height: '300px', zIndex: 2}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
    if(type === SectionType.FROM){
        return 'Introduce texto'
    }
    if(loading){
        return 'Traduciendo...'
    }
    return 'Traducción'
}

export const TextArea = ({loading, type,value, onChange} : Props) => {

    const style = type === SectionType.FROM
        ? commonStyles
        : {...commonStyles, backgroundColor: 'lightgray'}
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }
    
    return(
        <Form.Control 
            autoFocus= {type === SectionType.FROM}
            disabled={type === SectionType.TO}
            style={style}
            as='textarea'
            placeholder={getPlaceholder({type, loading})}
            value={value}
            onChange={handleChange}
        />
    )


}