import { useState } from "react"
import "./carousel-img-link.scss"

type TGridItemLink = {
    externalLink: string,
    imgLink: string,
    title: string,
}

interface IProps {
    items: TGridItemLink[]
}

export const CarouselImgLink = ({items}: IProps) => {
    const [currentItem, setCurrentItem] = useState(0)

    const nextItem = (): void => {
        if (currentItem === items.length-1) {return};
        setCurrentItem( currentItem + 1 );
    }
    
    const previusItem = (): void => {
        if (currentItem === 0) {return};
        setCurrentItem( currentItem - 1)
    }

    return (
        <div className="carousel">
            <div className="carousel-container">
                {items.map(({imgLink, title, externalLink}, index) =>
                    <a 
                        className="carousel-item" 
                        key={index+""+title}
                        style={{transform: `translate(-${currentItem * 100}%)`}}
                        href={externalLink}
                    >
                    
                            <label className="carousel-item-title">{title}</label>
                            <img className="carousel-item-img" alt="title" src={imgLink} />
                 
                    </a>
                )}
            </div>

            <button className="button-next button-controller" onClick={previusItem}><i className="fa-solid fa-chevron-left"/></button> 
            <button className="button-previus button-controller" onClick={nextItem}><i className="fa-solid fa-chevron-right"/></button>

            <div className="circle-index">
                {items.map(({title}, index) => <div 
                        key={index+title+"circle"} 
                        className="circle" 
                        style={{
                            transform: (index === currentItem ) ? "scale(1.2)" : undefined,
                            backgroundColor: (index === currentItem ) ? "rgb(255 255 255)" : undefined
                        }}
                />)}
            </div>
        </div>
    )
}
