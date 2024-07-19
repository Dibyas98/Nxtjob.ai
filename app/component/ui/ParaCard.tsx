import React from 'react'

function ParaCard({para,contclassName,pclassName}:{para:string,contclassName?:string,pclassName?:string}):React.ReactNode {
    return (
        <div className={`${contclassName}`}>
            <p className={` ${pclassName}`}>{para}</p>
        </div>
    )
}

export default ParaCard