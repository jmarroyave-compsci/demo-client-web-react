import React, { useEffect, useState, useRef } from 'react'
import Proxy from 'core/ui/layout/proxy';
import XS from './xs'
import MD from './md'
import useWindowDimensions from '../../hooks/use-window-dimensions'

const LayoutProxy = ( props ) => {
  	const { height, width } = useWindowDimensions();
    const ref = useRef();
    const [ offset, setOffset ]  = useState(null)

    useEffect( ()=> {
      const div = ref.current
      setOffset(div.offsetTop)
    }, [height])  	

	return (
		<div ref={ref}>
		{ height != null && offset != null &&
			<Proxy 
				xs={<XS height={height - 90} offset={offset}/>}
				md={<MD height={height - 80} offset={offset}/>}
			/>
		}
		</div>
	) 
}


export default LayoutProxy