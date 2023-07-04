import { useState, useEffect } from 'react'
import axios from 'axios'

const PromptOutput = ({ prompt }) => {
    const [output, setOutput] = useState('')

    useEffect(() => {
        axios
            .post('PaLM2 api url', { prompt })
            .then((response) => setOutput(response.data.output))
            .catch((error) => console.error('Error fetching results: ', error))
    }, [prompt])

    return <div className='prompt-output'>{output}</div>
}

export default PromptOutput
