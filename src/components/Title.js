import '../styles/title.css'

function Title(props) {
    return (
        <div className="title-wrap">
            <h1 className="title"><span className='hundred-text'>100 Things</span> I love about {props.name}.</h1>
        </div>
    );
}

export default Title;