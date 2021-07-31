import React, { useCallback, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image'
import { sample1, Microsoft } from './sampleHtml'

const Render: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const fred = '<b>FRED1</b>'
    const [text, setText] = React.useState('<b>FRED</b>')
    useEffect(() => {
        ;(async () => {
            const response = await fetch('sampleHtml.html')
            if (response.ok) {
                const data = await response.text()
                console.log(data)
                setText(Microsoft)
                // setText('<b>fetch</b>')
            }
        })()
    }, [])

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <>
            <div ref={ref}>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
            </div>
            <button onClick={onButtonClick}>Click me</button>
        </>
    )
}

export default Render
