import React, { useCallback, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image'
import CSSInliner from 'css-inliner'

const Render: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [text, setText] = React.useState('<b>FRED</b>')
    const [dataUrl, setDataUrl] = React.useState('')
    useEffect(() => {
        ;(async () => {
            const response = await fetch('beauty.html')
            if (response.ok) {
                const data = await response.text()
                // console.log(data)

                const inliner = new CSSInliner({
                    directory: 'stylesheets',
                })

                const inlined = await inliner.inlineCSSAsync(data)
                console.log(`${inlined}`)

                setText(inlined)

                ref.current!.innerHTML = inlined
                const url = await toPng(ref.current!, { cacheBust: false })
                // console.log(url)
                setDataUrl(url)
            }
        })()
    }, [])

    // const onButtonClick = useCallback(async () => {
    //     if (ref.current === null) {
    //         return
    //     }
    //     try {
    //         const url = await toPng(ref.current, { cacheBust: false })
    //         console.log(url)
    //         setDataUrl(url)
    //         const link = document.createElement('a')
    //         link.download = 'my-image-name.png'
    //         link.href = dataUrl
    //         link.click()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [ref])

    return (
        <>
            <div ref={ref}>
                {/* <div>
                    <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </div> */}
            </div>
            {/* <button onClick={onButtonClick}>Click me</button> */}
            <img src={dataUrl} />
        </>
    )
}

export default Render
