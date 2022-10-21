import "./grid-items-link.scss"

type TGridItemLink = {
    externalLink: string,
    imgLink: string,
    title: string,
}

interface IProps {
    items: TGridItemLink[]
}

export const GridItemsLink = ({items}: IProps) => {
    return (
        <div className="ct-container-items-imgs-link">
            {items.map(({imgLink, title, externalLink}, index) => {

                if (title.length >= 28) { // Check maximum title length
                    throw new Error("The maximum allowed title length is 28 digits")
                }

                return (
                <a className="ct-item-link" href={externalLink} key={index+""+title}>
                    <img className="ct-item-img" alt="title" src={imgLink} />
                    <label className="ct-item-title">{title}</label>
                </a>
                )
            })}
        </div>
    )
}
